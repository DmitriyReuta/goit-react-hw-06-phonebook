import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './ContactSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

export default store;