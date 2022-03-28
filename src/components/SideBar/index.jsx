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
      link: 'mainContent/pending',
    },
    {
      title: 'Countries',
      icon: <FaMapMarkedAlt />,
      link: 'mainContent/countries',
    },
    {
      title: 'Cities',
      icon: <MdOutlineLocationCity />,
      link: 'mainContent/cities',
    },
    {
      title: 'Seniorities',
      icon: <GiLaurelCrown />,
      link: 'mainContent/seniorities',
    },
    {
      title: 'Positions',
      icon: <BsPuzzleFill />,
      link: 'mainContent/positions',
    },
    {
      title: 'Projects',
      icon: <AiOutlineFundProjectionScreen />,
      link: 'mainContent/projects',
    },
    {
      title: 'Employees',
      icon: <BsFillPeopleFill />,
      link: 'mainContent/employees',
    },
    {
      title: 'PManagers',
      icon: <MdManageAccounts />,
      link: 'mainContent/pManagers',
    },
    {
      title: 'Admins',
      icon: <RiAdminLine />,
      link: 'mainContent/admins',
    },
  ];
  return (
    <main className={styles.sideBarContainer}>
      {options.map((option, index) => (
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
