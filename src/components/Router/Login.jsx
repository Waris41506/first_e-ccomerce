import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"

const LogIn = () => {
    return ( 
        <div className="contanier-login">
            <div className="box-login">
                
            <div className="login-box">
                <h1> Login</h1>
                <div className="inp">
                <input type="text" placeholder='Username'/>
                <input type="password" placeholder='Password'/>
                <button>Login</button>

                </div>
                <Link className='li' to="/">Forgotten Password?</Link>
                <Link className='li' to="/signup">Don't have an account ? <strong>Register</strong></Link>
                <div className="login-icon">

                </div>
            </div>
            <div className="img-box-login">
                <img src="./images/another_logingbg.webp" alt="" />
            </div>
            </div>
        </div>
     );
}
 
export default LogIn;