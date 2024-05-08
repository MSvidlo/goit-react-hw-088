import Contact from "../Contact/Contact";
import React from "react";
import css from './ContactList.module.css';
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => { 
  const filteredContacts = useSelector(selectFilteredContacts);
   
    return (
        <ul className={css.contactsList}>
            {filteredContacts.map((contact) => (
                <li key={contact.id}>
                    <Contact contactData={contact} 
                         />

                </li>
            ))}
        </ul>
    )
};


export default ContactList;