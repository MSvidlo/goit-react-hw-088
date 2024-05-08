
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  ContactFrom from './components/ContactForm/ContactForm';
import ContacList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import { fetchContacts } from './redux/contactsOps';

const App = () => {
  const dispatch = useDispatch();
  const selectLoading = useSelector((state) => state.contacts.isLoading);
  const selectError= useSelector((state)=>state.contacts.error)
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactFrom />
       {selectLoading && !selectError && <b>Request in progress...</b>}
      <SearchBox />
      <ContacList />
    </div>
  );
};

export default App;
 
