import { createSlice, nanoid } from "@reduxjs/toolkit";

const status = {
  todo: "todo",
  inProgress: "inProgress",
  completed: "completed",
};

const createTask = (title, description, status) => ({
  id: nanoid(),
  title,
  description,
  status,
});

const initialState = [
  createTask("Learn React", "Learn React", "todo"),
  createTask("Learn Redux", "Learn Redux", "inProgress"),
  createTask("Learn TypeScript", "Learn TypeScript", "completed"),
];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(createTask(action.payload.title, action.payload.description));
    },
    removeTask: (state, action) => {
      state.splice(action.payload.index, 1);
    },
    updateTask: (state, action) => {
      const { index, title, description, status } = action.payload;
      state[index] = { ...state[index], title, description, status };
    },
  },
});
