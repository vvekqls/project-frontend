"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import TaskForm from "@/components/TaskForm";
import BackButton from "@/components/BackButton";

export default function EditTodoPage() {
  const router = useRouter();
  const { id } = useParams();
  const [task, setTask] = useState<{ title: string; color: string } | null>(
    null
  );

  // Simulate fetching task data
  useEffect(() => {
    // Replace with API fetch logic
    const fetchedTask = { title: "Brush you teeth", color: "#f87171" };
    setTask(fetchedTask);
  }, [id]);

  const handleSaveTask = (title: string, color: string) => {
    console.log(`Task ${id} updated:`, { title, color });
    router.push("/");
  };

  if (!task) return <div className="text-center text-white">Loading...</div>;

  return (
    <div className="max-w-lg min-h-screen bg-black text-white p-6 m-auto">
      <BackButton />
      <TaskForm onSubmit={handleSaveTask} initialData={task} />
    </div>
  );
}
