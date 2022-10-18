import React from 'react'

const Currency = () => {
    return (
        <div className="topbar__item">
            <div className="topbar-dropdown">
                <button className="topbar-dropdown__btn"
                    type="button">Currency: <span className="topbar__item-value">USD</span>

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
                                <a className="menu__item-link" href="#">€ Euro</a>
                            </li>
                            <li className="menu__item">
                                <div className="menu__item-submenu-offset"></div>
                                <a className="menu__item-link" href="#">£ Pound Sterling</a>
                            </li>
                            <li className="menu__item">
                                <div className="menu__item-submenu-offset"></div>
                                <a className="menu__item-link" href="#">$ US Dollar</a>
                            </li>
                            <li className="menu__item">
                                <div className="menu__item-submenu-offset"></div>
                                <a className="menu__item-link" href="#">₽ Russian Ruble</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Currency