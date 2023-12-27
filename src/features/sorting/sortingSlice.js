import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  order: 'asc',
  sortby: 'time',
};

export const sortingSlice = createSlice({
  name: 'sorting',
  initialState,
  reducers: {
    changeSorting(state, action) {
      state.order = state.order === 'asc' ? 'desc' : 'asc';
      state.sortby = action.payload.sortby;
    },
  },
});

export const { changeSorting } = sortingSlice.actions;

export default sortingSlice.reducer;
