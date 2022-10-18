import React from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';

const options = {
    items: 1,
    nav: false,
    dots: true,
    loop: true,
}

const Slider = () => {
    return (
        <div className="block-slideshow block-slideshow--layout--with-departments block">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 d-none d-lg-block"></div>

                    <div className="col-12 col-lg-9">
                        <div className="block-slideshow__body">
                            <OwlCarousel {...options}>
                                <Link to='/' className="block-slideshow__slide">
                                    <div className="block-slideshow__slide-image block-slideshow__slide-image--desktop"
                                        style={{ backgroundImage: 'url(assets/images/slides/slide-1.jpg)' }}>
                                    </div>

                                    <div className="block-slideshow__slide-image block-slideshow__slide-image--mobile"
                                        style={{ backgroundImage: 'url(assets/images/slides/slide-1-mobile.jpg)' }}>
                                    </div>

                                    <div className="block-slideshow__slide-content">
                                        <div className="block-slideshow__slide-title">
                                            Big choice of<br />Plumbing products
                                        </div>

                                        <div className="block-slideshow__slide-text">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.<br />Etiam pharetra laoreet dui quis
                                            molestie.</div>

                                        <div className="block-slideshow__slide-button">
                                            <span className="btn btn-primary btn-lg">Shop Now</span>
                                        </div>
                                    </div>
                                </Link>

                                <Link to='/' className="block-slideshow__slide">
                                    <div className="block-slideshow__slide-image block-slideshow__slide-image--desktop"
                                        style={{ backgroundImage: 'url(assets/images/slides/slide-2.jpg)' }}></div>

                                    <div className="block-slideshow__slide-image block-slideshow__slide-image--mobile"
                                        style={{ backgroundImage: 'url(assets/images/slides/slide-2-mobile.jpg)' }}></div>

                                    <div className="block-slideshow__slide-content">
                                        <div className="block-slideshow__slide-title">
                                            Screwdrivers<br />Professional Tools
                                        </div>

                                        <div className="block-slideshow__slide-text">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.<br />Etiam pharetra laoreet dui quis
                                            molestie.
                                        </div>

                                        <div className="block-slideshow__slide-button">
                                            <span className="btn btn-primary btn-lg">Shop Now</span>
                                        </div>
                                    </div>
                                </Link>

                                <Link to='/' className="block-slideshow__slide">
                                    <div className="block-slideshow__slide-image block-slideshow__slide-image--desktop"
                                        style={{ backgroundImage: 'url(assets/images/slides/slide-3.jpg)' }}></div>

                                    <div className="block-slideshow__slide-image block-slideshow__slide-image--mobile"
                                        style={{ backgroundImage: 'url(assets/images/slides/slide-3-mobile.jpg)' }}></div>

                                    <div className="block-slideshow__slide-content">
                                        <div className="block-slideshow__slide-title">
                                            One more<br />Unique header
                                        </div>

                                        <div className="block-slideshow__slide-text">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.<br />Etiam pharetra laoreet dui quis
                                            molestie.
                                        </div>

                                        <div className="block-slideshow__slide-button">
                                            <span className="btn btn-primary btn-lg">Shop Now</span>
                                        </div>
                                    </div>
                                </Link>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider