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
