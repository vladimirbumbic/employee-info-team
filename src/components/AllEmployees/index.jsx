import { useState } from 'react';

import EmployeeCard from '../EmployeeCard';
import styles from './AllEmployees.module.css';
import AddEmployee from '../AddEmployee';
import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';
import { getAllEmployees } from '../../services/employees';

const AllEmployees = () => {
  const { users, setUsers } = useContext(AuthContext);
  // console.log(JSON.parse(localStorage.getItem('loginData')).email);
  console.log(users);

  // const loggedUser = users.filter((user) => {
  //   return user.email === JSON.parse(localStorage.loginData).email;
  // });
  // console.log(loggedUser[0].id);

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
        {/* <EmployeeInfoModal /> */}
      </div>
    </main>
  );
};

export default AllEmployees;
