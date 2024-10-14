import React from "react";
import TaskItem from "./TaskItem";
import { Task } from "../types";

interface TaskListProps {
  tasks: Task[]; // Array of tasks
  toggleComplete: (id: number) => void; // Function to toggle task completion
  deleteTask: (id: number) => void; // Function to delete a task
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  toggleComplete,
  deleteTask,
}) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
