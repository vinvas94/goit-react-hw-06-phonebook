import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contactsSlice';

export const App = () => {
  const dispatch = useDispatch();

  const formSubmitHandler = data => {
    dispatch(addContact(data));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
