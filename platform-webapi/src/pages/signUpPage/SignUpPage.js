import React from 'react';
import '../../layouts/authLayout/main.css'
import '../../layouts/authLayout/util.css'
import AuthLayout from '../../layouts/authLayout/AuthLayout'
import { Link } from "react-router-dom";


export default function SignUpPage() {
    return (
        <AuthLayout title='Sign Up'>
            <div class="wrap-input100 validate-input" >
                <input class="input100" type="text" name="emailId" placeholder="Email" />
                <span class="focus-input100" data-placeholder="&#xf207;"></span>
            </div>
            <div class="wrap-input100 validate-input" >
                <input class="input100" type="text" name="firstName" placeholder="First name" />
                <span class="focus-input100" data-placeholder="&#xf207;"></span>
            </div>
            <div class="wrap-input100 validate-input" >
                <input class="input100" type="text" name="lastName" placeholder="Last name" />
                <span class="focus-input100" data-placeholder="&#xf207;"></span>
            </div>
            <div class="wrap-input100 validate-input" >
                <input class="input100" type="text" name="UserName" placeholder="User name" />
                <span class="focus-input100" data-placeholder="&#xf207;"></span>
            </div>
            <div class="container-login100-form-btn">
                <button class="login100-form-btn">Sign Up</button>
            </div>
            <div class="text-center p-t-90">
                <Link class="txt1" to='/'>Already have account ?</Link>
            </div>
        </AuthLayout>
    )
}
