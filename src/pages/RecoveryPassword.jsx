import React from "react";
import '../styles/RecoveryPassword.css';

import logo from '../assets/logo.svg'

import mail from '../assets/logo.svg'

const RecoveryPassword = () => {
    return(
        <div className="login">
    <div className="form-container">
      <img src={logo} alt="logo" className="logo"/>

      <h1 className="title">Email has been sent!</h1>
      <p className="subtitle">Please check your inbox for instructions on how to reset the password</p>

      <div className="email-image">
        <img src={mail} alt="email"/>
      </div>

      <form method="get" action="/login">
        <button  className="primary-button login-button">Login</button>
      </form>
      

      <p className="resend">
        <span>Didn't receive the email?</span>
        <a href="/recoverypassword">Resend</a>
      </p>
    </div>
  </div>
    );
}

export default RecoveryPassword;