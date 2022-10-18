import React from 'react'
import { Link } from 'react-router-dom'

const UserMenu = () => {
    return (
        <div className="topbar__item">
            <div className="topbar-dropdown">
                <button className="topbar-dropdown__btn" type="button">My
                    Account
                    <svg width="7px" height="5px">
                        <use xlinkHref="assets/images/sprite.svg#arrow-rounded-down-7x5"></use>
                    </svg>
                </button>

                <div className="topbar-dropdown__body">
                    <div className="menu menu--layout--topbar">
                        <div className="menu__submenus-container"></div>
                        <ul className="menu__list">
                            <li className="menu__item">
                                <div className="menu__item-submenu-offset"></div>
                                <Link to="/" className="menu__item-link">Dashboard</Link>
                            </li>
                            <li className="menu__item">
                                <div className="menu__item-submenu-offset"></div>
                                <Link to="/" className="menu__item-link">Edit Profile</Link>
                            </li>
                            <li className="menu__item">
                                <div className="menu__item-submenu-offset"></div>
                                <Link to="/" className="menu__item-link">Order History</Link>
                            </li>
                            <li className="menu__item">
                                <div className="menu__item-submenu-offset"></div>
                                <Link to="/" className="menu__item-link">Addresses</Link>
                            </li>
                            <li className="menu__item">
                                <div className="menu__item-submenu-offset"></div>
                                <Link to="/" className="menu__item-link">Password</Link>
                            </li>
                            <li className="menu__item">
                                <div className="menu__item-submenu-offset"></div>
                                <Link to="/" className="menu__item-link">Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserMenu