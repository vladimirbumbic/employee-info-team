import styles from './EmployeeCard.module.css';
import { deleteEmployee } from '../../services/employees';
import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';

const EmployeeCard = (props) => {
  const { users, setUsers } = useContext(AuthContext);
  const handleDeleteEmployee = async () => {
    await deleteEmployee(props.id);
    const newUsers = users.filter((user) => {
      return user.id !== props.id;
    });

    setUsers(newUsers);
    window.localStorage.setItem('users', JSON.stringify(newUsers));
  };

  return (
    <div className={styles.card} key={props.id}>
      <img src={props.photo} alt={props.name + ' photo'}></img>
      <h2>{props.name}</h2>
      <p>{props.role}</p>
      <p>{props.mail}</p>
      <div className={styles.detailsDeleteContainer}>
        <button className={styles.detailsButton}>Details</button>
        <button className={styles.deleteButton} onClick={handleDeleteEmployee}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default EmployeeCard;
