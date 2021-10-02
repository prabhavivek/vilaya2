import React from 'react';
import '../../layouts/authLayout/main.css'
import '../../layouts/authLayout/util.css'
import AuthLayout from '../../layouts/authLayout/AuthLayout'
import { Link } from "react-router-dom";


export default function SetPassword() {
    return (
        <AuthLayout title='Set Password'>
            <div class="wrap-input100 validate-input">
                <input class="input100" type="text" value='prabhavivekece@gmail.com' placeholder="Username or Email id" />
                <span class="focus-input100" data-placeholder="&#xf207;"></span>
            </div>
            <div class="wrap-input100 validate-input">
                <input class="input100" type="password" name="pass" placeholder="Password" />
                <span class="focus-input100" data-placeholder="&#xf191;"></span>
            </div>
            <div class="wrap-input100 validate-input">
                <input class="input100" type="password" name="pass" placeholder="Confirm Password" />
                <span class="focus-input100" data-placeholder="&#xf191;"></span>
            </div>
            <div class="container-login100-form-btn">
                <button class="login100-form-btn">Set Password</button>
            </div>
            <div class="text-center p-t-90">
                <Link class="txt1" to='/'>Already have account ?</Link>
            </div>
        </AuthLayout>
    )
}
