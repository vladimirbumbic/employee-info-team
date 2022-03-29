import styles from './Login.module.css';
import { NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import axios from 'axios';
import { useEffect } from 'react';

const Login = () => {
  const handleLogin = async () => {
    try {
      const response = await axios('localhost:5000/auth/google');
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className={styles.pageContainer}>
      <main className={styles.mainContainer}>
        <div className={styles.loginImageContainer}>
          <div className={styles.laptopImage}></div>
          <div className={styles.loginTitleContainer}>
            <div className={styles.loginTitleIcon}>
              <FaUserCircle className={styles.userIcon} />
              <p className={styles.loginTitle}>Login</p>
            </div>
          </div>
        </div>
        <div className={styles.loginGoogleOauthContainer}>
          {/* <NavLink to="/mainContent" style={{ textDecoration: 'none' }}> */}
          <div className={styles.googleOAuthContainer} onClick={handleLogin}>
            <div className={styles.googleOAuthLogo}></div>
            <p className={styles.googleOAuthTitle}>
              Continue with <span className={styles.google}>Google</span>
            </p>
          </div>
          {/* </NavLink> */}
        </div>
      </main>
    </main>
  );
};

export default Login;
