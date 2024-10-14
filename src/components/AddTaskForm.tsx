import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { Task } from "../types";

const AddTaskForm = ({ addTask }) => {
  const [taskContent, setTaskContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskContent.trim()) {
      addTask({ id: Date.now(), text: taskContent, completed: false });
      setTaskContent("");
    } else {
      alert("Task cannot be empty");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <TextField
        id="outlined-basic"
        value={taskContent}
        label="Add Task"
        variant="outlined"
        sx={{ flex: 1 }}
      />
      <Button type="submit" variant="contained" sx={{ bgcolor: "green.500" }}>
        Add
      </Button>
    </form>
  );
};

export default AddTaskForm;
