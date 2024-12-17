import { Task } from "@/lib/types";

export const fetchAllTasks = async () => {
  const response = await fetch("http://localhost:3001/tasks/");
  if (!response.ok) {
    throw new Error("Failed to get tasks");
  }
  return response.json();
};

export const createTask = async (title: string, color: string) => {
  try {
    await fetch(`http://localhost:3001/tasks/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        color
      })
    }).then(() => {
      location.reload()
    })
  } catch (e) {
    console.log(e, 'updating task completion failed')
  }
}

export const updateCompletion = async (id: number, task: Task) => {
  try {
    console.log('--id--', id, task)
    await fetch(`http://localhost:3001/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        completed: !task.completed,
      })
    })
  } catch (e) {
    console.log(e, 'updating task completion failed')
  }
}