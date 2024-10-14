import { Button, Checkbox } from "@mui/material";
import React from "react";

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
