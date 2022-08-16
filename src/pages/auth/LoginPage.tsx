import React from 'react';
import './LoginPage.css';
import Logo from '../../img/logo.png';

const LoginPage = () => {
    return (
        <div className='loginPage'>
            <div className="a-left">
                <img src={Logo} alt="" />
                <div className="appName">
                    <h1>Helium</h1>
                    <h6>Explore the ideas throughout the world</h6>
                </div>
            </div>

            {/* <SignUp /> */}
            <LogIn />
        </div>
    );
}

function LogIn() {
    return (
        <div className="a-right">
            <form className="form auth">
                <h3>Log In</h3>

                <div>
                    <input type="text" placeholder='Username' className='input' name='username' />
                </div>

                <div>
                    <input type="password" placeholder='Password' className='input' name='password' />
                </div>

                <div>
                    <span style={{fontSize: '12px'}}>Don't have an account? Sign Up</span>
                </div>

                <button className="button su-button" type='submit'>Sign Up</button>
            </form>
        </div>
    );
}

function SignUp() {
    return (
        <div className="a-right">
            <form className="form auth">
                <h3>Sign Up</h3>

                <div>
                    <input type="text" placeholder='First Name' className='input' name='firstName' />
                    <input type="text" placeholder='Last Name' className='input' name='lastName' />
                </div>

                <div>
                    <input type="text" placeholder='Username' className='input' name='username' />
                </div>

                <div>
                    <input type="password" placeholder='Password' className='input' name='password' />
                    <input type="password" placeholder='Confirm your Password' className='input' name='passwordConfirmation' />
                </div>

                <div>
                    <span style={{fontSize: '12px'}}>Already have an account? Log in</span>
                </div>

                <button className="button su-button" type='submit'>Sign Up</button>
            </form>
        </div>
    );
}

export default LoginPage;