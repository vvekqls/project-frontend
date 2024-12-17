"use client";

import { redirect } from "next/navigation";
// import { revalidatePath } from "next/cache";
import TaskForm from "@/components/TaskForm";
import BackButton from "@/components/BackButton";
import { createTask } from "@/utils";

export default function AddTodoPage() {
  const handleAddTask = async (title: string, color: string) => {
    await createTask(title, color);
    redirect("/");
  };

  return (
    <div className="max-w-3xl min-h-screen bg-background text-white p-6 m-auto">
      <BackButton />
      <TaskForm onSubmit={handleAddTask} />
    </div>
  );
}
