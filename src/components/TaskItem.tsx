import React from "react";
import { Button, Checkbox } from "@mui/material";
import { Task } from "../types";

interface TaskItemProps {
  task: Task; // Prop for the task object
  toggleComplete: (id: number) => void; // Prop for toggling completion status
  deleteTask: (id: number) => void; // Prop for deleting the task
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  toggleComplete,
  deleteTask,
}) => {
  return (
    <div className="flex justify-between items-center mb-2">
      <div>
        <Checkbox
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
        />
        <p>{task.text}</p>
      </div>
      <Button
        variant="contained"
        color="error"
        onClick={() => deleteTask(task.id)}
      >
        Delete
      </Button>
    </div>
  );
};

export default TaskItem;
