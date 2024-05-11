 
import LoginForm from '../../components/LoginForm/LoginForm';
import css from './LoginPage.module.css'
export default function LoginPage() {
  return (
    <div className={css.wrapper}>
      <h1>Log in</h1>
      <LoginForm />
    </div>
  );
}
