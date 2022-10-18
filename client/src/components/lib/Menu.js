import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <div className="nav-panel__nav-links nav-links">
            <ul className="nav-links__list">
                <li className="nav-links__item">
                    <Link to='/' className="nav-links__item-link">
                        <div className="nav-links__item-body">Home</div>
                    </Link>
                </li>

                <li className="nav-links__item">
                    <Link to='/about' className="nav-links__item-link">
                        <div className="nav-links__item-body">About</div>
                    </Link>
                </li>

                <li className="nav-links__item nav-links__item--has-submenu">
                    <Link to='/products' className="nav-links__item-link">
                        <div className="nav-links__item-body">Products
                            <svg className="nav-links__item-arrow" width="9px" height="6px">
                                <use xlinkHref="assets/images/sprite.svg#arrow-rounded-down-9x6">
                                </use>
                            </svg>
                        </div>
                    </Link>

                    <div className="nav-links__submenu nav-links__submenu--type--megamenu nav-links__submenu--size--nl">
                        <div className="megamenu">
                            <div className="megamenu__body">
                                <div className="row">
                                    <div className="col-6">
                                        <ul className="megamenu__links megamenu__links--level--0">
                                            <li className="megamenu__item megamenu__item--with-submenu">
                                                <Link to='/'>Power Tools</Link>

                                                <ul className="megamenu__links megamenu__links--level--1">
                                                    <li className="megamenu__item">
                                                        <Link to=''>Engravers</Link>
                                                    </li>

                                                    <li className="megamenu__item">
                                                        <Link to=''>Wrenches</Link>
                                                    </li>

                                                    <li className="megamenu__item">
                                                        <Link to=''>Wall Chaser</Link>
                                                    </li>

                                                    <li className="megamenu__item">
                                                        <Link to=''>Pneumatic Tools</Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="megamenu__item megamenu__item--with-submenu">
                                                <Link to=''>Machine Tools</Link>

                                                <ul className="megamenu__links megamenu__links--level--1">
                                                    <li className="megamenu__item">
                                                        <Link to=''>Thread Cutting</Link>
                                                    </li>

                                                    <li className="megamenu__item">
                                                        <Link to=''>Chip Blowers</Link>
                                                    </li>

                                                    <li className="megamenu__item">
                                                        <Link to=''>Sharpening Machines</Link>
                                                    </li>

                                                    <li className="megamenu__item">
                                                        <Link to=''>Pipe Cutters</Link>
                                                    </li>

                                                    <li className="megamenu__item">
                                                        <Link to=''>Slotting machines</Link>
                                                    </li>

                                                    <li className="megamenu__item">
                                                        <Link to=''>Lathes</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="col-6">
                                        <ul className="megamenu__links megamenu__links--level--0">
                                            <li className="megamenu__item megamenu__item--with-submenu">
                                                <Link to=''>Hand Tools</Link>

                                                <ul className="megamenu__links megamenu__links--level--1">
                                                    <li className="megamenu__item">
                                                        <Link to=''>Screwdrivers</Link>
                                                    </li>

                                                    <li className="megamenu__item">
                                                        <Link to=''>Handsaws</Link>
                                                    </li>

                                                    <li className="megamenu__item">
                                                        <Link to=''>Knives</Link>
                                                    </li>

                                                    <li className="megamenu__item">
                                                        <Link to=''>Axes</Link>
                                                    </li>

                                                    <li className="megamenu__item">
                                                        <Link to=''>Multitools</Link>
                                                    </li>

                                                    <li className="megamenu__item">
                                                        <Link to=''>Paint Tools</Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li
                                                className="megamenu__item megamenu__item--with-submenu">
                                                <Link to=''>Garden Equipment</Link>

                                                <ul className="megamenu__links megamenu__links--level--1">
                                                    <li className="megamenu__item">
                                                        <Link to=''>Motor Pumps</Link>
                                                    </li>

                                                    <li className="megamenu__item">
                                                        <Link to=''>Chainsaws</Link>
                                                    </li>

                                                    <li className="megamenu__item">
                                                        <Link to=''>Electric Saws</Link>
                                                    </li>

                                                    <li className="megamenu__item">
                                                        <Link to=''>Brush Cutters</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                <li className="nav-links__item">
                    <Link to='/gallery' className="nav-links__item-link">
                        <div className="nav-links__item-body">Gallery</div>
                    </Link>
                </li>

                <li className="nav-links__item">
                    <Link to='/blog' className="nav-links__item-link">
                        <div className="nav-links__item-body">Blog</div>
                    </Link>
                </li>

                <li className="nav-links__item">
                    <Link to='/contact' className="nav-links__item-link">
                        <div className="nav-links__item-body">Contact Us</div>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu