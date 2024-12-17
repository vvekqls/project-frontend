"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import TaskCard from "@/components/TaskCard";
import TaskSummary from "@/components/TaskSummary";
import EmptyState from "@/components/EmptyState";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { updateCompletion } from "@/utils";

interface Task {
  id: number;
  title: string;
  color: string;
  completed: boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    try {
      fetch("http://localhost:3001/tasks/")
        .then((res) => res.json())
        .then((data) => {
          const { data: tasksData } = data;
          setTasks(tasksData);
        });
    } catch (e) {
      console.log("error", e);
    }
  }, []);

  const toggleCompletion = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task: Task) => {
        if (task.id === id) {
          updateCompletion(id, task);
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
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
          completed={tasks.filter((task) => task.completed).length}
        />

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
