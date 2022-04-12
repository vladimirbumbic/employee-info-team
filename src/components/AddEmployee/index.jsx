import styles from './AddEmployee.module.css';
import { FaUserPlus } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const AddEmployee = () => {
  return (
    <div className={styles.addEmployeeContainer}>
      <div className={styles.headerTitleAndButton}>
        <header className={styles.headerTitle}>Employees</header>
        <NavLink to="newEmployee">
          <button className={styles.addNewEmployeeButton}>
            <FaUserPlus />
            &nbsp;ADD NEW EMPLOYEE
          </button>
        </NavLink>
      </div>
      <hr className={styles.hr}></hr>
    </div>
  );
};

export default AddEmployee;
