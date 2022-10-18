import React from 'react'

const UserMenu2 = () => {
    return (
        <div className="indicator__dropdown">
            <div className="account-menu">
                <form className="account-menu__form">
                    <div className="account-menu__form-title">Log In to Your Account</div>
                    <div className="form-group"><label htmlFor="header-signin-email"
                        className="sr-only">Email address</label> <input
                            id="header-signin-email" type="email"
                            className="form-control form-control-sm"
                            placeholder="Email address" /></div>
                    <div className="form-group"><label htmlFor="header-signin-password"
                        className="sr-only">Password</label>
                        <div className="account-menu__form-forgot"><input
                            id="header-signin-password" type="password"
                            className="form-control form-control-sm"
                            placeholder="Password" /> <a href="#"
                                className="account-menu__form-forgot-link">Forgot?</a></div>
                    </div>
                    <div className="form-group account-menu__form-button"><button
                        type="submit" className="btn btn-primary btn-sm">Login</button>
                    </div>
                    <div className="account-menu__form-link"><a
                        href="account-login.html">Create An Account</a></div>
                </form>
                <div className="account-menu__divider"></div><a
                    href="account-dashboard.html" className="account-menu__user">
                    <div className="account-menu__user-avatar"><img
                        src="assets/images/avatars/avatar-3.jpg" alt="" /></div>
                    <div className="account-menu__user-info">
                        <div className="account-menu__user-name">Helena Garcia</div>
                        <div className="account-menu__user-email">stroyka@example.com</div>
                    </div>
                </a>
                <div className="account-menu__divider"></div>
                <ul className="account-menu__links">
                    <li><a href="account-profile.html">Edit Profile</a></li>
                    <li><a href="account-orders.html">Order History</a></li>
                    <li><a href="account-addresses.html">Addresses</a></li>
                    <li><a href="account-password.html">Password</a></li>
                </ul>
                <div className="account-menu__divider"></div>
                <ul className="account-menu__links">
                    <li><a href="account-login.html">Logout</a></li>
                </ul>
            </div>
        </div>
    )
}

export default UserMenu2