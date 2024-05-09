import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import ContactList from "../../components/ContactList/ContactList";
import { fetchContacts } from "../../redux/contacts/contactsOps";
import { selectLoading } from "../../redux/contacts/selectors"
import  DocumentTitle  from '../../DocumentTitle';
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";



export default function ContactsPage(){
    const dispatch = useDispatch(selectLoading);
    const isLoading = useSelector(selectLoading);
    

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);
    return (
        <>
            <DocumentTitle>PhoneBoock</DocumentTitle>
            <ContactForm />
              <SearchBox/>
              <div>{isLoading && 'Request in progress...'}</div>
            <ContactList/>

        </>
    )

};
