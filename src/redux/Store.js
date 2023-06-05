import { configureStore } from "@reduxjs/toolkit";
import {
  todoListReducer,
  OnchangeSliceReducer,
  OpenModelReducer,
} from "./TodolistSlice";

export default configureStore({
  reducer: {
    Task: todoListReducer,
    Onchange: OnchangeSliceReducer,
    Model: OpenModelReducer,
  },
});
