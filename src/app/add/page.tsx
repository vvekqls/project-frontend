"use client";

import { redirect } from "next/navigation";
import TaskForm from "@/components/TaskForm";
import BackButton from "@/components/BackButton";
import { createTask } from "@/utils";
import { useQueryClient, useMutation } from "@tanstack/react-query";

export default function AddTodoPage() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (formData: { title: string; color: string }) => {
      return createTask(formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const handleAddTask = async (title: string, color: string) => {
    mutation.mutate({ title, color });
    redirect("/");
  };

  return (
    <div className="max-w-3xl min-h-screen bg-background text-white p-6 m-auto">
      <BackButton />
      <TaskForm onSubmit={handleAddTask} />
    </div>
  );
}
