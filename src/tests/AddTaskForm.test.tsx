import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddTaskForm from "../components/AddTaskForm";

describe("AddTaskForm", () => {
  // it("should add a new task", () => {
  //     const addTask = jest.fn();
  // })
  test("render form correctly", () => {
    //render component and store in vDOM
    render(<AddTaskForm addTask={jest.fn()} />); //passing mock props
    const inputElement = screen.getByPlaceholderText("Add New Task"); //query for input element
    const buttonElement = screen.getByRole("button"); //query for button element

    expect(inputElement).toBeInDocument();
    expect(buttonElement).toBeInDocument();
  });

  //Test case 1: check if addTask is called onSubmit
  test("check if addTask is called onSubmit", () => {
    const addTaskMock = jest.fn(); //mock fn to track call
    render(<AddTaskForm addTask={addTaskMock} />); //render component with mock fn

    const inputElement = screen.getByPlaceholderText("Add New Task");
    const buttonElement = screen.getByRole("button");
  });
});
