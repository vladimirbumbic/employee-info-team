import { useState } from 'react';
import EmployeeCard from '../EmployeeCard';
import styles from './AllEmployees.module.css';
import AddEmployee from '../AddEmployee';
import { useContext, useEffect } from 'react';
import AuthContext from '../../contexts/AuthContext';
import { getAllEmployees } from '../../services/employees';

const AllEmployees = () => {
  const { users, setUsers } = useContext(AuthContext);
  const [allEmployeesLoaded, setAllEmployeesLoaded] = useState(false);
  console.log(users);

  const handleAllEmployees = async () => {
    const allEmployees = await getAllEmployees();
    const employees = allEmployees.data;
    setUsers(employees);
    setAllEmployeesLoaded(true);
  };

  useEffect(() => {
    handleAllEmployees();
  }, []);

  if (!allEmployeesLoaded) {
    return 'Loading...';
  }

  return (
    <main>
      <AddEmployee />
      <div className={styles.background}>
        <div className={styles.employees}>
          {users
            ? users.map((user) => {
                return (
                  <EmployeeCard
                    key={user.id}
                    name={user.name}
                    mail={user.email}
                    photo={user.photo}
                    role={user.role}
                    id={user.id}
                    seniority={user.seniority}
                    city={user.city}
                    technology={user.mainTechnology}
                  />
                );
              })
            : null}
        </div>
      </div>
    </main>
  );
};

export default AllEmployees;
