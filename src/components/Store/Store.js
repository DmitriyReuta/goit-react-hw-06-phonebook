import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from '../ContactSlice/ContactSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

export default store;