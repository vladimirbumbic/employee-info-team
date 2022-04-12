import { useState } from 'react';

import EmployeeCard from '../EmployeeCard';
import data from './data';
import { pagination } from '../../utils/pagination';
import styles from './AllEmployees.module.css';

import { FaUserPlus } from 'react-icons/fa';

const AllEmployees = () => {
  const [employees, setEmployees] = useState(data);

  return (
    <div className={styles.background}>
      <div className={styles.employees}>
        {employees.map((card) => {
          return <EmployeeCard key={card.id} card={card} />;
        })}
      </div>
    </div>
  );
};

export default AllEmployees;
