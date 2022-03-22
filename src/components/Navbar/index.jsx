import { useContext } from 'react';
import SidebarContext from '../../contexts/SidebarContext';
import styles from './Navbar.module.css';
import AvatarLogo from '../../assets/avatarIcon.png';

import { BiMenu } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';

const Navbar = ({ role }) => {
  const { sidebar, setSidebar } = useContext(SidebarContext);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <nav
      className={
        role === 'admin' || role === 'pm' ? styles.navbar : styles.navbarUser
      }
    >
      <div className={styles.nameWrapper}>
        {role && (
          <BiMenu className={styles.hamburgerIcon} onClick={toggleSidebar} />
        )}
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
      <div className={styles.logoWrapper}>
        <a href="#" className={styles.logout}>
          Logout
        </a>
        <img src={AvatarLogo} alt="avatar" className={styles.avatarLogo} />
      </div>
    </nav>
  );
};

export default Navbar;
