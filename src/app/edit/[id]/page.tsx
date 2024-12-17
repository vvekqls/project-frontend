"use client";

import { redirect, useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import TaskForm from "@/components/TaskForm";
import BackButton from "@/components/BackButton";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { editTask, fetchTaskById } from "@/utils";

export default function EditTodoPage() {
  const { id } = useParams<{ id: string }>();
  const queryClient = useQueryClient();

  const {
    data: { data: task } = {},
    isLoading,
    isError,
  } = useQuery({
    queryFn: () => fetchTaskById(id),
    queryKey: ["task", "tasks"],
  });

  const mutation = useMutation({
    mutationFn: (formData: { title: string; color: string }) => {
      return editTask(id, formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  if (isLoading) return <>Loading...</>;
  if (isError) return <div>Sorry There was an Error</div>;

  const handleSaveTask = (title: string, color: string) => {
    mutation.mutate({ title, color });
    redirect("/");
  };

  return (
    <div className="max-w-3xl min-h-screen bg-background text-white p-6 m-auto">
      <BackButton />
      <TaskForm onSubmit={handleSaveTask} taskData={task} />
    </div>
  );
}
