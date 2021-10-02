import React from 'react';
import '../../layouts/authLayout/main.css'
import '../../layouts/authLayout/util.css'
import AuthLayout from '../../layouts/authLayout/AuthLayout'
import { Link } from "react-router-dom";


export default function SetPassword() {
    return (
        <AuthLayout title='Set Password'>
            <div className="wrap-input100 validate-input">
                <input className="input100" type="text" value='prabhavivekece@gmail.com' placeholder="Username or Email id" />
                <span className="focus-input100" data-placeholder="&#xf207;"></span>
            </div>
            <div className="wrap-input100 validate-input">
                <input className="input100" type="password" name="pass" placeholder="Password" />
                <span className="focus-input100" data-placeholder="&#xf191;"></span>
            </div>
            <div className="wrap-input100 validate-input">
                <input className="input100" type="password" name="pass" placeholder="Confirm Password" />
                <span className="focus-input100" data-placeholder="&#xf191;"></span>
            </div>
            <div className="container-login100-form-btn">
                <button className="login100-form-btn">Set Password</button>
            </div>
            <div className="text-center p-t-90">
                <Link className="txt1" to='/'>Already have account ?</Link>
            </div>
        </AuthLayout>
    )
}
