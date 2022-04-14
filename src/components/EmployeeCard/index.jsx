import styles from './EmployeeCard.module.css';
import avatar from '../../assets/avatarIcon.png';

const EmployeeCard = ({ name, email, photo, seniority }) => {
  return (
    <div className={styles.card}>
      <img src={photo} alt="balblababal" />
      <h2>{name}</h2>
      <p>{seniority}</p>
      <p>{email}</p>
      <button>Details</button>
    </div>
  );
};

export default EmployeeCard;
