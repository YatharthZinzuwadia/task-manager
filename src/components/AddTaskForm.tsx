import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { Task } from "../types"; //import for type safety

interface AddTaskFormProps {
  addTask: (task: Task) => void; // must follow the Task type
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ addTask }) => {
  const [taskContent, setTaskContent] = useState<string>(""); // store the new task text

  const onSubmitEventHandler = (e: React.FormEvent) => {
    e.preventDefault(); //prevent refresh
    if (taskContent.trim()) {
      const newTask: Task = {
        // Creates new task object
        id: Date.now(),
        text: taskContent,
        completed: false,
      };
      addTask(newTask); //call from props
      setTaskContent("");
    }
  };

  return (
    <form onSubmit={onSubmitEventHandler} className="flex gap-2 mb-4 flex-col">
      <TextField
        className="flex-grow border border-gray-300 rounded-l-lg p-2 focus:outline-none focus:ring focus:border-blue-500"
        label="New Task"
        variant="outlined"
        fullWidth
        value={taskContent}
        onChange={(e) => setTaskContent(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <Button
        className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition"
        type="submit"
        variant="contained"
        sx={{ bgcolor: "green.300" }}
      >
        Add Task
      </Button>
    </form>
  );
};

export default AddTaskForm;
