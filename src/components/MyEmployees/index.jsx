import { useState } from 'react';
import EmployeeCard from '../EmployeeCard';
import data from './data';

import styles from './MyEmployees.module.css';

export const MyEmployees = () => {
  const [myEmployees, setMyEmployees] = useState(data);
  return (
    <div className={styles.background}>
      <div className={styles.employees}>
        {myEmployees.map((card) => {
          return <EmployeeCard key={card.id} card={card} />;
        })}
      </div>
    </div>
  );
};

export default MyEmployees;
