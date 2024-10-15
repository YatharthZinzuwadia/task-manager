import React from "react";
import TaskList from "../components/TaskList";
import { Task } from "../types";
import { render, screen } from "@testing-library/react";

//sample array
const tasks: Task[] = [
  { id: 1, text: "Task 1", completed: false },
  { id: 2, text: "Task 2", completed: true },
  { id: 3, text: "Task 3", completed: false },
];

//define suite for tests
describe("TaskList", () => {
  //Test : renders correctly
  test("renders task list", () => {
    render(
      <TaskList
        tasks={tasks}
        toggleComplete={jest.fn()}
        deleteTask={jest.fn()}
      />
    ); //render component with mock fn

    const TaskListElement = screen.getByText("Task 1"); //query for task element
    expect(TaskListElement).toBeInTheDocument();
  });
});
