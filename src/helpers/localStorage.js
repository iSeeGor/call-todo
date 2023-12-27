export const getFromLocalStorage = (key) => {
  const store = localStorage.getItem(key);

  return store ? JSON.parse(store) : false;
};
