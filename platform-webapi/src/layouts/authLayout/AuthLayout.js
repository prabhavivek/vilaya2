import React from 'react'
import './main.css'
import './util.css'
import banner from '../../assets/images/banner1.jpg'
import logo from '../../assets/images/vilaya2.png'

export default function AuthLayout(props) {
    return (
        <div className="limiter">
            <div className="container-login100" style={{ backgroundImage: `url(${banner})` }}>
                <div className="wrap-login100">
                    <form className="login100-form validate-form">
                        <span className="login100-form-logo">
                            <img className="zmdi zmdi-landscape" alt = 'vilaya2 logo' style={{ height: 100, width: 100 }} src={logo} />
                        </span>
                        <span className="login100-form-title p-b-34 p-t-27">
                            {props.title}
                        </span>
                        {props.children}
                    </form>
                </div>
            </div>
        </div>
    )
}

