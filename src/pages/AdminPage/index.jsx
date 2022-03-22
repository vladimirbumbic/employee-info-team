import { useContext } from 'react';
import SideBar from '../../components/SideBar';
import Countries from '../../components/Countries';
import styles from './AdminPage.module.css';
import Navbar from '../../components/Navbar';
import SidebarContext from '../../contexts/SidebarContext';

const AdminPage = () => {
  const { sidebarIsOpen } = useContext(SidebarContext);
  const role = 'admin';
  return (
    <main className={styles.mainContainer}>
      <Navbar role={role} />
      {sidebarIsOpen && <SideBar />}
      <div className={styles.componentContainer}>
        <Countries />
      </div>
    </main>
  );
};

export default AdminPage;
