import AllEmployees from '../../components/AllEmployees';
import Navbar from '../../components/Navbar';

const AdminPmPage = () => {
  const role = '';
  return (
    <>
      <Navbar role={role} />
      <AllEmployees />
    </>
  );
};

export default AdminPmPage;
