import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import css from './Navigation.module.css';
import clsx from 'clsx';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.navWrapper}>
      <NavLink
        className={({ isActive }) => clsx(css.navLink, { [css.navLinkActive]: isActive })}
        to="/"
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <div>
          <NavLink
            className={({ isActive }) =>
              clsx(css.navLink, { [css.navLinkActive]: isActive })
            }
            to="/contacts"
          >
            Contacts
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Navigation;