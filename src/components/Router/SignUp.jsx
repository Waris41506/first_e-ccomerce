import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return ( 
        <div className="contanier-login">
            <div className="box-login">
                
            <div className="login-box">
                <h1>Register</h1>
                <div className="inp">
                <input type="text" placeholder='Username'/>
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password'/>
                <button>Register</button>

                </div>
                <Link className='li' to="/login">Already have an account ? <strong>Login</strong></Link>
                <div className="login-icon">

                </div>
            </div>
            <div className="img-box-login">
                <img src="./images/lovely_bg2.jpg" alt="" />
            </div>
            </div>
        </div>
     );
}
 
export default SignUp;