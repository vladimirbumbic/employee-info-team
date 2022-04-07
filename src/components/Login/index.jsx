import {useState} from 'react';
import classes from './Login.module.css';
import GoogleLogin from 'react-google-login';

function App() {

  const [ loginData, setLoginData] = useState(localStorage.getItem('loginData')
  ? JSON.parse(localStorage.getItem('loginData')): null);
  

  const handleLoginFailure = (result) => {
    alert(result);
  }

  const handleLogin = async (googleData) => {
    const res = await fetch('api/google-login', {
      method: 'POST',
      body: JSON.stringify({
        token: googleData.tokenId,
      }), 
      headers: { 
        'Content-Type': 'application/json',
      },
    });
    console.log(googleData)

    const data = await res.json();
    console.log(data)
    setLoginData(data);
    localStorage.setItem('loginData', JSON.stringify(data));
    
    
  }

  const handleLogOut = () => {
    localStorage.removeItem('loginData');
    setLoginData(null)
  }

  console.log(loginData)
  return (
    <div className={classes.app}>
      <header className={classes.header}>
        <div className={classes.fade}>   
      <div className={classes.title}>     
      { loginData?<p className = {classes.p}></p>:<p className = {classes.p}>login</p> }
      </div>
        <div className = {classes.btn}>
        {
          loginData?(
            <div>
              <h6 className={classes.logged}>You are now logged in as
                <span className = {classes.span}> {loginData.email}</span>
              </h6>
              <button className={classes.logout} onClick={handleLogOut}>Log out</button>
            </div>
          ): (
            <GoogleLogin
          clientId = {process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText = "Log with Google"
          onSuccess = {handleLogin}
          onFailure = {handleLoginFailure}
          cookiePolicy={'single_host_origin'}
          
          ></GoogleLogin>
          )
        }  
        </div>
        </div>
      </header>
    </div>
  );
}

export default App;
