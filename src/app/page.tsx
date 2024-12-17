"use client";

import Link from "next/link";
import { useState } from "react";
import TaskCard from "@/components/TaskCard";
import TaskSummary from "@/components/TaskSummary";
import EmptyState from "@/components/EmptyState";
import { Button } from "@/components/ui/button";

interface Task {
  id: number;
  title: string;
  color: string;
  completed: boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([
    // Example tasks (replace with API or state management)
    { id: 1, title: "Finish coding task", color: "#34d399", completed: false },
    {
      id: 3,
      title:
        "Finish coding task asdasdasdasdasdasdasdasdasddasd asdasdasdasdasdasd dasdasdasd",
      color: "#34d399",
      completed: false,
    },
    {
      id: 2,
      title: "Push changes to GitHub",
      color: "#fbbf24",
      completed: true,
    },
  ]);

  const toggleCompletion = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Content */}
      <div className="max-w-3xl mx-auto p-4">
        {/* Create Task Button */}
        <Link href="/add">
          <Button className="w-full mb-6 bg-blue-500 hover:bg-blue-600 text-lg py-2 rounded">
            Create Task ➕
          </Button>
        </Link>

        {/* Task Summary */}
        <TaskSummary
          total={tasks.length}
          completed={tasks.filter((task) => task.completed).length}
        />

        {/* Task List */}
        {tasks.length === 0 ? (
          <EmptyState />
        ) : (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              id={task.id}
              title={task.title}
              color={task.color}
              completed={task.completed}
              onToggle={() => toggleCompletion(task.id)}
              onDelete={() => deleteTask(task.id)}
            />
          ))
        )}
      </div>
    </div>
  );
}
