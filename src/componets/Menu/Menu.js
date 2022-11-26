import { useContext } from 'react';
import AuthContext from '../../context/authContext';
import styles from './Menu.module.css';

function Menu() {
  const auth = useContext(AuthContext);

  const login = e => {
    e.preventDefault();
    auth.login();
  }

  const logout = e => {
    e.preventDefault();
    auth.logout();
  }

  return (
    <div className={`${styles.menuContainer} breadcrumb`}>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <a href='#'>
            Home
          </a>
        </li>
        <li className={styles.menuItem}>
          {
            auth.isAuthenticated
              ? <a href='#' onClick={logout}>Wyloguj</a>
              : <a href='#' onClick={login}>Zaloguj</a>
          }
        </li>
      </ul>
    </div>
  );
}

export default Menu;
