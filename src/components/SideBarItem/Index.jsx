import styles from './SideBarItem.module.css';
import { NavLink } from 'react-router-dom';

const SideBarItem = (props) => {
  return (
    <main className={styles.sideBarOptionContainer}>
      <NavLink
        to={props.link}
        style={{ textDecoration: 'none', color: '#92a4b8' }}
      >
        <div className={styles.sideBarOption}>
          <p className={styles.sideBarIcon}>{props.icon}</p>
          <p className={styles.sideBarTitle}>{props.title}</p>
        </div>
      </NavLink>
    </main>
  );
};

export default SideBarItem;
