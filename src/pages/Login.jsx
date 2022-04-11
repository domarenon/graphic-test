import React, {useRef} from "react";
import '../styles/login.css';
import { useAuth } from "../context/AuthContext";

import {
    BrowserRouter as Router,
    useHistory,
    useLocation
  } from "react-router-dom";

import logo from '../assets/logo.svg'

    const Login = () => {

    let history = useHistory();
    let location = useLocation();
    let auth = useAuth();

    let { from } = location.state || { from: { pathname: "/" } };
    let login = async (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            username: formData.get('email'),
            password: formData.get('password')
        }
        await auth.signin( data.username, data.password, () => {
        history.replace(from);
        });
    };

    const form = useRef(null);

    return(
        <div className="login">


            <div className="Login-container">
            <img src={logo} alt="logo" className="logo"/>

            <form action="/" className="form" ref={form}> 
                <label htmlFor="email" className="label">Email address</label>
                <input type="text" name="email" placeholder="mail@example.com" className="input input-email"></input>

                <label htmlFor="password" className="label">Password</label>
                <input type="password" name="password" placeholder="*********" className="input input-password"></input>

                <button className="primary-button login-button" onClick={login}>Log in</button>
                <a href="/recoverypassword">Forgoy my password</a>
            </form>
            <button className="secondary-button signup-button"> Sign up</button>
            </div>


        </div>
    );
}

export default Login;