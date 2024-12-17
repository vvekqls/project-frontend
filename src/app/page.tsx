"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import TaskCard from "@/components/TaskCard";
import TaskSummary from "@/components/TaskSummary";
import EmptyState from "@/components/EmptyState";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { fetchAllTasks } from "@/utils";
import { Task } from "@/lib/types";

export default function Home() {
  const {
    data: { data: tasks } = [],
    isLoading,
    isError,
  } = useQuery({
    queryFn: () => fetchAllTasks(),
    queryKey: ["tasks"],
  });
  if (isLoading) return <>Loading...</>;
  if (isError) return <div>Sorry There was an Error</div>;

  const deleteTask = (id: number) => {
    tasks.filter((task: Task) => task.id !== id);
  };

  return (
    <div className="max-w-3xl m-auto relative">
      <div className="max-w-3xl w-full mx-auto p-4 absolute -top-10">
        <Link href="/add">
          <Button className="w-full h-14 mb-6 bg-blue text-sm py-2 rounded font-bold">
            Create Task
            <PlusCircle size={16} />
          </Button>
        </Link>

        <TaskSummary
          total={tasks.length}
          completed={tasks.filter((task: Task) => task.completed).length}
        />

        {tasks.length === 0 ? (
          <EmptyState />
        ) : (
          tasks.map((task: Task) => (
            <TaskCard
              key={task.id}
              id={task.id}
              title={task.title}
              color={task.color}
              completed={task.completed}
              onDelete={() => deleteTask(task.id)}
            />
          ))
        )}
      </div>
    </div>
  );
}
