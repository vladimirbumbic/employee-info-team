import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';
import AvatarLogo from '../../assets/avatarIcon.png';
import styles from './WelcomeUser.module.css';

const WelcomeUser = () => {
  const {
    loginData: { name, email, photo },
  } = useContext(AuthContext);

  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <div className={styles.avatarWrapper}>
          <img src={photo} alt="Avatar Icon"></img>
        </div>
        <h2>Welcome, {name}</h2>
        <p>{email}</p>
      </div>
    </main>
  );
};

export default WelcomeUser;
