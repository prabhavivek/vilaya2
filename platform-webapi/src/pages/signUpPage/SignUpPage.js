import React from 'react';
import '../../layouts/authLayout/main.css'
import '../../layouts/authLayout/util.css'
import AuthLayout from '../../layouts/authLayout/AuthLayout'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import {handleChangeAction} from '../../actions/AuthAction'
const SignUpPage = ({handleChange,userDetails}) => {
    return (
        <AuthLayout title='Sign Up'>
            <div className="wrap-input100 validate-input" >
                <input className="input100" type="text" value={userDetails.emailId} name="emailId" placeholder="Email" onChange={event => handleChange(event)} />
                <span className="focus-input100" data-placeholder="&#xf207;"></span>
            </div>
            <div className="wrap-input100 validate-input" >
                <input className="input100" type="text" value={userDetails.firstName}  name="firstName" placeholder="First name" onChange={event => handleChange(event)} />
                <span className="focus-input100" data-placeholder="&#xf207;"></span>
            </div>
            <div className="wrap-input100 validate-input" >
                <input className="input100" type="text" value={userDetails.lastName} name="lastName" placeholder="Last name" onChange={event => handleChange(event)} />
                <span className="focus-input100" data-placeholder="&#xf207;"></span>
            </div>
            <div className="wrap-input100 validate-input" >
                <input className="input100" type="text" value={userDetails.userName} name="userName" placeholder="User name" onChange={event => handleChange(event)} />
                <span className="focus-input100" data-placeholder="&#xf207;"></span>
            </div>
            <div className="container-login100-form-btn">
                <button className="login100-form-btn">Sign Up</button>
            </div>
            <div className="text-center p-t-90">
                <Link className="txt1" to='/'>Already have account ?</Link>
            </div>
        </AuthLayout>
    )
}

const mapStateToProps = state => ({
    userDetails: state.authState
});

const mapDispatchToProps = dispatch => ({
    handleChange   : e => dispatch(handleChangeAction(e))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);