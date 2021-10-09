import React from 'react'
import '../../layouts/authLayout/main.css'
import '../../layouts/authLayout/util.css'
import AuthLayout from '../../layouts/authLayout/AuthLayout'
import { Link } from "react-router-dom";

export default function ForgotPassword() {
    return (
        <AuthLayout title='forgot password'>
            <div className="wrap-input100 validate-input">
                <input className="input100" type="text" name="username" placeholder="Email or User name" />
                <span className="focus-input100" data-placeholder="&#xf207;"></span>
            </div>
            <div className="container-login100-form-btn">
                <button className="login100-form-btn">Submit</button>
            </div>
            <div className="text-center p-t-90">
                <Link className="txt1" to='/'>Return to sign in page</Link>
            </div>
        </AuthLayout>
    )
}
