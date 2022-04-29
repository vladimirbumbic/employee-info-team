import { useState } from 'react';

import EmployeeCard from '../EmployeeCard';
import styles from './AllEmployees.module.css';
import AddEmployee from '../AddEmployee';
import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';

const AllEmployees = () => {
  const { users } = useContext(AuthContext);
  // console.log(JSON.parse(localStorage.getItem('loginData')).email);

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
                    city={user.city.id}
                    technology={user.mainTechnology.id}
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
