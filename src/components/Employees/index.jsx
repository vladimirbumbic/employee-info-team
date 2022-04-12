import { useState } from 'react';
import EmployeeCard from '../EmployeeCard';
import data from './data';
import style from './Employees.module.css';

const Employees = () => {
  const [employees, setEmployees] = useState(data);
  return (
    <div className={style.background}>
      <div className={style.employees}>
        {employees.map((card) => {
          return <EmployeeCard key={card.id} card={card} />;
        })}
      </div>
    </div>
  );
};

export default Employees;
