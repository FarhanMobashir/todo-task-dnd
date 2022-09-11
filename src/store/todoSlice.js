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

const initialState = {
  todo: [createTask("task 1", "Сделать задание по теме курса", "todo")],
  inProgress: [
    createTask("task 2", "Сделать задание по теме курса", "inProgress"),
    createTask("task 3", "Сделать задание по теме курса", "inProgress"),
  ],
  completed: [
    createTask("task 4", "Сделать задание по теме курса", "completed"),
  ],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state[action.payload.status].push(
        createTask(
          action.payload.title,
          action.payload.description,
          action.payload.status
        )
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
  },
});

export const { addTask, removeTask, updateTask } = todoSlice.actions;
