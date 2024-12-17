"use client";

import { useRouter } from "next/navigation";
import TaskForm from "@/components/TaskForm";
import BackButton from "@/components/BackButton";

export default function AddTodoPage() {
  const router = useRouter();

  const handleAddTask = (title: string, color: string) => {
    console.log("Task added:", { title, color });
    router.push("/");
  };

  return (
    <div className="max-w-lg min-h-screen bg-black text-white p-6 m-auto">
      <BackButton />
      <TaskForm onSubmit={handleAddTask} />
    </div>
  );
}
