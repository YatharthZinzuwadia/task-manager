import React, { useState, useEffect } from "react";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Task Manager</h1>
      <AddTaskForm />
      <TaskList />
    </div>
  );
}

export default App;

/*
Task Guidelines : 
a simple task management application
features : Add task
           Delete Task
           Mark Update/Not update
*/
