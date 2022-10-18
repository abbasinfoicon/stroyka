import React from 'react'

const Search = () => {
    return (
        <div className="site-header__search">
            <div className="search search--location--header">
                <div className="search__body">
                    <form className="search__form" action="#">
                        <select className="search__categories" aria-label="Category">
                            <option defaultValue="all">All Categories</option>
                            <option>Instruments</option>
                            <option>&nbsp;&nbsp;&nbsp;&nbsp;Power Tools</option>
                            <option>&nbsp;&nbsp;&nbsp;&nbsp;Hand Tools</option>
                            <option>&nbsp;&nbsp;&nbsp;&nbsp;Machine Tools</option>
                            <option>&nbsp;&nbsp;&nbsp;&nbsp;Power Machinery</option>
                            <option>&nbsp;&nbsp;&nbsp;&nbsp;Measurement</option>
                            <option>&nbsp;&nbsp;&nbsp;&nbsp;Clothes and PPE</option>
                            <option>Electronics</option>
                            <option>Computers</option>
                            <option>Automotive</option>
                            <option>Furniture & Appliances</option>
                            <option>Music & Books</option>
                            <option>Health & Beauty</option>
                        </select>

                        <input className="search__input" name="search" placeholder="Search over 10,000 products" aria-label="Site search" type="text" autoComplete="off" />
                        <button className="search__button search__button--type--submit" type="submit">
                            <svg width="20px" height="20px">
                                <use xlinkHref="assets/images/sprite.svg#search-20"></use>
                            </svg>
                        </button>
                        <div className="search__border"></div>
                    </form>
                    <div className="search__suggestions suggestions suggestions--location--header"></div>
                </div>
            </div>
        </div>
    )
}

export default Search