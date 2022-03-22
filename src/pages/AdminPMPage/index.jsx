import { useContext } from 'react';
import AllEmployees from '../../components/AllEmployees';
import Navbar from '../../components/Navbar';
import SideBar from '../../components/SideBar';
import SidebarContext from '../../contexts/SidebarContext';

const AdminPmPage = () => {
  const { sidebar } = useContext(SidebarContext);
  const role = 'admin';

  return (
    <>
      <Navbar role={role} />
      {sidebar && <SideBar />}
      <AllEmployees />
    </>
  );
};

export default AdminPmPage;
