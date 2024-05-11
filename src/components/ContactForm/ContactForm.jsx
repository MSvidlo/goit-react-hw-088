import {Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { addContact } from '../../redux/contacts/contactsOps';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';

const FeedbackSchema = Yup.object().shape({
  contactName: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too Long!')
    .required('Required'),
  contactPhone: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too Long!')
    .required('Required'),
});
const ContactForm = () => {
 const dispatch = useDispatch();
 const nameFieldId = useId();
  const numberFieldId = useId();
  
  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        id: nanoid(),
        name: values.contactName,
        number: values.contactPhone,
      })
    );
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        contactName: '',
        contactPhone: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div>
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            className={css.inputField}
            type="text"
            name="contactName"
            id={nameFieldId}
          />
          <ErrorMessage name="contactName" as="span" />
        </div>
        <div>
          <label htmlFor={numberFieldId}>Number</label>
          <Field
            className={css.inputField}
            type="text"
            name="contactPhone"
            id={numberFieldId}
          />
          <ErrorMessage name="contactPhone" as="span" />
        </div>
        <Button
          sx={{
            color: 'black',
            display: 'block',
            margin: '0 auto',
            fontSize: 18,
          }}
          type="submit"
        >
          Add contact
        </Button>
      </Form>
    </Formik>
  );
};

export default ContactForm