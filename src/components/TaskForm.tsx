"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface TaskFormProps {
  onSubmit: (title: string, color: string) => void;
  initialData?: { title: string; color: string };
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, initialData }) => {
  const [title, setTitle] = useState(initialData?.title || "");
  const [selectedColor, setSelectedColor] = useState(
    initialData?.color || "#f87171"
  );

  const colors = [
    "#f87171", // Red
    "#fbbf24", // Orange
    "#facc15", // Yellow
    "#34d399", // Green
    "#60a5fa", // Blue
    "#a78bfa", // Purple
    "#f472b6", // Pink
    "#a78d70", // Brown
  ];

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setSelectedColor(initialData.color);
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title) onSubmit(title, selectedColor);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-4 max-w-lg mx-auto">
      <label className="block text-lg mb-2">Title</label>
      <Input
        placeholder="Ex. Brush your teeth"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="bg-gray-800 text-white"
      />

      <p className="text-lg mb-2">Color</p>
      <div className="flex gap-4">
        {colors.map((color) => (
          <button
            key={color}
            type="button"
            onClick={() => setSelectedColor(color)}
            className={`w-8 h-8 rounded-full ${
              selectedColor === color ? "ring-2 ring-blue-400" : ""
            }`}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      <Button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 py-2 text-lg"
      >
        {initialData ? "Save ✔" : "Add Task ➕"}
      </Button>
    </form>
  );
};

export default TaskForm;
