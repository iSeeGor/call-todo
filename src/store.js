import { configureStore } from '@reduxjs/toolkit';
import callTodoReducer from './features/callTodo/callTodoSlice';
import filterReducer from './features/filter/filterSlice';
import sortingReducer from './features/sorting/sortingSlice';
import { localStorageMiddleware } from './middleware/localStorageMiddleware.js';

const reducer = {
  callTodos: callTodoReducer,
  filter: filterReducer,
  sorting: sortingReducer,
};

export default configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), localStorageMiddleware('callTodos')],
});
