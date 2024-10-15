import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddTaskForm from "../components/AddTaskForm";

describe("AddTaskForm", () => {
    // it("should add a new task", () => {
    //     const addTask = jest.fn();
    // })
    test("render form correctly", ()=>{
        //render component and store in vDOM
        render(<AddTaskForm addTask={jest.fn()}/>);//passing mock props
        const inputTask = screen.getByPlaceholderText("Add New Task"); //query for input element
        const buttonElement = screen.getByRole("button"); //query for button element
    })
})