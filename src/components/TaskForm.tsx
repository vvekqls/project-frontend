"use client";

import { redirect } from "next/navigation";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PlusCircle, Check } from "lucide-react";

interface TaskFormProps {
  onSubmit: (title: string, color: string) => void;
  taskData?: { title: string; color: string };
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, taskData }) => {
  const [title, setTitle] = useState(taskData?.title || "");
  const [selectedColor, setSelectedColor] = useState(
    taskData?.color || "#ff0000"
  );

  const colors = [
    "#ff0000", // Red
    "#ff8000", // Orange
    "#ffff00", // Yellow
    "#00ff00", // Green
    "#0000ff", // Blue
    "#8000ff", // DarkBlue
    "#bf00ff", // Purple
    "#ff0080", // Pink
    "#cc9900", // brown
  ];

  useEffect(() => {
    if (taskData) {
      setTitle(taskData.title);
      setSelectedColor(taskData.color);
    }
  }, [taskData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title) onSubmit(title, selectedColor);
    redirect("/");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-4 max-w-3xl mx-auto">
      <label className="block font-bold text-sm text-blue mb-2">Title</label>
      <Input
        className="bg-foreground h-14 border-foreground border-2"
        placeholder="Ex. Brush your teeth"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <p className="font-bold text-sm text-blue mb-2">Color</p>
      <div className="flex gap-4">
        {colors.map((color) => (
          <button
            key={color}
            type="button"
            onClick={() => setSelectedColor(color)}
            className={`w-14 h-14 rounded-full ${
              selectedColor === color ? "ring-2 ring-white" : ""
            }`}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      <Button
        type="submit"
        className="w-full h-14 mb-6 bg-blue text-sm py-2 rounded font-bold"
      >
        {taskData ? (
          <>
            Save
            <Check size={24} strokeWidth={5} />
          </>
        ) : (
          <>
            Add Task
            <PlusCircle size={16} />
          </>
        )}
      </Button>
    </form>
  );
};

export default TaskForm;
