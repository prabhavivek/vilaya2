import React from 'react'
import '../../layouts/authLayout/main.css'
import '../../layouts/authLayout/util.css'
import AuthLayout from '../../layouts/authLayout/AuthLayout'
import { Link } from "react-router-dom";

export default function SignInPage() {
    return (
        <AuthLayout title='Sign In'>
            <div className="wrap-input100 validate-input" data-validate="Enter username">
                <input className="input100" type="text" name="username" placeholder="Username or Email id" />
                <span className="focus-input100" data-placeholder="&#xf207;"></span>
            </div>
            <div className="wrap-input100 validate-input" data-validate="Enter password">
                <input className="input100" type="password" name="pass" placeholder="Password" />
                <span className="focus-input100" data-placeholder="&#xf191;"></span>
            </div>
            <div className="container-login100-form-btn">
                <button className="login100-form-btn">Sign In</button>
            </div>
            <div className="text-center p-t-90">
                <div><Link className="txt1" to='/signUp'>Create a new account</Link></div>
                <div><Link className="txt1" to='/forgotPassword'>Forgot Password?</Link></div>
            </div>
        </AuthLayout>
    )
}
