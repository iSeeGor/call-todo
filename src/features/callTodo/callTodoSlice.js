import { createSlice } from '@reduxjs/toolkit';
import { isObject } from '../../helpers/object.js';
import { getFromLocalStorage } from '../../helpers/localStorage.js';

const lazyInitialState = () => {
  const data = getFromLocalStorage('callTodos');
  return data ? data : [];
};

export const callTodoSlice = createSlice({
  name: 'callTodos',
  initialState: {
    list: lazyInitialState(),
  },
  reducers: {
    addCall(state, { payload }) {
      isObject(payload) && state.list.push(payload);
    },
    removeCall(state, action) {
      state.list = state.list.filter((obj) => obj.time !== action.payload.time);
    },
  },
});

export const { addCall, removeCall } = callTodoSlice.actions;

export default callTodoSlice.reducer;
