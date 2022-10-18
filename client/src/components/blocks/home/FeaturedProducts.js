import React from 'react'
import OwlCarousel from 'react-owl-carousel';

const options = {
    items: 4,
    margin: 14,
    nav: true,
    dots: false,
    loop: true,
    stagePadding: 1,
    responsive: {
        1200: { items: 4, margin: 14 },
        992: { items: 3, margin: 10 },
        768: { items: 2, margin: 10 },
    }
}

const hendleLeft = () => {
    console.log('cliclk prev');
    OwlCarousel.trigger('prev.owl.carousel', [500]);
}
const hendleRight = () => {
    console.log('cliclk next');
    OwlCarousel.trigger('next.owl.carousel', [500]);
}

const FeaturedProducts = () => {
    return (
        <div className="block block-products-carousel" data-layout="grid-4">
            <div className="container">
                <div className="block-header">
                    <h3 className="block-header__title">Featured Products</h3>
                    <div className="block-header__divider"></div>

                    <ul className="block-header__groups-list">
                        <li><button type="button" className="block-header__group block-header__group--active">All</button></li>
                        <li><button type="button" className="block-header__group">Power Tools</button></li>
                        <li><button type="button" className="block-header__group">Hand Tools</button></li>
                        <li><button type="button" className="block-header__group">Plumbing</button></li>
                    </ul>

                    <div className="block-header__arrows-list">
                        <button className="block-header__arrow block-header__arrow--left" type="button" onClick={hendleLeft}>
                            <svg width="7px" height="11px">
                                <use xlinkHref="assets/images/sprite.svg#arrow-rounded-left-7x11"></use>
                            </svg>
                        </button>

                        <button className="block-header__arrow block-header__arrow--right" type="button" onClick={hendleRight}>
                            <svg width="7px" height="11px">
                                <use xlinkHref="assets/images/sprite.svg#arrow-rounded-right-7x11"></use>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="block-products-carousel__slider">
                    <div className="block-products-carousel__preloader"></div>

                    <OwlCarousel {...options}>
                        <div className="block-products-carousel__column">
                            <div className="block-products-carousel__cell">
                                <div className="product-card product-card--hidden-actions"><button
                                    className="product-card__quickview" type="button"><svg width="16px"
                                        height="16px">
                                        <use xlinkHref="assets/images/sprite.svg#quickview-16"></use>
                                    </svg> <span className="fake-svg-icon"></span></button>
                                    <div className="product-card__badges-list">
                                        <div className="product-card__badge product-card__badge--new">New</div>
                                    </div>
                                    <div className="product-card__image product-image"><a href="product.html"
                                        className="product-image__body"><img className="product-image__img"
                                            src="assets/images/products/product-1.jpg" alt="" /></a></div>
                                    <div className="product-card__info">
                                        <div className="product-card__name"><a href="product.html">Electric Planer
                                            Brandix KL370090G 300 Watts</a></div>
                                        <div className="product-card__rating">
                                            <div className="product-card__rating-stars">
                                                <div className="rating">
                                                    <div className="rating__body"><svg
                                                        className="rating__star rating__star--active" width="13px"
                                                        height="12px">
                                                        <g className="rating__fill">
                                                            <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                            </use>
                                                        </g>
                                                        <g className="rating__stroke">
                                                            <use
                                                                xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                            </use>
                                                        </g>
                                                    </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star rating__star--active"
                                                            width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star rating__star--active"
                                                            width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star rating__star--active"
                                                            width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-card__rating-legend">9 Reviews</div>
                                        </div>
                                        <ul className="product-card__features-list">
                                            <li>Speed: 750 RPM</li>
                                            <li>Power Source: Cordless-Electric</li>
                                            <li>Battery Cell Type: Lithium</li>
                                            <li>Voltage: 20 Volts</li>
                                            <li>Battery Capacity: 2 Ah</li>
                                        </ul>
                                    </div>
                                    <div className="product-card__actions">
                                        <div className="product-card__availability">Availability: <span
                                            className="text-success">In Stock</span></div>
                                        <div className="product-card__prices">$749.00</div>
                                        <div className="product-card__buttons"><button
                                            className="btn btn-primary product-card__addtocart" type="button">Add To
                                            Cart</button> <button
                                                className="btn btn-secondary product-card__addtocart product-card__addtocart--list"
                                                type="button">Add To Cart</button> <button
                                                    className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist"
                                                    type="button"><svg width="16px" height="16px">
                                                    <use xlinkHref="assets/images/sprite.svg#wishlist-16"></use>
                                                </svg> <span
                                                    className="fake-svg-icon fake-svg-icon--wishlist-16"></span></button>
                                            <button
                                                className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare"
                                                type="button"><svg width="16px" height="16px">
                                                    <use xlinkHref="assets/images/sprite.svg#compare-16"></use>
                                                </svg> <span
                                                    className="fake-svg-icon fake-svg-icon--compare-16"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="block-products-carousel__column">
                            <div className="block-products-carousel__cell">
                                <div className="product-card product-card--hidden-actions"><button
                                    className="product-card__quickview" type="button"><svg width="16px"
                                        height="16px">
                                        <use xlinkHref="assets/images/sprite.svg#quickview-16"></use>
                                    </svg> <span className="fake-svg-icon"></span></button>
                                    <div className="product-card__badges-list">
                                        <div className="product-card__badge product-card__badge--hot">Hot</div>
                                    </div>
                                    <div className="product-card__image product-image"><a href="product.html"
                                        className="product-image__body"><img className="product-image__img"
                                            src="assets/images/products/product-2.jpg" alt="" /></a></div>
                                    <div className="product-card__info">
                                        <div className="product-card__name"><a href="product.html">Undefined Tool IRadix
                                            DPS3000SY 2700 Watts</a></div>
                                        <div className="product-card__rating">
                                            <div className="product-card__rating-stars">
                                                <div className="rating">
                                                    <div className="rating__body"><svg
                                                        className="rating__star rating__star--active" width="13px"
                                                        height="12px">
                                                        <g className="rating__fill">
                                                            <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                            </use>
                                                        </g>
                                                        <g className="rating__stroke">
                                                            <use
                                                                xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                            </use>
                                                        </g>
                                                    </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star rating__star--active"
                                                            width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star rating__star--active"
                                                            width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star rating__star--active"
                                                            width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star rating__star--active"
                                                            width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-card__rating-legend">11 Reviews</div>
                                        </div>
                                        <ul className="product-card__features-list">
                                            <li>Speed: 750 RPM</li>
                                            <li>Power Source: Cordless-Electric</li>
                                            <li>Battery Cell Type: Lithium</li>
                                            <li>Voltage: 20 Volts</li>
                                            <li>Battery Capacity: 2 Ah</li>
                                        </ul>
                                    </div>
                                    <div className="product-card__actions">
                                        <div className="product-card__availability">Availability: <span
                                            className="text-success">In Stock</span></div>
                                        <div className="product-card__prices">$1,019.00</div>
                                        <div className="product-card__buttons"><button
                                            className="btn btn-primary product-card__addtocart" type="button">Add To
                                            Cart</button> <button
                                                className="btn btn-secondary product-card__addtocart product-card__addtocart--list"
                                                type="button">Add To Cart</button> <button
                                                    className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist"
                                                    type="button"><svg width="16px" height="16px">
                                                    <use xlinkHref="assets/images/sprite.svg#wishlist-16"></use>
                                                </svg> <span
                                                    className="fake-svg-icon fake-svg-icon--wishlist-16"></span></button>
                                            <button
                                                className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare"
                                                type="button"><svg width="16px" height="16px">
                                                    <use xlinkHref="assets/images/sprite.svg#compare-16"></use>
                                                </svg> <span
                                                    className="fake-svg-icon fake-svg-icon--compare-16"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="block-products-carousel__column">
                            <div className="block-products-carousel__cell">
                                <div className="product-card product-card--hidden-actions"><button
                                    className="product-card__quickview" type="button"><svg width="16px"
                                        height="16px">
                                        <use xlinkHref="assets/images/sprite.svg#quickview-16"></use>
                                    </svg> <span className="fake-svg-icon"></span></button>
                                    <div className="product-card__image product-image"><a href="product.html"
                                        className="product-image__body"><img className="product-image__img"
                                            src="assets/images/products/product-3.jpg" alt="" /></a></div>
                                    <div className="product-card__info">
                                        <div className="product-card__name"><a href="product.html">Drill Screwdriver
                                            Brandix ALX7054 200 Watts</a></div>
                                        <div className="product-card__rating">
                                            <div className="product-card__rating-stars">
                                                <div className="rating">
                                                    <div className="rating__body"><svg
                                                        className="rating__star rating__star--active" width="13px"
                                                        height="12px">
                                                        <g className="rating__fill">
                                                            <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                            </use>
                                                        </g>
                                                        <g className="rating__stroke">
                                                            <use
                                                                xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                            </use>
                                                        </g>
                                                    </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star rating__star--active"
                                                            width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star rating__star--active"
                                                            width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star rating__star--active"
                                                            width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-card__rating-legend">9 Reviews</div>
                                        </div>
                                        <ul className="product-card__features-list">
                                            <li>Speed: 750 RPM</li>
                                            <li>Power Source: Cordless-Electric</li>
                                            <li>Battery Cell Type: Lithium</li>
                                            <li>Voltage: 20 Volts</li>
                                            <li>Battery Capacity: 2 Ah</li>
                                        </ul>
                                    </div>
                                    <div className="product-card__actions">
                                        <div className="product-card__availability">Availability: <span
                                            className="text-success">In Stock</span></div>
                                        <div className="product-card__prices">$850.00</div>
                                        <div className="product-card__buttons"><button
                                            className="btn btn-primary product-card__addtocart" type="button">Add To
                                            Cart</button> <button
                                                className="btn btn-secondary product-card__addtocart product-card__addtocart--list"
                                                type="button">Add To Cart</button> <button
                                                    className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist"
                                                    type="button"><svg width="16px" height="16px">
                                                    <use xlinkHref="assets/images/sprite.svg#wishlist-16"></use>
                                                </svg> <span
                                                    className="fake-svg-icon fake-svg-icon--wishlist-16"></span></button>
                                            <button
                                                className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare"
                                                type="button"><svg width="16px" height="16px">
                                                    <use xlinkHref="assets/images/sprite.svg#compare-16"></use>
                                                </svg> <span
                                                    className="fake-svg-icon fake-svg-icon--compare-16"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="block-products-carousel__column">
                            <div className="block-products-carousel__cell">
                                <div className="product-card product-card--hidden-actions"><button
                                    className="product-card__quickview" type="button"><svg width="16px"
                                        height="16px">
                                        <use xlinkHref="assets/images/sprite.svg#quickview-16"></use>
                                    </svg> <span className="fake-svg-icon"></span></button>
                                    <div className="product-card__badges-list">
                                        <div className="product-card__badge product-card__badge--sale">Sale</div>
                                    </div>
                                    <div className="product-card__image product-image"><a href="product.html"
                                        className="product-image__body"><img className="product-image__img"
                                            src="assets/images/products/product-4.jpg" alt="" /></a></div>
                                    <div className="product-card__info">
                                        <div className="product-card__name"><a href="product.html">Drill Series 3
                                            Brandix KSR4590PQS 1500 Watts</a></div>
                                        <div className="product-card__rating">
                                            <div className="product-card__rating-stars">
                                                <div className="rating">
                                                    <div className="rating__body"><svg
                                                        className="rating__star rating__star--active" width="13px"
                                                        height="12px">
                                                        <g className="rating__fill">
                                                            <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                            </use>
                                                        </g>
                                                        <g className="rating__stroke">
                                                            <use
                                                                xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                            </use>
                                                        </g>
                                                    </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star rating__star--active"
                                                            width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star rating__star--active"
                                                            width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-card__rating-legend">7 Reviews</div>
                                        </div>
                                        <ul className="product-card__features-list">
                                            <li>Speed: 750 RPM</li>
                                            <li>Power Source: Cordless-Electric</li>
                                            <li>Battery Cell Type: Lithium</li>
                                            <li>Voltage: 20 Volts</li>
                                            <li>Battery Capacity: 2 Ah</li>
                                        </ul>
                                    </div>
                                    <div className="product-card__actions">
                                        <div className="product-card__availability">Availability: <span
                                            className="text-success">In Stock</span></div>
                                        <div className="product-card__prices"><span
                                            className="product-card__new-price">$949.00</span> <span
                                                className="product-card__old-price">$1189.00</span></div>
                                        <div className="product-card__buttons"><button
                                            className="btn btn-primary product-card__addtocart" type="button">Add To
                                            Cart</button> <button
                                                className="btn btn-secondary product-card__addtocart product-card__addtocart--list"
                                                type="button">Add To Cart</button> <button
                                                    className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist"
                                                    type="button"><svg width="16px" height="16px">
                                                    <use xlinkHref="assets/images/sprite.svg#wishlist-16"></use>
                                                </svg> <span
                                                    className="fake-svg-icon fake-svg-icon--wishlist-16"></span></button>
                                            <button
                                                className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare"
                                                type="button"><svg width="16px" height="16px">
                                                    <use xlinkHref="assets/images/sprite.svg#compare-16"></use>
                                                </svg> <span
                                                    className="fake-svg-icon fake-svg-icon--compare-16"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="block-products-carousel__column">
                            <div className="block-products-carousel__cell">
                                <div className="product-card product-card--hidden-actions"><button
                                    className="product-card__quickview" type="button"><svg width="16px"
                                        height="16px">
                                        <use xlinkHref="assets/images/sprite.svg#quickview-16"></use>
                                    </svg> <span className="fake-svg-icon"></span></button>
                                    <div className="product-card__image product-image"><a href="product.html"
                                        className="product-image__body"><img className="product-image__img"
                                            src="assets/images/products/product-5.jpg" alt="" /></a></div>
                                    <div className="product-card__info">
                                        <div className="product-card__name"><a href="product.html">Brandix Router Power
                                            Tool 2017ERXPK</a></div>
                                        <div className="product-card__rating">
                                            <div className="product-card__rating-stars">
                                                <div className="rating">
                                                    <div className="rating__body"><svg
                                                        className="rating__star rating__star--active" width="13px"
                                                        height="12px">
                                                        <g className="rating__fill">
                                                            <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                            </use>
                                                        </g>
                                                        <g className="rating__stroke">
                                                            <use
                                                                xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                            </use>
                                                        </g>
                                                    </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star rating__star--active"
                                                            width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star rating__star--active"
                                                            width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star rating__star--active"
                                                            width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-card__rating-legend">9 Reviews</div>
                                        </div>
                                        <ul className="product-card__features-list">
                                            <li>Speed: 750 RPM</li>
                                            <li>Power Source: Cordless-Electric</li>
                                            <li>Battery Cell Type: Lithium</li>
                                            <li>Voltage: 20 Volts</li>
                                            <li>Battery Capacity: 2 Ah</li>
                                        </ul>
                                    </div>
                                    <div className="product-card__actions">
                                        <div className="product-card__availability">Availability: <span
                                            className="text-success">In Stock</span></div>
                                        <div className="product-card__prices">$1,700.00</div>
                                        <div className="product-card__buttons"><button
                                            className="btn btn-primary product-card__addtocart" type="button">Add To
                                            Cart</button> <button
                                                className="btn btn-secondary product-card__addtocart product-card__addtocart--list"
                                                type="button">Add To Cart</button> <button
                                                    className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist"
                                                    type="button"><svg width="16px" height="16px">
                                                    <use xlinkHref="assets/images/sprite.svg#wishlist-16"></use>
                                                </svg> <span
                                                    className="fake-svg-icon fake-svg-icon--wishlist-16"></span></button>
                                            <button
                                                className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare"
                                                type="button"><svg width="16px" height="16px">
                                                    <use xlinkHref="assets/images/sprite.svg#compare-16"></use>
                                                </svg> <span
                                                    className="fake-svg-icon fake-svg-icon--compare-16"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="block-products-carousel__column">
                            <div className="block-products-carousel__cell">
                                <div className="product-card product-card--hidden-actions"><button
                                    className="product-card__quickview" type="button"><svg width="16px"
                                        height="16px">
                                        <use xlinkHref="assets/images/sprite.svg#quickview-16"></use>
                                    </svg> <span className="fake-svg-icon"></span></button>
                                    <div className="product-card__image product-image"><a href="product.html"
                                        className="product-image__body"><img className="product-image__img"
                                            src="assets/images/products/product-6.jpg" alt="" /></a></div>
                                    <div className="product-card__info">
                                        <div className="product-card__name"><a href="product.html">Brandix Drilling
                                            Machine DM2019KW4 4kW</a></div>
                                        <div className="product-card__rating">
                                            <div className="product-card__rating-stars">
                                                <div className="rating">
                                                    <div className="rating__body"><svg
                                                        className="rating__star rating__star--active" width="13px"
                                                        height="12px">
                                                        <g className="rating__fill">
                                                            <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                            </use>
                                                        </g>
                                                        <g className="rating__stroke">
                                                            <use
                                                                xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                            </use>
                                                        </g>
                                                    </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star rating__star--active"
                                                            width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star rating__star--active"
                                                            width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-card__rating-legend">7 Reviews</div>
                                        </div>
                                        <ul className="product-card__features-list">
                                            <li>Speed: 750 RPM</li>
                                            <li>Power Source: Cordless-Electric</li>
                                            <li>Battery Cell Type: Lithium</li>
                                            <li>Voltage: 20 Volts</li>
                                            <li>Battery Capacity: 2 Ah</li>
                                        </ul>
                                    </div>
                                    <div className="product-card__actions">
                                        <div className="product-card__availability">Availability: <span
                                            className="text-success">In Stock</span></div>
                                        <div className="product-card__prices">$3,199.00</div>
                                        <div className="product-card__buttons"><button
                                            className="btn btn-primary product-card__addtocart" type="button">Add To
                                            Cart</button> <button
                                                className="btn btn-secondary product-card__addtocart product-card__addtocart--list"
                                                type="button">Add To Cart</button> <button
                                                    className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist"
                                                    type="button"><svg width="16px" height="16px">
                                                    <use xlinkHref="assets/images/sprite.svg#wishlist-16"></use>
                                                </svg> <span
                                                    className="fake-svg-icon fake-svg-icon--wishlist-16"></span></button>
                                            <button
                                                className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare"
                                                type="button"><svg width="16px" height="16px">
                                                    <use xlinkHref="assets/images/sprite.svg#compare-16"></use>
                                                </svg> <span
                                                    className="fake-svg-icon fake-svg-icon--compare-16"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="block-products-carousel__column">
                            <div className="block-products-carousel__cell">
                                <div className="product-card product-card--hidden-actions"><button
                                    className="product-card__quickview" type="button"><svg width="16px"
                                        height="16px">
                                        <use xlinkHref="assets/images/sprite.svg#quickview-16"></use>
                                    </svg> <span className="fake-svg-icon"></span></button>
                                    <div className="product-card__image product-image"><a href="product.html"
                                        className="product-image__body"><img className="product-image__img"
                                            src="assets/images/products/product-7.jpg" alt="" /></a></div>
                                    <div className="product-card__info">
                                        <div className="product-card__name"><a href="product.html">Brandix Pliers</a>
                                        </div>
                                        <div className="product-card__rating">
                                            <div className="product-card__rating-stars">
                                                <div className="rating">
                                                    <div className="rating__body"><svg
                                                        className="rating__star rating__star--active" width="13px"
                                                        height="12px">
                                                        <g className="rating__fill">
                                                            <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                            </use>
                                                        </g>
                                                        <g className="rating__stroke">
                                                            <use
                                                                xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                            </use>
                                                        </g>
                                                    </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star rating__star--active"
                                                            width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-card__rating-legend">4 Reviews</div>
                                        </div>
                                        <ul className="product-card__features-list">
                                            <li>Speed: 750 RPM</li>
                                            <li>Power Source: Cordless-Electric</li>
                                            <li>Battery Cell Type: Lithium</li>
                                            <li>Voltage: 20 Volts</li>
                                            <li>Battery Capacity: 2 Ah</li>
                                        </ul>
                                    </div>
                                    <div className="product-card__actions">
                                        <div className="product-card__availability">Availability: <span
                                            className="text-success">In Stock</span></div>
                                        <div className="product-card__prices">$24.00</div>
                                        <div className="product-card__buttons"><button
                                            className="btn btn-primary product-card__addtocart" type="button">Add To
                                            Cart</button> <button
                                                className="btn btn-secondary product-card__addtocart product-card__addtocart--list"
                                                type="button">Add To Cart</button> <button
                                                    className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist"
                                                    type="button"><svg width="16px" height="16px">
                                                    <use xlinkHref="assets/images/sprite.svg#wishlist-16"></use>
                                                </svg> <span
                                                    className="fake-svg-icon fake-svg-icon--wishlist-16"></span></button>
                                            <button
                                                className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare"
                                                type="button"><svg width="16px" height="16px">
                                                    <use xlinkHref="assets/images/sprite.svg#compare-16"></use>
                                                </svg> <span
                                                    className="fake-svg-icon fake-svg-icon--compare-16"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="block-products-carousel__column">
                            <div className="block-products-carousel__cell">
                                <div className="product-card product-card--hidden-actions"><button
                                    className="product-card__quickview" type="button"><svg width="16px"
                                        height="16px">
                                        <use xlinkHref="assets/images/sprite.svg#quickview-16"></use>
                                    </svg> <span className="fake-svg-icon"></span></button>
                                    <div className="product-card__image product-image"><a href="product.html"
                                        className="product-image__body"><img className="product-image__img"
                                            src="assets/images/products/product-8.jpg" alt="" /></a></div>
                                    <div className="product-card__info">
                                        <div className="product-card__name"><a href="product.html">Water Hose 40cm</a>
                                        </div>
                                        <div className="product-card__rating">
                                            <div className="product-card__rating-stars">
                                                <div className="rating">
                                                    <div className="rating__body"><svg
                                                        className="rating__star rating__star--active" width="13px"
                                                        height="12px">
                                                        <g className="rating__fill">
                                                            <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                            </use>
                                                        </g>
                                                        <g className="rating__stroke">
                                                            <use
                                                                xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                            </use>
                                                        </g>
                                                    </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star rating__star--active"
                                                            width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-card__rating-legend">4 Reviews</div>
                                        </div>
                                        <ul className="product-card__features-list">
                                            <li>Speed: 750 RPM</li>
                                            <li>Power Source: Cordless-Electric</li>
                                            <li>Battery Cell Type: Lithium</li>
                                            <li>Voltage: 20 Volts</li>
                                            <li>Battery Capacity: 2 Ah</li>
                                        </ul>
                                    </div>
                                    <div className="product-card__actions">
                                        <div className="product-card__availability">Availability: <span
                                            className="text-success">In Stock</span></div>
                                        <div className="product-card__prices">$15.00</div>
                                        <div className="product-card__buttons"><button
                                            className="btn btn-primary product-card__addtocart" type="button">Add To
                                            Cart</button> <button
                                                className="btn btn-secondary product-card__addtocart product-card__addtocart--list"
                                                type="button">Add To Cart</button> <button
                                                    className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist"
                                                    type="button"><svg width="16px" height="16px">
                                                    <use xlinkHref="assets/images/sprite.svg#wishlist-16"></use>
                                                </svg> <span
                                                    className="fake-svg-icon fake-svg-icon--wishlist-16"></span></button>
                                            <button
                                                className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare"
                                                type="button"><svg width="16px" height="16px">
                                                    <use xlinkHref="assets/images/sprite.svg#compare-16"></use>
                                                </svg> <span
                                                    className="fake-svg-icon fake-svg-icon--compare-16"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="block-products-carousel__column">
                            <div className="block-products-carousel__cell">
                                <div className="product-card product-card--hidden-actions"><button
                                    className="product-card__quickview" type="button"><svg width="16px"
                                        height="16px">
                                        <use xlinkHref="assets/images/sprite.svg#quickview-16"></use>
                                    </svg> <span className="fake-svg-icon"></span></button>
                                    <div className="product-card__image product-image"><a href="product.html"
                                        className="product-image__body"><img className="product-image__img"
                                            src="assets/images/products/product-9.jpg" alt="" /></a></div>
                                    <div className="product-card__info">
                                        <div className="product-card__name"><a href="product.html">Spanner Wrench</a>
                                        </div>
                                        <div className="product-card__rating">
                                            <div className="product-card__rating-stars">
                                                <div className="rating">
                                                    <div className="rating__body"><svg
                                                        className="rating__star rating__star--active" width="13px"
                                                        height="12px">
                                                        <g className="rating__fill">
                                                            <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                            </use>
                                                        </g>
                                                        <g className="rating__stroke">
                                                            <use
                                                                xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                            </use>
                                                        </g>
                                                    </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star rating__star--active"
                                                            width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star rating__star--active"
                                                            width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star rating__star--active"
                                                            width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-card__rating-legend">9 Reviews</div>
                                        </div>
                                        <ul className="product-card__features-list">
                                            <li>Speed: 750 RPM</li>
                                            <li>Power Source: Cordless-Electric</li>
                                            <li>Battery Cell Type: Lithium</li>
                                            <li>Voltage: 20 Volts</li>
                                            <li>Battery Capacity: 2 Ah</li>
                                        </ul>
                                    </div>
                                    <div className="product-card__actions">
                                        <div className="product-card__availability">Availability: <span
                                            className="text-success">In Stock</span></div>
                                        <div className="product-card__prices">$19.00</div>
                                        <div className="product-card__buttons"><button
                                            className="btn btn-primary product-card__addtocart" type="button">Add To
                                            Cart</button> <button
                                                className="btn btn-secondary product-card__addtocart product-card__addtocart--list"
                                                type="button">Add To Cart</button> <button
                                                    className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist"
                                                    type="button"><svg width="16px" height="16px">
                                                    <use xlinkHref="assets/images/sprite.svg#wishlist-16"></use>
                                                </svg> <span
                                                    className="fake-svg-icon fake-svg-icon--wishlist-16"></span></button>
                                            <button
                                                className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare"
                                                type="button"><svg width="16px" height="16px">
                                                    <use xlinkHref="assets/images/sprite.svg#compare-16"></use>
                                                </svg> <span
                                                    className="fake-svg-icon fake-svg-icon--compare-16"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="block-products-carousel__column">
                            <div className="block-products-carousel__cell">
                                <div className="product-card product-card--hidden-actions"><button
                                    className="product-card__quickview" type="button"><svg width="16px"
                                        height="16px">
                                        <use xlinkHref="assets/images/sprite.svg#quickview-16"></use>
                                    </svg> <span className="fake-svg-icon"></span></button>
                                    <div className="product-card__image product-image"><a href="product.html"
                                        className="product-image__body"><img className="product-image__img"
                                            src="assets/images/products/product-10.jpg" alt="" /></a></div>
                                    <div className="product-card__info">
                                        <div className="product-card__name"><a href="product.html">Water Tap</a></div>
                                        <div className="product-card__rating">
                                            <div className="product-card__rating-stars">
                                                <div className="rating">
                                                    <div className="rating__body"><svg
                                                        className="rating__star rating__star--active" width="13px"
                                                        height="12px">
                                                        <g className="rating__fill">
                                                            <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                            </use>
                                                        </g>
                                                        <g className="rating__stroke">
                                                            <use
                                                                xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                            </use>
                                                        </g>
                                                    </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star rating__star--active"
                                                            width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star rating__star--active"
                                                            width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star rating__star--active"
                                                            width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star rating__star--active"
                                                            width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-card__rating-legend">11 Reviews</div>
                                        </div>
                                        <ul className="product-card__features-list">
                                            <li>Speed: 750 RPM</li>
                                            <li>Power Source: Cordless-Electric</li>
                                            <li>Battery Cell Type: Lithium</li>
                                            <li>Voltage: 20 Volts</li>
                                            <li>Battery Capacity: 2 Ah</li>
                                        </ul>
                                    </div>
                                    <div className="product-card__actions">
                                        <div className="product-card__availability">Availability: <span
                                            className="text-success">In Stock</span></div>
                                        <div className="product-card__prices">$15.00</div>
                                        <div className="product-card__buttons"><button
                                            className="btn btn-primary product-card__addtocart" type="button">Add To
                                            Cart</button> <button
                                                className="btn btn-secondary product-card__addtocart product-card__addtocart--list"
                                                type="button">Add To Cart</button> <button
                                                    className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist"
                                                    type="button"><svg width="16px" height="16px">
                                                    <use xlinkHref="assets/images/sprite.svg#wishlist-16"></use>
                                                </svg> <span
                                                    className="fake-svg-icon fake-svg-icon--wishlist-16"></span></button>
                                            <button
                                                className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare"
                                                type="button"><svg width="16px" height="16px">
                                                    <use xlinkHref="assets/images/sprite.svg#compare-16"></use>
                                                </svg> <span
                                                    className="fake-svg-icon fake-svg-icon--compare-16"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="block-products-carousel__column">
                            <div className="block-products-carousel__cell">
                                <div className="product-card product-card--hidden-actions"><button
                                    className="product-card__quickview" type="button"><svg width="16px"
                                        height="16px">
                                        <use xlinkHref="assets/images/sprite.svg#quickview-16"></use>
                                    </svg> <span className="fake-svg-icon"></span></button>
                                    <div className="product-card__image product-image"><a href="product.html"
                                        className="product-image__body"><img className="product-image__img"
                                            src="assets/images/products/product-11.jpg" alt="" /></a></div>
                                    <div className="product-card__info">
                                        <div className="product-card__name"><a href="product.html">Hand Tool Kit</a>
                                        </div>
                                        <div className="product-card__rating">
                                            <div className="product-card__rating-stars">
                                                <div className="rating">
                                                    <div className="rating__body"><svg
                                                        className="rating__star rating__star--active" width="13px"
                                                        height="12px">
                                                        <g className="rating__fill">
                                                            <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                            </use>
                                                        </g>
                                                        <g className="rating__stroke">
                                                            <use
                                                                xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                            </use>
                                                        </g>
                                                    </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star rating__star--active"
                                                            width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star rating__star--active"
                                                            width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star rating__star--active"
                                                            width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-card__rating-legend">9 Reviews</div>
                                        </div>
                                        <ul className="product-card__features-list">
                                            <li>Speed: 750 RPM</li>
                                            <li>Power Source: Cordless-Electric</li>
                                            <li>Battery Cell Type: Lithium</li>
                                            <li>Voltage: 20 Volts</li>
                                            <li>Battery Capacity: 2 Ah</li>
                                        </ul>
                                    </div>
                                    <div className="product-card__actions">
                                        <div className="product-card__availability">Availability: <span
                                            className="text-success">In Stock</span></div>
                                        <div className="product-card__prices">$149.00</div>
                                        <div className="product-card__buttons"><button
                                            className="btn btn-primary product-card__addtocart" type="button">Add To
                                            Cart</button> <button
                                                className="btn btn-secondary product-card__addtocart product-card__addtocart--list"
                                                type="button">Add To Cart</button> <button
                                                    className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist"
                                                    type="button"><svg width="16px" height="16px">
                                                    <use xlinkHref="assets/images/sprite.svg#wishlist-16"></use>
                                                </svg> <span
                                                    className="fake-svg-icon fake-svg-icon--wishlist-16"></span></button>
                                            <button
                                                className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare"
                                                type="button"><svg width="16px" height="16px">
                                                    <use xlinkHref="assets/images/sprite.svg#compare-16"></use>
                                                </svg> <span
                                                    className="fake-svg-icon fake-svg-icon--compare-16"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="block-products-carousel__column">
                            <div className="block-products-carousel__cell">
                                <div className="product-card product-card--hidden-actions"><button
                                    className="product-card__quickview" type="button"><svg width="16px"
                                        height="16px">
                                        <use xlinkHref="assets/images/sprite.svg#quickview-16"></use>
                                    </svg> <span className="fake-svg-icon"></span></button>
                                    <div className="product-card__image product-image"><a href="product.html"
                                        className="product-image__body"><img className="product-image__img"
                                            src="assets/images/products/product-12.jpg" alt="" /></a></div>
                                    <div className="product-card__info">
                                        <div className="product-card__name"><a href="product.html">Ash's Chainsaw
                                            3.5kW</a></div>
                                        <div className="product-card__rating">
                                            <div className="product-card__rating-stars">
                                                <div className="rating">
                                                    <div className="rating__body"><svg
                                                        className="rating__star rating__star--active" width="13px"
                                                        height="12px">
                                                        <g className="rating__fill">
                                                            <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                            </use>
                                                        </g>
                                                        <g className="rating__stroke">
                                                            <use
                                                                xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                            </use>
                                                        </g>
                                                    </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star rating__star--active"
                                                            width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star rating__star--active"
                                                            width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star rating__star--active"
                                                            width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star rating__star--active"
                                                            width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-card__rating-legend">11 Reviews</div>
                                        </div>
                                        <ul className="product-card__features-list">
                                            <li>Speed: 750 RPM</li>
                                            <li>Power Source: Cordless-Electric</li>
                                            <li>Battery Cell Type: Lithium</li>
                                            <li>Voltage: 20 Volts</li>
                                            <li>Battery Capacity: 2 Ah</li>
                                        </ul>
                                    </div>
                                    <div className="product-card__actions">
                                        <div className="product-card__availability">Availability: <span
                                            className="text-success">In Stock</span></div>
                                        <div className="product-card__prices">$666.99</div>
                                        <div className="product-card__buttons"><button
                                            className="btn btn-primary product-card__addtocart" type="button">Add To
                                            Cart</button> <button
                                                className="btn btn-secondary product-card__addtocart product-card__addtocart--list"
                                                type="button">Add To Cart</button> <button
                                                    className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist"
                                                    type="button"><svg width="16px" height="16px">
                                                    <use xlinkHref="assets/images/sprite.svg#wishlist-16"></use>
                                                </svg> <span
                                                    className="fake-svg-icon fake-svg-icon--wishlist-16"></span></button>
                                            <button
                                                className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare"
                                                type="button"><svg width="16px" height="16px">
                                                    <use xlinkHref="assets/images/sprite.svg#compare-16"></use>
                                                </svg> <span
                                                    className="fake-svg-icon fake-svg-icon--compare-16"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="block-products-carousel__column">
                            <div className="block-products-carousel__cell">
                                <div className="product-card product-card--hidden-actions"><button
                                    className="product-card__quickview" type="button"><svg width="16px"
                                        height="16px">
                                        <use xlinkHref="assets/images/sprite.svg#quickview-16"></use>
                                    </svg> <span className="fake-svg-icon"></span></button>
                                    <div className="product-card__image product-image"><a href="product.html"
                                        className="product-image__body"><img className="product-image__img"
                                            src="assets/images/products/product-13.jpg" alt="" /></a></div>
                                    <div className="product-card__info">
                                        <div className="product-card__name"><a href="product.html">Brandix Angle Grinder
                                            KZX3890PQW</a></div>
                                        <div className="product-card__rating">
                                            <div className="product-card__rating-stars">
                                                <div className="rating">
                                                    <div className="rating__body"><svg
                                                        className="rating__star rating__star--active" width="13px"
                                                        height="12px">
                                                        <g className="rating__fill">
                                                            <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                            </use>
                                                        </g>
                                                        <g className="rating__stroke">
                                                            <use
                                                                xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                            </use>
                                                        </g>
                                                    </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star rating__star--active"
                                                            width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-card__rating-legend">4 Reviews</div>
                                        </div>
                                        <ul className="product-card__features-list">
                                            <li>Speed: 750 RPM</li>
                                            <li>Power Source: Cordless-Electric</li>
                                            <li>Battery Cell Type: Lithium</li>
                                            <li>Voltage: 20 Volts</li>
                                            <li>Battery Capacity: 2 Ah</li>
                                        </ul>
                                    </div>
                                    <div className="product-card__actions">
                                        <div className="product-card__availability">Availability: <span
                                            className="text-success">In Stock</span></div>
                                        <div className="product-card__prices">$649.00</div>
                                        <div className="product-card__buttons"><button
                                            className="btn btn-primary product-card__addtocart" type="button">Add To
                                            Cart</button> <button
                                                className="btn btn-secondary product-card__addtocart product-card__addtocart--list"
                                                type="button">Add To Cart</button> <button
                                                    className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist"
                                                    type="button"><svg width="16px" height="16px">
                                                    <use xlinkHref="assets/images/sprite.svg#wishlist-16"></use>
                                                </svg> <span
                                                    className="fake-svg-icon fake-svg-icon--wishlist-16"></span></button>
                                            <button
                                                className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare"
                                                type="button"><svg width="16px" height="16px">
                                                    <use xlinkHref="assets/images/sprite.svg#compare-16"></use>
                                                </svg> <span
                                                    className="fake-svg-icon fake-svg-icon--compare-16"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="block-products-carousel__column">
                            <div className="block-products-carousel__cell">
                                <div className="product-card product-card--hidden-actions"><button
                                    className="product-card__quickview" type="button"><svg width="16px"
                                        height="16px">
                                        <use xlinkHref="assets/images/sprite.svg#quickview-16"></use>
                                    </svg> <span className="fake-svg-icon"></span></button>
                                    <div className="product-card__image product-image"><a href="product.html"
                                        className="product-image__body"><img className="product-image__img"
                                            src="assets/images/products/product-14.jpg" alt="" /></a></div>
                                    <div className="product-card__info">
                                        <div className="product-card__name"><a href="product.html">Brandix Air
                                            Compressor DELTAKX500</a></div>
                                        <div className="product-card__rating">
                                            <div className="product-card__rating-stars">
                                                <div className="rating">
                                                    <div className="rating__body"><svg
                                                        className="rating__star rating__star--active" width="13px"
                                                        height="12px">
                                                        <g className="rating__fill">
                                                            <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                            </use>
                                                        </g>
                                                        <g className="rating__stroke">
                                                            <use
                                                                xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                            </use>
                                                        </g>
                                                    </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star rating__star--active"
                                                            width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star rating__star--active"
                                                            width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-card__rating-legend">7 Reviews</div>
                                        </div>
                                        <ul className="product-card__features-list">
                                            <li>Speed: 750 RPM</li>
                                            <li>Power Source: Cordless-Electric</li>
                                            <li>Battery Cell Type: Lithium</li>
                                            <li>Voltage: 20 Volts</li>
                                            <li>Battery Capacity: 2 Ah</li>
                                        </ul>
                                    </div>
                                    <div className="product-card__actions">
                                        <div className="product-card__availability">Availability: <span
                                            className="text-success">In Stock</span></div>
                                        <div className="product-card__prices">$1,800.00</div>
                                        <div className="product-card__buttons"><button
                                            className="btn btn-primary product-card__addtocart" type="button">Add To
                                            Cart</button> <button
                                                className="btn btn-secondary product-card__addtocart product-card__addtocart--list"
                                                type="button">Add To Cart</button> <button
                                                    className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist"
                                                    type="button"><svg width="16px" height="16px">
                                                    <use xlinkHref="assets/images/sprite.svg#wishlist-16"></use>
                                                </svg> <span
                                                    className="fake-svg-icon fake-svg-icon--wishlist-16"></span></button>
                                            <button
                                                className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare"
                                                type="button"><svg width="16px" height="16px">
                                                    <use xlinkHref="assets/images/sprite.svg#compare-16"></use>
                                                </svg> <span
                                                    className="fake-svg-icon fake-svg-icon--compare-16"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="block-products-carousel__column">
                            <div className="block-products-carousel__cell">
                                <div className="product-card product-card--hidden-actions"><button
                                    className="product-card__quickview" type="button"><svg width="16px"
                                        height="16px">
                                        <use xlinkHref="assets/images/sprite.svg#quickview-16"></use>
                                    </svg> <span className="fake-svg-icon"></span></button>
                                    <div className="product-card__image product-image"><a href="product.html"
                                        className="product-image__body"><img className="product-image__img"
                                            src="assets/images/products/product-15.jpg" alt="" /></a></div>
                                    <div className="product-card__info">
                                        <div className="product-card__name"><a href="product.html">Brandix Electric
                                            Jigsaw JIG7000BQ</a></div>
                                        <div className="product-card__rating">
                                            <div className="product-card__rating-stars">
                                                <div className="rating">
                                                    <div className="rating__body"><svg
                                                        className="rating__star rating__star--active" width="13px"
                                                        height="12px">
                                                        <g className="rating__fill">
                                                            <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                            </use>
                                                        </g>
                                                        <g className="rating__stroke">
                                                            <use
                                                                xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                            </use>
                                                        </g>
                                                    </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star rating__star--active"
                                                            width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-card__rating-legend">4 Reviews</div>
                                        </div>
                                        <ul className="product-card__features-list">
                                            <li>Speed: 750 RPM</li>
                                            <li>Power Source: Cordless-Electric</li>
                                            <li>Battery Cell Type: Lithium</li>
                                            <li>Voltage: 20 Volts</li>
                                            <li>Battery Capacity: 2 Ah</li>
                                        </ul>
                                    </div>
                                    <div className="product-card__actions">
                                        <div className="product-card__availability">Availability: <span
                                            className="text-success">In Stock</span></div>
                                        <div className="product-card__prices">$290.00</div>
                                        <div className="product-card__buttons"><button
                                            className="btn btn-primary product-card__addtocart" type="button">Add To
                                            Cart</button> <button
                                                className="btn btn-secondary product-card__addtocart product-card__addtocart--list"
                                                type="button">Add To Cart</button> <button
                                                    className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist"
                                                    type="button"><svg width="16px" height="16px">
                                                    <use xlinkHref="assets/images/sprite.svg#wishlist-16"></use>
                                                </svg> <span
                                                    className="fake-svg-icon fake-svg-icon--wishlist-16"></span></button>
                                            <button
                                                className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare"
                                                type="button"><svg width="16px" height="16px">
                                                    <use xlinkHref="assets/images/sprite.svg#compare-16"></use>
                                                </svg> <span
                                                    className="fake-svg-icon fake-svg-icon--compare-16"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="block-products-carousel__column">
                            <div className="block-products-carousel__cell">
                                <div className="product-card product-card--hidden-actions"><button
                                    className="product-card__quickview" type="button"><svg width="16px"
                                        height="16px">
                                        <use xlinkHref="assets/images/sprite.svg#quickview-16"></use>
                                    </svg> <span className="fake-svg-icon"></span></button>
                                    <div className="product-card__image product-image"><a href="product.html"
                                        className="product-image__body"><img className="product-image__img"
                                            src="assets/images/products/product-16.jpg" alt="" /></a></div>
                                    <div className="product-card__info">
                                        <div className="product-card__name"><a href="product.html">Brandix Screwdriver
                                            SCREW1500ACC</a></div>
                                        <div className="product-card__rating">
                                            <div className="product-card__rating-stars">
                                                <div className="rating">
                                                    <div className="rating__body"><svg
                                                        className="rating__star rating__star--active" width="13px"
                                                        height="12px">
                                                        <g className="rating__fill">
                                                            <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                            </use>
                                                        </g>
                                                        <g className="rating__stroke">
                                                            <use
                                                                xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                            </use>
                                                        </g>
                                                    </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star rating__star--active"
                                                            width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star rating__star--active"
                                                            width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star rating__star--active"
                                                            width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star rating__star--active"
                                                            width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="assets/images/sprite.svg#star-normal">
                                                                </use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use
                                                                    xlinkHref="assets/images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div
                                                            className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-card__rating-legend">11 Reviews</div>
                                        </div>
                                        <ul className="product-card__features-list">
                                            <li>Speed: 750 RPM</li>
                                            <li>Power Source: Cordless-Electric</li>
                                            <li>Battery Cell Type: Lithium</li>
                                            <li>Voltage: 20 Volts</li>
                                            <li>Battery Capacity: 2 Ah</li>
                                        </ul>
                                    </div>
                                    <div className="product-card__actions">
                                        <div className="product-card__availability">Availability: <span
                                            className="text-success">In Stock</span></div>
                                        <div className="product-card__prices">$1,499.00</div>
                                        <div className="product-card__buttons"><button
                                            className="btn btn-primary product-card__addtocart" type="button">Add To
                                            Cart</button> <button
                                                className="btn btn-secondary product-card__addtocart product-card__addtocart--list"
                                                type="button">Add To Cart</button> <button
                                                    className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist"
                                                    type="button"><svg width="16px" height="16px">
                                                    <use xlinkHref="assets/images/sprite.svg#wishlist-16"></use>
                                                </svg> <span
                                                    className="fake-svg-icon fake-svg-icon--wishlist-16"></span></button>
                                            <button
                                                className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare"
                                                type="button"><svg width="16px" height="16px">
                                                    <use xlinkHref="assets/images/sprite.svg#compare-16"></use>
                                                </svg> <span
                                                    className="fake-svg-icon fake-svg-icon--compare-16"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProducts