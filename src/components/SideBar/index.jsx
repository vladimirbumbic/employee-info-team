import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';
import SideBarItem from '../SideBarItem/Index';
import styles from './SideBar.module.css';
import { MdOutlineLocationCity, MdManageAccounts } from 'react-icons/md';
import { FaMapMarkedAlt, FaUserClock } from 'react-icons/fa';
import { GiLaurelCrown } from 'react-icons/gi';
import { BsPuzzleFill, BsFillPeopleFill } from 'react-icons/bs';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { RiAdminLine } from 'react-icons/ri';

const SideBar = () => {
  const {
    loginData: { role },
  } = useContext(AuthContext);

  const managerOptions = [
    {
      title: 'All Employees',
      icon: <FaUserClock />,
      link: 'employees',
    },
    {
      title: 'My Employees',
      icon: <FaUserClock />,
      link: 'myEmployees',
    },
    {
      title: 'All Projects',
      icon: <FaUserClock />,
      link: 'allProjects',
    },
  ];
  const adminOptions = [
    {
      title: 'Pending',
      icon: <FaUserClock />,
      link: 'pending',
    },
    {
      title: 'Countries',
      icon: <FaMapMarkedAlt />,
      link: 'countries',
    },
    {
      title: 'Cities',
      icon: <MdOutlineLocationCity />,
      link: 'cities',
    },
    {
      title: 'Technologies',
      icon: <GiLaurelCrown />,
      link: 'technologies',
    },
    {
      title: 'Positions',
      icon: <BsPuzzleFill />,
      link: 'positions',
    },
    {
      title: 'Projects',
      icon: <AiOutlineFundProjectionScreen />,
      link: 'projects',
    },
    {
      title: 'Employees',
      icon: <BsFillPeopleFill />,
      link: 'allemployees',
    },
    {
      title: 'PManagers',
      icon: <MdManageAccounts />,
      link: 'pManagers',
    },
    {
      title: 'Admins',
      icon: <RiAdminLine />,
      link: 'admins',
    },
  ];
  return (
    <main className={styles.sideBarContainer}>
      {role === 'SYSTEM_ADMIN'
        ? adminOptions.map((option, index) => (
            <SideBarItem
              key={index}
              title={option.title}
              icon={option.icon}
              link={option.link}
            />
          ))
        : managerOptions.map((option, index) => (
            <SideBarItem
              key={index}
              title={option.title}
              icon={option.icon}
              link={option.link}
            />
          ))}
    </main>
  );
};

export default SideBar;
