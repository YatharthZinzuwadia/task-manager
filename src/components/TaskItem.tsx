import React from "react";
import { Button, Checkbox } from "@mui/material";
import { Task } from "../types";

interface TaskItemProps {
  task: Task; // Prop for the task object
  toggleComplete: (id: number) => void; // Prop for toggling completion status
  deleteTask: (id: number) => void; // Prop for deleting the task
}

const TaskItem = () => {
  return (
    <div>
      <div>
        <Checkbox />
        <p>Task</p>
      </div>
      <Button>Delete</Button>
    </div>
  );
};

export default TaskItem;
