import { useState } from 'react';

import EmployeeCard from '../EmployeeCard';
import EmployeeData from '../EmployeeData';
import styles from './AllEmployees.module.css';

import { FaUserPlus } from 'react-icons/fa';

const AllEmployees = () => {
  const [allEmployees, setAllEmployees] = useState(EmployeeData);

  return (
    <div className={styles.background}>
      <div className={styles.header}>
        <header>Employees</header>
        <button>
          <FaUserPlus />
          &nbsp;ADD NEW EMPLOYEE
        </button>
      </div>
      <hr className={styles.hr}></hr>
      <div className={styles.employees}>
        {allEmployees.map((card) => {
          return <EmployeeCard card={card} />;
        })}
      </div>
    </div>
  );
};

export default AllEmployees;
