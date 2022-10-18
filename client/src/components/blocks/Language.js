import React from 'react'

const Language = () => {
    return (
        <div className="topbar__item">
            <div className="topbar-dropdown">
                <button className="topbar-dropdown__btn"
                    type="button">Language: <span className="topbar__item-value">EN</span>
                    <svg width="7px" height="5px">
                        <use xlinkHref="assets/images/sprite.svg#arrow-rounded-down-7x5"></use>
                    </svg>
                </button>

                <div className="topbar-dropdown__body">
                    <div className="menu menu--layout--topbar menu--with-icons">
                        <div className="menu__submenus-container"></div>
                        <ul className="menu__list">
                            <li className="menu__item">
                                <div className="menu__item-submenu-offset"></div>
                                <a className="menu__item-link" href="#">
                                    <div className="menu__item-icon">
                                        <img srcSet="assets/images/languages/language-1.png, assets/images/languages/language-1@2x.png 2x" src="assets/images/languages/language-1.png" alt="" />
                                    </div>
                                    English
                                </a>
                            </li>
                            <li className="menu__item">
                                <div className="menu__item-submenu-offset"></div>
                                <a className="menu__item-link" href="#">
                                    <div className="menu__item-icon">
                                        <img srcSet="assets/images/languages/language-2.png, assets/images/languages/language-2@2x.png 2x" src="assets/images/languages/language-2.png" alt="" />
                                    </div>
                                    French
                                </a>
                            </li>
                            <li className="menu__item">
                                <div className="menu__item-submenu-offset"></div>
                                <a className="menu__item-link" href="#">
                                    <div className="menu__item-icon">
                                        <img srcSet="assets/images/languages/language-3.png, assets/images/languages/language-3@2x.png 2x" src="assets/images/languages/language-3.png" alt="" />
                                    </div>
                                    German
                                </a>
                            </li>
                            <li className="menu__item">
                                <div className="menu__item-submenu-offset"></div>
                                <a className="menu__item-link" href="#">
                                    <div className="menu__item-icon">
                                        <img srcSet="assets/images/languages/language-4.png, assets/images/languages/language-4@2x.png 2x" src="assets/images/languages/language-4.png" alt="" />
                                    </div>
                                    Russian
                                </a>
                            </li>
                            <li className="menu__item">
                                <div className="menu__item-submenu-offset"></div>
                                <a className="menu__item-link" href="#">
                                    <div className="menu__item-icon">
                                        <img srcSet="assets/images/languages/language-5.png, assets/images/languages/language-5@2x.png 2x" src="assets/images/languages/language-5.png" alt="" />
                                    </div>
                                    Italian
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Language