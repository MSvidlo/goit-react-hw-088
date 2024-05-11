import Contact from "../Contact/Contact";
import React from "react";
import css from './ContactList.module.css';
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/contactsSlice";

const ContactList = ({ handleEdit, handleDelete }) => { 
  const filteredContacts = useSelector(selectFilteredContacts);
   
    return (
        <ul className={css.contactsList}>
            {filteredContacts.map((contact) => (
                <li key={contact.id}>
                    <Contact
                        handleDelete={handleDelete}
            handleEdit={handleEdit}
            contactData={contact}
                         />

                </li>
            ))}
        </ul>
    )
};


export default ContactList;