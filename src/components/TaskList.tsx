import React from "react";
import TaskItem from "./TaskItem";
import { Task } from "../types";

interface TaskListProps {
  tasks: Task[]; // Array of tasks
  toggleComplete: (id: number) => void; // Function to toggle task completion
  deleteTask: (id: number) => void; // Function to delete task
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  toggleComplete,
  deleteTask,
}) => {
  return (
    <div>
      <ul className="space-y-4">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between p-2 bg-gray-50 rounded-md shadow"
          >
            <span
              className={`flex-grow ${
                task.completed ? "line-through text-gray-400" : ""
              }`}
              onClick={() => toggleComplete(task.id)}
            >
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              className="ml-4 text-red-500 hover:text-red-700 transition"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {/* {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      ))} */}
    </div>
  );
};

export default TaskList;
