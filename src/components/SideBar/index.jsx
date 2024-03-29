import styles from './SideBar.module.css';
import SideBarItem from '../SideBarItem/Index';
import { MdOutlineLocationCity, MdManageAccounts } from 'react-icons/md';
import { FaMapMarkedAlt, FaUserClock } from 'react-icons/fa';
import { GiLaurelCrown } from 'react-icons/gi';
import { BsPuzzleFill, BsFillPeopleFill } from 'react-icons/bs';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { RiAdminLine } from 'react-icons/ri';
import { useState } from 'react';

const roles = ['admin', 'manager'];

const SideBar = () => {
  const [role, setRole] = useState(roles[0]);
  const managerOptions = [
    {
      title: 'All Employees',
      icon: <FaUserClock />,
      link: 'mainContent/allemployees',
    },
    {
      title: 'My Employees',
      icon: <FaUserClock />,
      link: 'mainContent/myEmployees',
    },
    {
      title: 'All Projects',
      icon: <FaUserClock />,
      link: 'mainContent/allProjects',
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
      title: 'Seniorities',
      icon: <GiLaurelCrown />,
      link: 'seniorities',
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
      link: 'employees',
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
      {role === 'admin'
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
