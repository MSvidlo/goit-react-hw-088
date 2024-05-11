import DocumentTitle from '../../DocumentTitle';
import LoginForm from '../../components/LoginForm/LoginForm';
import css from './LoginPage.module.css'
export default function LoginPage() {
  return (
    <div className={css.wrapper}>
      <DocumentTitle>Log in</DocumentTitle>
      <LoginForm />
    </div>
  );
}
