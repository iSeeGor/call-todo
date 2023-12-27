export const localStorageMiddleware = (key) => (store) => (next) => (action) => {
  const result = next(action);
  const callTodos = store.getState().callTodos.list;

  localStorage.setItem(key, JSON.stringify(callTodos));
  return result;
};
