import { useState, useEffect } from 'react';

import EmployeeCard from '../EmployeeCard';
import EmployeeData from '../EmployeeData';
import { pagination } from '../../utils/pagination';
import styles from './AllEmployees.module.css';

import { FaUserPlus } from 'react-icons/fa';

const AllEmployees = () => {
  const [page, setPage] = useState(0);
  const [allEmployees, setAllEmployees] = useState(pagination(EmployeeData));
  const [paginatedEmployees, setPaginatedEmployees] = useState([]);

  useEffect(() => {
    setPaginatedEmployees(allEmployees[page]);
    console.log(allEmployees.length, page);
  }, [page]);

  const handleNextBtn = () => {
    setPage((oldState) => {
      let nextPage = oldState + 1;

      if (nextPage > allEmployees.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };

  const handlePrevBtn = () => {
    setPage((oldState) => {
      let prevPage = oldState - 1;
      if (prevPage < 0) {
        prevPage = allEmployees.length - 1;
      }
      return prevPage;
    });
  };

  const handlePage = (index) => {
    setPage(index);
  };

  return (
    <div className={styles.background}>
      {/* <div className={styles.header}>
        <header>Employees</header>
        <button>
          <FaUserPlus />
          &nbsp;ADD NEW EMPLOYEE
        </button>
      </div>
      <hr className={styles.hr}></hr> */}
      <div className={styles.employees}>
        {paginatedEmployees.map((card) => {
          return <EmployeeCard key={card.id} card={card} />;
        })}
      </div>

      <div className={styles.paginationWrapper}>
        <button className={styles.paginatedBtns} onClick={handlePrevBtn}>
          Prev
        </button>

        {allEmployees.map((_, index) => {
          return (
            <button
              key={index}
              className={`${styles.paginatedBtns} ${
                index === page ? styles.active : ''
              }`}
              onClick={() => handlePage(index)}
            >
              {index + 1}
            </button>
          );
        })}

        <button className={styles.paginatedBtns} onClick={handleNextBtn}>
          Next
        </button>
      </div>
    </div>
  );
};

export default AllEmployees;
