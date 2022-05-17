import { useContext, useEffect, useState } from 'react';
import EmployeeContext from '../../contexts/EmployeeContext';
import EmployeeCard from '../EmployeeCard';
import style from './Employees.module.css';
import ReactPaginate from 'react-paginate';

const Employees = () => {
  const { getAllUsers, allUsers, navbarSearch } = useContext(EmployeeContext);

  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 100;
  const pagesVisited = pageNumber * usersPerPage;

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

  const displayUsers = allUsers
    .filter((user) => {
      if (!navbarSearch) {
        return user;
      } else if (user.name.toLowerCase().includes(navbarSearch.toLowerCase())) {
        return user;
      }
    })
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => {
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
    });

  const pageCount = Math.ceil(allUsers.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className={style.background}>
      <div className={style.employees}>
        {displayUsers}
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={style.paginationButtons}
          activeClassName={style.paginationActive}
        />
      </div>
    </div>
  );
};

export default Employees;
