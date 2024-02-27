import { createSlice } from '@reduxjs/toolkit';

const bookmarksSlice = createSlice({
  name: 'bookmarks',
  initialState: [],
  reducers: {
    addBookmark: (state, action) => {
      const bookExists = state.some(book => book.id === action.payload.id);
      if (!bookExists) {
        state.push(action.payload);
      }
    },
    removeBookmark: (state, action) => {
      return state.filter(book => book.id !== action.payload);
    },
  },
});

export const { addBookmark, removeBookmark } = bookmarksSlice.actions;

export default bookmarksSlice.reducer;
