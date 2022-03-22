import styles from './SideBar.module.css';
import SideBarItem from '../SideBarItem/Index';
import { MdOutlineLocationCity, MdManageAccounts } from 'react-icons/md';
import { FaMapMarkedAlt, FaUserClock } from 'react-icons/fa';
import { GiLaurelCrown } from 'react-icons/gi';
import { BsPuzzleFill, BsFillPeopleFill } from 'react-icons/bs';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { RiAdminLine } from 'react-icons/ri';

const SideBar = () => {
  const options = [
    {
      title: 'Pending',
      icon: <FaUserClock />,
      link: '/pending',
    },
    {
      title: 'Countries',
      icon: <FaMapMarkedAlt />,
      link: '/countries',
    },
    {
      title: 'Cities',
      icon: <MdOutlineLocationCity />,
      link: '/cities',
    },
    {
      title: 'Seniorities',
      icon: <GiLaurelCrown />,
      link: '/seniorities',
    },
    {
      title: 'Positions',
      icon: <BsPuzzleFill />,
      link: '/positions',
    },
    {
      title: 'Projects',
      icon: <AiOutlineFundProjectionScreen />,
      link: '/projects',
    },
    {
      title: 'Employees',
      icon: <BsFillPeopleFill />,
      link: '/employees',
    },
    {
      title: 'PManagers',
      icon: <MdManageAccounts />,
      link: '/pmanagers',
    },
    {
      title: 'Admins',
      icon: <RiAdminLine />,
      link: '/admins',
    },
  ];
  return (
    <main className={styles.sideBarContainer}>
      {options.map((option, index) => (
        <SideBarItem key={index} title={option.title} icon={option.icon} />
      ))}
    </main>
  );
};

export default SideBar;
