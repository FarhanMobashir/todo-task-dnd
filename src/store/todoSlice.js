import { createSlice, nanoid } from "@reduxjs/toolkit";

// const status = {
//   todo: "todo",
//   inProgress: "inProgress",
//   completed: "completed",
// };

const createTask = (title, description, status) => ({
  id: nanoid(),
  title,
  description,
  status,
});

const initialState = [
  createTask("Learn React", "Learn React", "todo"),
  createTask("Learn Redux", "Learn Redux", "inProgress"),
  createTask("Learn Redux", "Learn Redux", "inProgress"),
  createTask("Learn TypeScript", "Learn TypeScript", "completed"),
  createTask("Learn TypeScript", "Learn TypeScript", "completed"),
];

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(
        createTask(
          action.payload.title,
          action.payload.description,
          action.payload.status
        )
      );
    },
    removeTask: (state, action) => {
      console.log(action.payload);
      state.splice(state.indexOf(action.payload), 1);
    },
    updateTask: (state, action) => {
      const { index, title, description, status } = action.payload;
      state[index] = { ...state[index], title, description, status };
    },
  },
});

export const { addTask, removeTask, updateTask } = todoSlice.actions;
