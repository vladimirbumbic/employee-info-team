import styles from './Employees.module.css';
import EmployeeCard from '../EmployeeCard';
import EmployeeData from '../EmployeeData';

const Employees = () => {
  return (
    <div className={styles.employeesContainer}>
      {EmployeeData.map((employee) => (
        <EmployeeCard key={employee.id} card={employee} />
      ))}
    </div>
  );
};

export default Employees;
