import WelcomeUser from '../../components/WelcomeUser';
import Navbar from '../../components/Navbar';

const UserPage = () => {
  const role = '';
  return (
    <>
      <Navbar role={role} />
      <WelcomeUser />
    </>
  );
};

export default UserPage;
