import SideBar from '../../components/SideBar';
import Countries from '../../components/Countries';
import styles from './AdminPage.module.css';

const AdminPage = () => {
    return (
        <main className={styles.mainContainer}>
            <SideBar />
            <div className={styles.componentContainer}>
                <Countries />
            </div>
        </main>
    );
};

export default AdminPage;
