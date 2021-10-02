import React from 'react'
import '../../layouts/authLayout/main.css'
import '../../layouts/authLayout/util.css'
import AuthLayout from '../../layouts/authLayout/AuthLayout'
import { Link } from "react-router-dom";

export default function ForgotPassword() {
    return (
        <AuthLayout title='Sign In'>
            <div class="wrap-input100 validate-input">
                <input class="input100" type="text" name="username" placeholder="Email or User name" />
                <span class="focus-input100" data-placeholder="&#xf207;"></span>
            </div>
            <div class="container-login100-form-btn">
                <button class="login100-form-btn">Submit</button>
            </div>
            <div class="text-center p-t-90">
                <Link class="txt1" to='/'>Return to sign in page</Link>
            </div>
        </AuthLayout>
    )
}
