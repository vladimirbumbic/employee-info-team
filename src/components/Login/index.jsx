import { useContext, useEffect } from 'react';
import AuthContext from '../../contexts/AuthContext';
import history from '../CustomRouter/history';
import classes from './Login.module.css';
import GoogleLogin from 'react-google-login';

function Login() {
  const { loginData, handleLogin, handleLogOut, handleLoginFailure } =
    useContext(AuthContext);

  useEffect(() => {
    if (loginData === null) {
      history.push('/');
    } else if (loginData.role === 'EMPLOYEE') {
      history.push('newuser');
    } else if (loginData.role === 'SYSTEM_ADMIN') {
      history.push('mainContent/allemployees');
    } else if (loginData.role === 'PROJECT_MANAGER') {
      history.push('mainContent/employees');
    }
  }, [loginData]);

  return (
    <div className={classes.app}>
      <header className={classes.header}>
        <div className={classes.fade}>
          <div className={classes.title}>
            {loginData ? (
              <p className={classes.p}></p>
            ) : (
              <p className={classes.p}>login</p>
            )}
          </div>
          <div className={classes.btn}>
            {loginData ? (
              <div>
                <h6 className={classes.logged}>
                  You are now logged in as
                  <span className={classes.span}> {loginData.email}</span>
                </h6>
                <button className={classes.logout} onClick={handleLogOut}>
                  Log out
                </button>
              </div>
            ) : (
              <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Log with Google"
                onSuccess={handleLogin}
                onFailure={handleLoginFailure}
                cookiePolicy={'single_host_origin'}
              ></GoogleLogin>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Login;
