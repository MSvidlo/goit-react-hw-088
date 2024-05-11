import  Logout  from '../Logout/Logout';
import { useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { selectUser } from '../../redux/auth/selectors.js';

function UserMenu() {
  const userName = useSelector(selectUser);
  return (
    <div className={css.UserMenuWrapper}>
      <p className={css.welcomeText}>Welcome, {userName}</p>
      <Logout />
    </div>
  );
}

export default UserMenu;