import styles from './Login.module.css';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const Login = () => {
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
                    <div className={styles.googleOAuthContainer}>
                        <div className={styles.googleOAuthLogo}></div>
                        <p className={styles.googleOAuthTitle}>
                            Continue with{' '}
                            <span className={styles.google}>Google</span>
                        </p>
                    </div>
                </div>
            </main>
        </main>
    );
};

export default Login;