import styles from './SideBarItem.module.css';
import { NavLink } from 'react-router-dom';

const SideBarItem = ({ link, icon, title }) => {
  return (
    <main className={styles.sideBarOptionContainer}>
      <NavLink
        to={link}
        className={styles.link}
        style={({ isActive }) => ({ color: isActive ? '#00245d' : '#92a4b8' })}
      >
        <div className={styles.sideBarOption}>
          <p className={styles.sideBarIcon}>{icon}</p>
          <p className={styles.sideBarTitle}>{title}</p>
        </div>
      </NavLink>
    </main>
  );
};

export default SideBarItem;
