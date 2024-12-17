"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PlusCircle, Check } from "lucide-react";

interface TaskFormProps {
  onSubmit: (title: string, color: string) => void;
  initialData?: { title: string; color: string };
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, initialData }) => {
  const [title, setTitle] = useState(initialData?.title || "");
  const [selectedColor, setSelectedColor] = useState(
    initialData?.color || "#f87171"
  );

  const router = useRouter();

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
    router.push("/");
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
        {initialData ? (
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
