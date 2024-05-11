import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import ContactList from "../../components/ContactList/ContactList";
import { fetchContacts } from "../../redux/contacts/contactsOps";
import { selectLoading } from "../../redux/contacts/selectors"
import  DocumentTitle  from '../../DocumentTitle';
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import EditContactForm from "../../components/EditContactForm/EditContactForm";
import DeleteContactForm from "../../components/DeleteContactForm/DeleteContactForm";
import { CONSTANTS } from "../../components/constants";
import { Toaster } from "react-hot-toast";



export default function ContactsPage(){
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [selectedContact, setSelectedContact] = useState({});



    const dispatch = useDispatch(selectLoading);
   
    

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);

     function handleEditClicked({ name, number, id }) {
    setSelectedContact({ name, number, id });
    setIsEdit(true);
  }

  function handleDeleteClicked({ name, number, id }) {
    setSelectedContact({ name, number, id });
    setIsDelete(true);
  }

  function modalClose() {
    setIsDelete(false);
    setIsEdit(false);
  };
   function notifySuccess() {
    CONSTANTS.notifySuccess();
  };
    return (
        <>
            <DocumentTitle>PhoneBoock</DocumentTitle>
           <ContactForm notifySuccess={notifySuccess} />
      <SearchBox />
      <ContactList handleEdit={handleEditClicked} handleDelete={handleDeleteClicked} />
      <Modal
        style={CONSTANTS.modalStyles}
        onRequestClose={modalClose}
        isOpen={isEdit || isDelete}
      >
        {isEdit && (
          <EditContactForm
            notifySuccess={notifySuccess}
            closeModal={modalClose}
            editedContact={selectedContact}
          />
        )}
        {isDelete && (
          <DeleteContactForm
            notifySuccess={notifySuccess}
            id={selectedContact.id}
            closeModal={modalClose}
          />
        )}
      </Modal>
      <Toaster />
    </>
  );
}

