import SideBar from '../../components/SideBar';

import styles from './MainContent.module.css';
import Navbar from '../../components/Navbar';
import { Outlet } from 'react-router-dom';
import SidebarContext from '../../contexts/SidebarContext';
import { useContext } from 'react';

const MainContent = () => {
  const { sidebarIsOpen } = useContext(SidebarContext);

  return (
    <main className={styles.mainContainer}>
      <Navbar />
      <section className={styles.mainContentWrapper}>
        {sidebarIsOpen && <SideBar />}
        <div className={styles.componentContainer}>
          <Outlet />
        </div>
      </section>
    </main>
  );
};

export default MainContent;
