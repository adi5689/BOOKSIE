// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import bookmarksReducer from './features/bookmarks/bookmarkSlice';
import userReducer from './features/user/userSlice';

export default configureStore({
  reducer: {
    bookmarks: bookmarksReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
