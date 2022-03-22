import AvatarLogo from '../../assets/avatarIcon.png';
import styles from './WelcomeUser.module.css';

const WelcomeUser = () => {
  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <div className={styles.avatarWrapper}>
          <img src={AvatarLogo} alt="Avatar Icon"></img>
        </div>
        <h2>Welcome User</h2>
        <p>Frontend Developer</p>
      </div>
    </main>
  );
};

export default WelcomeUser;
