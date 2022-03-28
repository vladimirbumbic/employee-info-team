import styles from './Navbar.module.css';
import AvatarLogo from '../../assets/avatarIcon.png';

import { BiMenu } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

const Navbar = ({ role }) => {
  return (
    <nav
      className={
        role === 'admin' || role === 'pm' ? styles.navbar : styles.navbarUser
      }
    >
      <div className={styles.nameWrapper}>
        {role && <BiMenu className={styles.hamburgerIcon} />}
        <p className={styles.name}>Quantox</p>
      </div>
      {role && (
        <div className={styles.searchWrapper}>
          <form className={styles.form}>
            <div className={styles.inputWrapper}>
              <BsSearch className={styles.searchIcon} />
              <input type="text" placeholder="Search Employee" />
            </div>
            <select name="fields" id="fields" className={styles.select}>
              <option value="name">Name</option>
              <option value="country">Country</option>
              <option value="city">City</option>
              <option value="technology">Technology</option>
              <option value="seniority">Seniority</option>
              <option value="project">Project</option>
              <option value="pm">PM</option>
            </select>
          </form>
        </div>
      )}
      <NavLink to="/" style={{ textDecoration: 'none' }}>
        <div className={styles.logoWrapper}>
          <p className={styles.logout}>Logout</p>
          <img src={AvatarLogo} alt="avatar" className={styles.avatarLogo} />
        </div>
      </NavLink>
    </nav>
  );
};

export default Navbar;
