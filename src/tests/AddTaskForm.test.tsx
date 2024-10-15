import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddTaskForm from "../components/AddTaskForm";

describe("AddTaskForm", () => {
  // it("should add a new task", () => {
  //     const addTask = jest.fn();
  // })
  //Test Case : check if form is rendered correctly
  test("render form correctly", () => {
    //render component and store in vDOM
    render(<AddTaskForm addTask={jest.fn()} />); //passing mock props
    const inputElement = screen.getByLabelText("New Task"); //query for input element
    const buttonElement = screen.getByRole("button"); //query for button element

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  //Test case: check if addTask is called onSubmit
  test("check if addTask is called onSubmit", () => {
    const addTaskMock = jest.fn(); //mock fn to track call
    render(<AddTaskForm addTask={addTaskMock} />); //render component with mock fn

    const inputElement = screen.getByLabelText("New Task");
    const buttonElement = screen.getByRole("button");

    fireEvent.change(inputElement, {
      target: {
        value: "NewTask",
      },
    });

    fireEvent.click(buttonElement);

    expect(addTaskMock).toHaveBeenCalledWith({
      //   id: expect.toSatisfy((id) => typeof id === "number"),
      id: expect.any(Number),
      text: "NewTask",
      completed: false,
    });
  });
});
