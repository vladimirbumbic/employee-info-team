import styles from './Login.module.css';
import { useState, useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
// import login from '../../api/login';
import { useApi } from '../../hooks/useApi';
import AuthContext from '../../contexts/AuthContextProvider';

const Login = () => {
  const { login } = useContext(AuthContext);
  let [googleOAuthClicked, setGoogleOAuthClicked] = useState(false);
  const { data, request } = useApi(login);

  const handleLogin = async () => {
    setGoogleOAuthClicked(true);
    request();
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
          <div className={styles.googleOAuthContainer} onClick={handleLogin}>
            <div className={styles.googleOAuthLogo}></div>
            <p className={styles.googleOAuthTitle}>
              Continue with <span className={styles.google}>Google</span>
            </p>
          </div>

          {googleOAuthClicked && localStorage.getItem('token') === 'false' ? (
            <a
              className={styles.loginLink}
              href="http://localhost:5000/auth/google"
              target="blank"
            >
              Please Login in your Google account!
            </a>
          ) : null}
        </div>
      </main>
    </main>
  );
};

export default Login;
