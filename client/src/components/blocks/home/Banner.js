import React from 'react'

const Banner = () => {
    return (
        <div className="block block-banner">
            <div className="container"><a href="#" className="block-banner__body">
                <div className="block-banner__image block-banner__image--desktop"
                    style={{ backgroundImage: 'url(assets/images/banners/banner-1.jpg)' }}></div>
                <div className="block-banner__image block-banner__image--mobile"
                    style={{ backgroundImage: 'url(assets/images/banners/banner-1-mobile.jpg)' }}></div>
                <div className="block-banner__title">Hundreds<br className="block-banner__mobile-br" />Hand Tools</div>
                <div className="block-banner__text">Hammers, Chisels, Universal Pliers, Nippers, Jigsaws, Saws</div>
                <div className="block-banner__button"><span className="btn btn-sm btn-primary">Shop Now</span></div>
            </a></div>
        </div>
    )
}

export default Banner