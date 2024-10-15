import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TaskItem from "../components/TaskItem";
import { Task } from "../types";

//sample data
const task: Task = {
  id: 1,
  text: "Sample task",
  completed: false,
};

//define test suite
describe("TaskItem", () => {
  //Test :
  test("renders task", () => {
    render(
      <TaskItem task={task} toggleComplete={jest.fn()} deleteTask={jest.fn()} /> //render component with mock fn
    );
    const TaskElement = screen.getByText("Sample task"); //query for task element with sample data
    expect(TaskElement).toBeInTheDocument(); //the check
  });

  // TestCase : check if toggleComplete is called
  test("calls toggleComplete when checkbox is clicked", () => {
    const toggleCommpleteMock = jest.fn(); //mock fn to track call
    render(
      <TaskItem
        task={task}
        toggleComplete={toggleCommpleteMock} //render element with mock fn in function to be tested
        deleteTask={jest.fn()}
      />
    );
    
  });
});
