import SideBar from '../../components/SideBar';
import Countries from '../../components/Countries';
import Pending from '../../components/Pending';
import Cities from '../../components/Cities';
import Seniorities from '../../components/Seniorities';
import Positions from '../../components/Positions';
import Projects from '../../components/Projects';
import Employees from '../../components/Employees';
import PManagers from '../../components/PManagers';
import Admins from '../../components/Admins';
import styles from './MainContent.module.css';
import Navbar from '../../components/Navbar';
import { Route, Routes } from 'react-router-dom';
import SidebarContext from '../../contexts/SidebarContext';
import { useContext } from 'react';

const MainContent = () => {
  const { sidebarIsOpen } = useContext(SidebarContext);
  const role = 'admin';
  console.log('renderovao se maincontent');

  return (
    <main className={styles.mainContainer}>
      <Navbar role={role} />
      <section className={styles.mainContentWrapper}>
        {sidebarIsOpen && <SideBar />}
        <div className={styles.componentContainer}>
          <Routes>
            <Route path="mainContent/countries" element={<Countries />} />
            <Route path="mainContent/pending" element={<Pending />} />
            <Route path="mainContent/cities" element={<Cities />} />
            <Route path="mainContent/seniorities" element={<Seniorities />} />
            <Route path="mainContent/positions" element={<Positions />} />
            <Route path="mainContent/projects" element={<Projects />} />
            <Route path="mainContent/employees" element={<Employees />} />
            <Route path="mainContent/pManagers" element={<PManagers />} />
            <Route path="mainContent/admins" element={<Admins />} />
          </Routes>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
