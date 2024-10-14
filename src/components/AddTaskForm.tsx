import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { Task } from "../types"; //import for type safety

interface AddTaskFormProps {
  addTask: (task: Task) => void; // must follow the Task type
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ addTask }) => {
  const [taskContent, setTaskContent] = useState<string>(""); // store the new task text

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); //prevent refresh
    if (taskContent.trim()) {
      const newTask: Task = {
        id: Date.now(),
        text: taskContent,
        completed: false,
      }; // Creates new task object
      addTask(newTask); //call from props
      setTaskContent("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <TextField
        label="New Task"
        variant="outlined"
        fullWidth
        value={taskContent}
        onChange={(e) => setTaskContent(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <Button type="submit" variant="contained" sx={{ bgcolor: "green.300" }}>
        Add Task
      </Button>
    </form>
  );
};

export default AddTaskForm;
