import "./LoginRegister.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const LoginRegister = () => {
  return (
    <main className="page-container">
      <main className="main-container">
        <div className="login-image-container">
          <div className="laptop-image"></div>
          <div className="login-title-container">
            <div className="login-title-icon">
              <FaUserCircle className="user-icon" />
              <p className="login-title">Login</p>
            </div>
          </div>
        </div>
        <div className="login-googleOauth-container">
          <div className="google-oAuth-container">
            <div className="google-oAuth-logo"></div>
            <p className="google-oAuth-title">
              Continue with <span className="google">Google</span>
            </p>
          </div>
        </div>
      </main>
    </main>
  );
};

export default LoginRegister;
