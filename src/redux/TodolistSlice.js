import { createSlice } from "@reduxjs/toolkit";

const TodolistSlice = createSlice({
  name: "Task",
  initialState: {
    taskArray: JSON.parse(localStorage.getItem("debts")) || [],
    totalDebt: 0,
  },
  reducers: {
    AddTask(state, action) {
      state.taskArray.push(action.payload);
      localStorage.setItem("debts", JSON.stringify(state.taskArray));
    },
    RemoveTask(state, action) {
      const filterTask = state.taskArray.filter((e) => e.id !== action.payload);
      localStorage.setItem("debts", JSON.stringify(filterTask));
      return {
        taskArray: filterTask,
      };
    },
    TotolDebts(state, action) {
      const changeJson = JSON.parse(JSON.stringify(state.taskArray));
      const totaldebts = changeJson
        .map((e) => Number(e.amount))
        .reduce((total, currentvalue) => (total = total + currentvalue), 0);

      state.totalDebt = totaldebts;
    },
  },
});

const OnchangeSlice = createSlice({
  name: "Onchange",
  initialState: {
    inputName: "",
    inputNumber: 0,
  },
  reducers: {
    setInputChange(state, action) {
      state.inputName = action.payload;
    },
    setInputNumberChange(state, action) {
      state.inputNumber = action.payload;
    },
  },
});

const OpenModel = createSlice({
  name: "Model",
  initialState: {
    openmodel: false,
    deletemodel: false,
    getDebtId: 0,
  },
  reducers: {
    setOpenmodel(state, action) {
      state.openmodel = action.payload;
    },
    setDeletemodel(state, action) {
      state.deletemodel = action.payload;
    },
    setGetDebtId(state, action) {
      state.getDebtId = action.payload;
    },
  },
});

export const { AddTask, RemoveTask, TotolDebts } = TodolistSlice.actions;
export const todoListReducer = TodolistSlice.reducer;

export const { setInputChange, setInputNumberChange } = OnchangeSlice.actions;
export const OnchangeSliceReducer = OnchangeSlice.reducer;

export const { setOpenmodel, setDeletemodel, setGetDebtId } = OpenModel.actions;
export const OpenModelReducer = OpenModel.reducer;
