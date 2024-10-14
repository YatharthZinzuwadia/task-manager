import React, { useState, useEffect } from "react";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import { Task } from "./types";
import "./App.css";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]); // State to manage list of tasks

  //load tasks on mount
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    setTasks(savedTasks);
  }, []);

  //save tasks to local storage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, tasks);

  //add task function
  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  //mark complete task function
  const toggleComplete = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  //delete task function
  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold text-blue-800 mb-8">Task Manager</h1>
      <div className="w-full max-w-md bg-gray-200 shadow-xl rounded-xl p-4">
        <AddTaskForm addTask={addTask} />
        <TaskList
          tasks={tasks}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
};

export default App;

/*
Task Guidelines : 
a simple task management application
features : Add task
           Delete Task
           Mark Update/Not update
references : https://stackoverflow.com/questions/59988667/typescript-react-fcprops-confusion
https://stackoverflow.com/questions/70744017/passing-interface-props-in-functional-component-in-typescript

*/
