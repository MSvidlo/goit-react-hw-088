import DocumentTitle from '../../DocumentTitle';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import css from './RegisterPage.module.css';
export default function RegisterPage() {
  return (
    <div  className={css.wrapper}>
      <DocumentTitle>Registration</DocumentTitle>
      <RegisterForm />
    </div>
  );
}
