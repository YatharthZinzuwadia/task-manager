import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { Task } from "../types";

//had to use the help of internet and AI to realize why this interface was needed, and how it works.
// interface Props {
//   addTask: (task: Task) => void;
// }
//React.FC<Props> solution for resolving error of "any" was given by the internet.
const AddTaskForm = () => {
  const [taskContent, setTaskContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    // e.preventDefault();
    // if (taskContent.trim()) {
    //   addTask({ id: Date.now(), text: taskContent, completed: false });
    //   setTaskContent("");
    // } else {
    //   alert("Task cannot be empty");
    // }
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
