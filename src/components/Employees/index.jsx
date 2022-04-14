import { useContext, useEffect } from 'react';
import EmployeeContext from '../../contexts/EmployeeContext';
import EmployeeCard from '../EmployeeCard';
import style from './Employees.module.css';

const Employees = () => {
  const { getAllUsers, allUsers, navbarSearch } = useContext(EmployeeContext);

  useEffect(() => {
    getAllUsers();
    console.log(
      allUsers.filter((user) => {
        if (!navbarSearch) {
          return user;
        } else if (
          user.name.toLowerCase().includes(navbarSearch.toLowerCase())
        ) {
          return user;
        }
      }),
    );
  }, [navbarSearch]);

  return (
    <div className={style.background}>
      <div className={style.employees}>
        {allUsers
          .filter((user) => {
            if (!navbarSearch) {
              return user;
            } else if (
              user.name.toLowerCase().includes(navbarSearch.toLowerCase())
            ) {
              return user;
            }
          })
          .map((user) => {
            return <EmployeeCard key={user.id} {...user} />;
          })}
      </div>
    </div>
  );
};

export default Employees;
