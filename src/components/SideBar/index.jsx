import styles from './SideBar.module.css';
import SideBarItem from '../SideBarItem/Index';
import { MdOutlineLocationCity, MdManageAccounts } from 'react-icons/md';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { GiLaurelCrown } from 'react-icons/gi';
import { BsPuzzleFill, BsFillPeopleFill } from 'react-icons/bs';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { RiAdminLine } from 'react-icons/ri';

const SideBar = () => {
    const options = [
        {
            title: 'Countries',
            icon: <FaMapMarkedAlt />,
            link: '/pending',
        },
        {
            title: 'Cities',
            icon: <MdOutlineLocationCity />,
            link: '/team',
        },
        {
            title: 'Seniorities',
            icon: <GiLaurelCrown />,
            link: '/questions',
        },
        {
            title: 'Positions',
            icon: <BsPuzzleFill />,
            link: '/companyInfo',
        },
        {
            title: 'Projects',
            icon: <AiOutlineFundProjectionScreen />,
            link: '/myProfile',
        },
        {
            title: 'Employees',
            icon: <BsFillPeopleFill />,
            link: '/myProfile',
        },
        {
            title: 'PManagers',
            icon: <MdManageAccounts />,
            link: '/myProfile',
        },
        {
            title: 'Admins',
            icon: <RiAdminLine />,
            link: '/myProfile',
        },
    ];
    return (
        <main className={styles.sideBarContainer}>
            {options.map((option, index) => (
                <SideBarItem
                    key={index}
                    title={option.title}
                    icon={option.icon}
                />
            ))}
        </main>
    );
};

export default SideBar;
