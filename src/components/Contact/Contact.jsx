import css from './Contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { useDispatch,useSelector } from 'react-redux';
 import { loading } from '../../redux/contacts/contactsSlice';


const Contact = ({ handleDelete, handleEdit, contactData: { name, number, id } }) => {
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
  
      </div> <div className={css.buttonsWrapper}>
        <button
          onClick={() => handleEdit({ name, number, id })}
          className={css.deleteBtn}
        >
          Edit
        </button>
        <button
          disabled={selectLoading}
          className={css.deleteBtn}
          onClick={() => handleDelete({ name, number, id })}
        >
          Delete
        </button>
      </div>
    </div>
  );
};




export default Contact;