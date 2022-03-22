import SideBar from '../../components/SideBar';
import Countries from '../../components/Countries';
import styles from './AdminPage.module.css';
import Navbar from '../../components/Navbar';

const AdminPage = () => {
  const role = 'admin';
  return (
    <main className={styles.mainContainer}>
      <Navbar role={role} />
      <SideBar />
      <div className={styles.componentContainer}>
        <Countries />
      </div>
    </main>
  );
};

export default AdminPage;
