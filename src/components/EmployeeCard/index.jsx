import styles from './EmployeeCard.module.css';

const EmployeeCard = ({ card }) => {
  return (
    <div className={styles.card} key={card.id}>
      <img src={card.image} alt={card.name + ' photo'}></img>
      <h2>{card.name}</h2>
      <p>{card.job}</p>
      <p>{card.email}</p>
      <button>Details</button>
    </div>
  );
};

export default EmployeeCard;
