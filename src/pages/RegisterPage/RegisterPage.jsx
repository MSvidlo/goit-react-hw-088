import DocumentTitle from '../../DocumentTitle';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import css from './RegisterPage.module.css';
export default function RegisterPage() {
  return (
    <div  className={css.wrapper}>
      <h1>Registration</h1>
      <RegisterForm />
    </div>
  );
}
