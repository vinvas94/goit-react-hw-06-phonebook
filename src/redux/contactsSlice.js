import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { nanoid } from 'nanoid';

export const contactsSlice = createSlice({
  name: 'userContacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push({ id: nanoid(), ...action.payload });
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
};

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;

export const getContacts = state => state.userContacts.items;
export const getFilter = state => state.userContacts.filter;

export default persistReducer(persistConfig, contactsSlice.reducer);
