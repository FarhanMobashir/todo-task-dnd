import { createSlice, nanoid } from "@reduxjs/toolkit";

const createTask = (title, description, status) => ({
  id: nanoid(),
  title,
  description,
});

const initialState = {
  todo: [createTask("task 1", "this is task 1")],
  inProgress: [createTask("task 2", "this is task 2")],
  completed: [createTask("task 3", "this is task 3")],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state[action.payload.status].push(
        createTask(action.payload.title, action.payload.description)
      );
    },
    removeTask: (state, action) => {
      state[action.payload.status].splice(
        state[action.payload.status].findIndex(
          (task) => task.id === action.payload.id
        ),
        1
      );
      //   state.splice(state.indexOf(action.payload), 1);
    },
    updateTask: (state, action) => {
      return action.payload;
      //   const { index, title, description, status } = action.payload;
      //   state[index] = { ...state[index], title, description, status };
    },
    clearTask: (state, action) => {
      return (state = initialState);
    },
  },
});

export const { addTask, removeTask, updateTask, clearTask } = todoSlice.actions;
