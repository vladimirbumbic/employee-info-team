import { useContext } from 'react';
import SidebarContext from '../../contexts/SidebarContext';
import AuthContext from '../../contexts/AuthContext';
import style from './Navbar.module.css';

import { BiMenu } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';

const Navbar = () => {
  const { sidebarIsOpen, setSidebarIsOpen } = useContext(SidebarContext);
  const {
    loginData: { photo, email, role },
    handleLogOut,
  } = useContext(AuthContext);

  const toggleSidebar = () => {
    setSidebarIsOpen(!sidebarIsOpen);
  };

  return (
    <nav className={role === 'EMPLOYEE' ? style.navbarUser : style.navbar}>
      <div className={style.nameWrapper}>
        {role === 'EMPLOYEE' ? (
          ''
        ) : (
          <BiMenu className={style.hamburgerIcon} onClick={toggleSidebar} />
        )}
        <p className={style.name}>Quantox</p>
      </div>
      {role === 'EMPLOYEE' || (
        <div className={style.searchWrapper}>
          <form className={style.form}>
            <div className={style.inputWrapper}>
              <BsSearch className={style.searchIcon} />
              <input type="text" placeholder="Search Employee" />
            </div>
            <select name="fields" id="fields" className={style.select}>
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
      <div className={style.logoWrapper}>
        {role === 'EMPLOYEE' ? (
          ''
        ) : (
          <div className={style.loginText}>
            <p>You are now logged in as</p>
            <p>{email}</p>
          </div>
        )}
        <img src={photo} alt="avatar" className={style.avatarLogo} />
        <button className={style.btnLogout} onClick={handleLogOut}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
