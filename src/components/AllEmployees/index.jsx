import { useState } from 'react';

import EmployeeCard from '../EmployeeCard';
import data from './data';
import styles from './AllEmployees.module.css';
import AddEmployee from '../AddEmployee';
import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';

const AllEmployees = () => {
  const { users, setUsers } = useContext(AuthContext);
  console.log(users);

  return (
    <main>
      <AddEmployee />
      <div className={styles.background}>
        <div className={styles.employees}>
          {users.map((user) => {
            return (
              <EmployeeCard
                key={user.id}
                name={user.name}
                mail={user.email}
                photo={user.photo}
                role={user.role}
                id={user.id}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default AllEmployees;
