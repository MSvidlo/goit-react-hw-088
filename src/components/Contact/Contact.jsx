import css from './Contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { useDispatch,useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import { loading } from '../../redux/contactsSlice';


const Contact = ({ contactData: { name, number, id }, }) => {
  const dispatch = useDispatch();
    const selectLoading = useSelector(loading);

  return (
    <div className={css.contactWrapper}>
      <div >
        <p>
          <FontAwesomeIcon className={css.icon} icon={faUser} />
          {name}
        </p>
        <p>
          <FontAwesomeIcon className={css.icon} icon={faPhone} />
          {number}
        </p>
  
      </div>
      <button disabled={selectLoading} className={css.deleteBtn} onClick={() => dispatch(deleteContact(id))}>Delete</button></div>
  );
}



export default Contact;