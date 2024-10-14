import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { Task } from "../types";

const AddTaskForm = () => {
  const handleSubmit = () => {};

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <TextField
        id="outlined-basic"
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
