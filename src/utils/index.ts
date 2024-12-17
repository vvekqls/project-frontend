export const fetchAllTasks = async () => {
  const response = await fetch("http://localhost:3001/tasks/");
  if (!response.ok) {
    throw new Error("Failed to get tasks");
  }
  return response.json();
};

export const fetchTaskById = async (id: string | string[] | undefined) => {
  const response = await fetch(`http://localhost:3001/task/${id}`);
  if (!response.ok) {
    throw new Error("Failed to get tasks");
  }
  return response.json();
}

export const createTask = async (data: { title: string, color: string }) => {
  const { title, color } = data;

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
    })
  } catch (e) {
    console.log(e, 'updating task completion failed')
  }
}

export const updateCompletion = async (id: string, completed: boolean) => {
  try {
    await fetch(`http://localhost:3001/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        completed: !completed,
      })
    })
  } catch (e) {
    console.log(e, 'updating task completion failed')
  }
}

export const editTask = async (id: string, data: { title: string, color: string }) => {
  const { title, color } = data;
  try {
    await fetch(`http://localhost:3001/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        color
      })
    })
  } catch (e) {
    console.log(e, 'updating task completion failed')
  }
}

export const deleteTask = async (id: string,) => {

  try {
    await fetch(`http://localhost:3001/tasks/${id}`, {
      method: 'DELETE',
    }).then(res => {
      if (!res.ok) {
        throw new Error('Something went wrong')
      }
    })
  } catch (e) {
    console.log(e, 'updating task completion failed')
  }
}