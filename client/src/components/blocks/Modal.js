import React from 'react'

const Modal = () => {
    return (
        <>
            <div id="quickview-modal" className="modal fade" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                        <div className="quickview">
                            <button className="quickview__close" type="button">
                                <svg width="20px" height="20px">
                                    <use xlinkHref="images/sprite.svg#cross-20"></use>
                                </svg>
                            </button>

                            <div className="product product--layout--quickview" data-layout="quickview">
                                <div className="product__content">
                                    <div className="product__gallery">
                                        <div className="product-gallery">
                                            <div className="product-gallery__featured">
                                                <button className="product-gallery__zoom">
                                                    <svg width="24px" height="24px">
                                                        <use xlinkHref="images/sprite.svg#zoom-in-24"></use>
                                                    </svg>
                                                </button>

                                                <div className="owl-carousel" id="product-image">
                                                    <div className="product-image product-image--location--gallery">
                                                        <a href="images/products/product-16.jpg" data-width="700" data-height="700" className="product-image__body" target="_blank">
                                                            <img className="product-image__img" src="images/products/product-16.jpg" alt="" />
                                                        </a>
                                                    </div>

                                                    <div className="product-image product-image--location--gallery">
                                                        <a href="images/products/product-16-1.jpg" data-width="700" data-height="700" className="product-image__body" target="_blank">
                                                            <img className="product-image__img" src="images/products/product-16-1.jpg" alt="" />
                                                        </a>
                                                    </div>

                                                    <div className="product-image product-image--location--gallery">
                                                        <a href="images/products/product-16-2.jpg" data-width="700" data-height="700" className="product-image__body" target="_blank">
                                                            <img className="product-image__img" src="images/products/product-16-2.jpg" alt="" />
                                                        </a>
                                                    </div>

                                                    <div className="product-image product-image--location--gallery">
                                                        <a href="images/products/product-16-3.jpg" data-width="700" data-height="700" className="product-image__body" target="_blank">
                                                            <img className="product-image__img" src="images/products/product-16-3.jpg" alt="" />
                                                        </a>
                                                    </div>

                                                    <div className="product-image product-image--location--gallery">
                                                        <a href="images/products/product-16-4.jpg" data-width="700" data-height="700" className="product-image__body" target="_blank">
                                                            <img className="product-image__img" src="images/products/product-16-4.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="product-gallery__carousel">
                                                <div className="owl-carousel" id="product-carousel">
                                                    <a href="images/products/product-16.jpg" className="product-image product-gallery__carousel-item">
                                                        <div className="product-image__body">
                                                            <img className="product-image__img product-gallery__carousel-image" src="images/products/product-16.jpg" alt="" />
                                                        </div>
                                                    </a>

                                                    <a href="images/products/product-16-1.jpg" className="product-image product-gallery__carousel-item">
                                                        <div className="product-image__body">
                                                            <img className="product-image__img product-gallery__carousel-image" src="images/products/product-16-1.jpg" alt="" />
                                                        </div>
                                                    </a>

                                                    <a href="images/products/product-16-2.jpg" className="product-image product-gallery__carousel-item">
                                                        <div className="product-image__body">
                                                            <img className="product-image__img product-gallery__carousel-image" src="images/products/product-16-2.jpg" alt="" />
                                                        </div>
                                                    </a>

                                                    <a href="images/products/product-16-3.jpg" className="product-image product-gallery__carousel-item">
                                                        <div className="product-image__body">
                                                            <img className="product-image__img product-gallery__carousel-image" src="images/products/product-16-3.jpg" alt="" />
                                                        </div>
                                                    </a>

                                                    <a href="images/products/product-16-4.jpg" className="product-image product-gallery__carousel-item">
                                                        <div className="product-image__body">
                                                            <img className="product-image__img product-gallery__carousel-image" src="images/products/product-16-4.jpg" alt="" />
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="product__info">
                                        <div className="product__wishlist-compare">
                                            <button type="button" className="btn btn-sm btn-light btn-svg-icon" data-toggle="tooltip" data-placement="right" title="Wishlist">
                                                <svg width="16px" height="16px">
                                                    <use xlinkHref="images/sprite.svg#wishlist-16"></use>
                                                </svg>
                                            </button>

                                            <button type="button" className="btn btn-sm btn-light btn-svg-icon" data-toggle="tooltip" data-placement="right" title="Compare">
                                                <svg width="16px" height="16px">
                                                    <use xlinkHref="images/sprite.svg#compare-16"></use>
                                                </svg>
                                            </button>
                                        </div>

                                        <h1 className="product__name">Brandix Screwdriver SCREW1500ACC</h1>
                                        <div className="product__rating">
                                            <div className="product__rating-stars">
                                                <div className="rating">
                                                    <div className="rating__body">
                                                        <svg className="rating__star rating__star--active" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="images/sprite.svg#star-normal"></use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use xlinkHref="images/sprite.svg#star-normal-stroke"></use>
                                                            </g>
                                                        </svg>

                                                        <div className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>

                                                        <svg className="rating__star rating__star--active" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="images/sprite.svg#star-normal"></use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use xlinkHref="images/sprite.svg#star-normal-stroke"></use>
                                                            </g>
                                                        </svg>

                                                        <div className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>

                                                        <svg className="rating__star rating__star--active" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="images/sprite.svg#star-normal"></use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use xlinkHref="images/sprite.svg#star-normal-stroke"></use>
                                                            </g>
                                                        </svg>

                                                        <div className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>

                                                        <svg className="rating__star rating__star--active" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="images/sprite.svg#star-normal"></use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use xlinkHref="images/sprite.svg#star-normal-stroke"></use>
                                                            </g>
                                                        </svg>

                                                        <div className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>

                                                        <svg className="rating__star rating__star--active" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="images/sprite.svg#star-normal"></use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use xlinkHref="images/sprite.svg#star-normal-stroke"></use>
                                                            </g>
                                                        </svg>

                                                        <div className="rating__star rating__star--only-edge rating__star--active">
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

                                            <div className="product__rating-legend">
                                                <a href="">7 Reviews</a>
                                                <span>/</span>
                                                <a href="">Write A Review</a>
                                            </div>
                                        </div>

                                        <div className="product__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                                            ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus.
                                            Maecenas eu varius nisi.</div>

                                        <ul className="product__features">
                                            <li>Speed: 750 RPM</li>
                                            <li>Power Source: Cordless-Electric</li>
                                            <li>Battery Cell Type: Lithium</li>
                                            <li>Voltage: 20 Volts</li>
                                            <li>Battery Capacity: 2 Ah</li>
                                        </ul>

                                        <ul className="product__meta">
                                            <li className="product__meta-availability">Availability: <span className="text-success">In Stock</span></li>
                                            <li>Brand: <a href="">Wakita</a></li>
                                            <li>SKU: 83690/32</li>
                                        </ul>
                                    </div>

                                    <div className="product__sidebar">
                                        <div className="product__availability">Availability: <span className="text-success">In Stock</span></div>
                                        <div className="product__prices">$1,499.00</div>

                                        <form className="product__options">
                                            <div className="form-group product__option">
                                                <label className="product__option-label">Color</label>
                                                <div className="input-radio-color">
                                                    <div className="input-radio-color__list">
                                                        <label className="input-radio-color__item input-radio-color__item--white" style={{color: '#fff'}} data-toggle="tooltip" title="White">
                                                            <input type="radio" name="color" />
                                                            <span></span>
                                                        </label>

                                                        <label className="input-radio-color__item" style={{color: '#ffd333'}} data-toggle="tooltip" title="Yellow">
                                                            <input type="radio" name="color" />
                                                            <span></span>
                                                        </label>

                                                        <label className="input-radio-color__item" style={{color: '#ff4040'}} data-toggle="tooltip" title="Red">
                                                            <input type="radio" name="color" />
                                                            <span></span>
                                                        </label>

                                                        <label className="input-radio-color__item input-radio-color__item--disabled" style={{color: '#4080ff'}} data-toggle="tooltip" title="Blue">
                                                            <input type="radio" name="color" disabled="disabled" /> <span></span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group product__option">
                                                <label className="product__option-label">Material</label>
                                                <div className="input-radio-label">
                                                    <div className="input-radio-label__list">
                                                        <label>
                                                            <input type="radio" name="material" />
                                                            <span>Metal</span>
                                                        </label>

                                                        <label>
                                                            <input type="radio" name="material" />
                                                            <span>Wood</span></label>
                                                        <label>
                                                            <input type="radio" name="material" disabled="disabled" />
                                                            <span>Plastic</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group product__option">
                                                <label className="product__option-label" htmlFor="product-quantity">Quantity</label>
                                                <div className="product__actions">
                                                    <div className="product__actions-item">
                                                        <div className="input-number product__quantity">
                                                            <input id="product-quantity" className="input-number__input form-control form-control-lg" type="number" min="1" defaultValue="1" />
                                                            <div className="input-number__add"></div>
                                                            <div className="input-number__sub"></div>
                                                        </div>
                                                    </div>

                                                    <div className="product__actions-item product__actions-item--addtocart">
                                                        <button className="btn btn-primary btn-lg">Add to cart</button>
                                                    </div>

                                                    <div className="product__actions-item product__actions-item--wishlist">
                                                        <button type="button" className="btn btn-secondary btn-svg-icon btn-lg" data-toggle="tooltip" title="Wishlist">
                                                            <svg width="16px" height="16px">
                                                                <use xlinkHref="images/sprite.svg#wishlist-16"></use>
                                                            </svg>
                                                        </button>
                                                    </div>

                                                    <div className="product__actions-item product__actions-item--compare">
                                                        <button type="button" className="btn btn-secondary btn-svg-icon btn-lg" data-toggle="tooltip" title="Compare">
                                                            <svg width="16px" height="16px">
                                                                <use xlinkHref="images/sprite.svg#compare-16"></use>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                    <div className="product__footer">
                                        <div className="product__tags tags">
                                            <div className="tags__list">
                                                <a href="">Mounts</a>
                                                <a href="">Electrodes</a>
                                                <a href="">Chainsaws</a>
                                            </div>
                                        </div>

                                        <div className="product__share-links share-links">
                                            <ul className="share-links__list">
                                                <li className="share-links__item share-links__item--type--like"><a href="">Like</a></li>
                                                <li className="share-links__item share-links__item--type--tweet"><a href="">Tweet</a></li>
                                                <li className="share-links__item share-links__item--type--pin"><a href="">Pin It</a></li>
                                                <li className="share-links__item share-links__item--type--counter"><a href="">4K</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mobilemenu">
                <div className="mobilemenu__backdrop"></div>
                <div className="mobilemenu__body">
                    <div className="mobilemenu__header">
                        <div className="mobilemenu__title">Menu</div>
                        <button type="button" className="mobilemenu__close">
                            <svg width="20px" height="20px">
                                <use xlinkHref="images/sprite.svg#cross-20"></use>
                            </svg>
                        </button>
                    </div>

                    <div className="mobilemenu__content">
                        <ul className="mobile-links mobile-links--level--0" data-collapse data-collapse-opened-class="mobile-links__item--open">
                            <li className="mobile-links__item" data-collapse-item>
                                <div className="mobile-links__item-title">
                                    <a href="index.html" className="mobile-links__item-link">Home</a>
                                    <button className="mobile-links__item-toggle" type="button" data-collapse-trigger>
                                        <svg className="mobile-links__item-arrow" width="12px" height="7px">
                                            <use xlinkHref="images/sprite.svg#arrow-rounded-down-12x7"></use>
                                        </svg>
                                    </button>
                                </div>

                                <div className="mobile-links__item-sub-links" data-collapse-content>
                                    <ul className="mobile-links mobile-links--level--1">
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <a href="index.html" className="mobile-links__item-link">Home 1</a>
                                            </div>
                                        </li>

                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <a href="index-2.html" className="mobile-links__item-link">Home 2</a>
                                            </div>
                                        </li>

                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <a href="index-3.html" className="mobile-links__item-link">Home 1 Finder</a>
                                            </div>
                                        </li>

                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <a href="index-4.html" className="mobile-links__item-link">Home 2 Finder</a>
                                            </div>
                                        </li>

                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <a href="offcanvas-cart.html" className="mobile-links__item-link">Offcanvas Cart</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li className="mobile-links__item" data-collapse-item>
                                <div className="mobile-links__item-title"><a href="#" className="mobile-links__item-link">Categories</a>
                                    <button className="mobile-links__item-toggle" type="button" data-collapse-trigger>
                                        <svg className="mobile-links__item-arrow" width="12px" height="7px">
                                            <use xlinkHref="images/sprite.svg#arrow-rounded-down-12x7"></use>
                                        </svg>
                                    </button>
                                </div>

                                <div className="mobile-links__item-sub-links" data-collapse-content>
                                    <ul className="mobile-links mobile-links--level--1">
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <a href="#" className="mobile-links__item-link">Power Tools</a>
                                                <button className="mobile-links__item-toggle" type="button" data-collapse-trigger>
                                                    <svg className="mobile-links__item-arrow" width="12px" height="7px">
                                                        <use xlinkHref="images/sprite.svg#arrow-rounded-down-12x7"></use>
                                                    </svg>
                                                </button>
                                            </div>

                                            <div className="mobile-links__item-sub-links" data-collapse-content>
                                                <ul className="mobile-links mobile-links--level--2">
                                                    <li className="mobile-links__item" data-collapse-item>
                                                        <div className="mobile-links__item-title">
                                                            <a href="#" className="mobile-links__item-link">Engravers</a>
                                                        </div>
                                                    </li>

                                                    <li className="mobile-links__item" data-collapse-item>
                                                        <div className="mobile-links__item-title">
                                                            <a href="#" className="mobile-links__item-link">Wrenches</a>
                                                        </div>
                                                    </li>

                                                    <li className="mobile-links__item" data-collapse-item>
                                                        <div className="mobile-links__item-title">
                                                            <a href="#" className="mobile-links__item-link">Wall Chaser</a>
                                                        </div>
                                                    </li>

                                                    <li className="mobile-links__item" data-collapse-item>
                                                        <div className="mobile-links__item-title">
                                                            <a href="#" className="mobile-links__item-link">Pneumatic Tools</a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>

                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <a href="#" className="mobile-links__item-link">Machine Tools</a>
                                                <button className="mobile-links__item-toggle" type="button" data-collapse-trigger>
                                                    <svg className="mobile-links__item-arrow" width="12px" height="7px">
                                                        <use xlinkHref="images/sprite.svg#arrow-rounded-down-12x7"></use>
                                                    </svg>
                                                </button>
                                            </div>

                                            <div className="mobile-links__item-sub-links" data-collapse-content>
                                                <ul className="mobile-links mobile-links--level--2">
                                                    <li className="mobile-links__item" data-collapse-item>
                                                        <div className="mobile-links__item-title">
                                                            <a href="#" className="mobile-links__item-link">Thread Cutting</a>
                                                        </div>
                                                    </li>

                                                    <li className="mobile-links__item" data-collapse-item>
                                                        <div className="mobile-links__item-title">
                                                            <a href="#" className="mobile-links__item-link">Chip Blowers</a>
                                                        </div>
                                                    </li>

                                                    <li className="mobile-links__item" data-collapse-item>
                                                        <div className="mobile-links__item-title">
                                                            <a href="#" className="mobile-links__item-link">Sharpening Machines</a>
                                                        </div>
                                                    </li>

                                                    <li className="mobile-links__item" data-collapse-item>
                                                        <div className="mobile-links__item-title">
                                                            <a href="#" className="mobile-links__item-link">Pipe Cutters</a>
                                                        </div>
                                                    </li>

                                                    <li className="mobile-links__item" data-collapse-item>
                                                        <div className="mobile-links__item-title">
                                                            <a href="#" className="mobile-links__item-link">Slotting machines</a>
                                                        </div>
                                                    </li>

                                                    <li className="mobile-links__item" data-collapse-item>
                                                        <div className="mobile-links__item-title">
                                                            <a href="#" className="mobile-links__item-link">Lathes</a>
                                                        </div>
                                                    </li>

                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li className="mobile-links__item" data-collapse-item>
                                <div className="mobile-links__item-title">
                                    <a href="shop-grid-3-columns-sidebar.html" className="mobile-links__item-link">Shop</a>
                                    <button className="mobile-links__item-toggle" type="button" data-collapse-trigger>
                                        <svg className="mobile-links__item-arrow" width="12px" height="7px">
                                            <use xlinkHref="images/sprite.svg#arrow-rounded-down-12x7"></use>
                                        </svg>
                                    </button>
                                </div>

                                <div className="mobile-links__item-sub-links" data-collapse-content>
                                    <ul className="mobile-links mobile-links--level--1">
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <a href="shop-grid-3-columns-sidebar.html" className="mobile-links__item-link">Shop Grid</a>
                                                <button className="mobile-links__item-toggle" type="button" data-collapse-trigger>
                                                    <svg className="mobile-links__item-arrow" width="12px" height="7px">
                                                        <use xlinkHref="images/sprite.svg#arrow-rounded-down-12x7"></use>
                                                    </svg>
                                                </button>
                                            </div>

                                            <div className="mobile-links__item-sub-links" data-collapse-content>
                                                <ul className="mobile-links mobile-links--level--2">
                                                    <li className="mobile-links__item" data-collapse-item>
                                                        <div className="mobile-links__item-title">
                                                            <a href="shop-grid-3-columns-sidebar.html" className="mobile-links__item-link">3 Columns Sidebar</a>
                                                        </div>
                                                    </li>

                                                    <li className="mobile-links__item" data-collapse-item>
                                                        <div className="mobile-links__item-title">
                                                            <a href="shop-grid-4-columns-full.html" className="mobile-links__item-link">4 Columns Full</a>
                                                        </div>
                                                    </li>

                                                    <li className="mobile-links__item" data-collapse-item>
                                                        <div className="mobile-links__item-title">
                                                            <a href="shop-grid-5-columns-full.html" className="mobile-links__item-link">5 Columns Full</a>
                                                        </div>
                                                    </li>

                                                </ul>
                                            </div>
                                        </li>

                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <a href="shop-list.html" className="mobile-links__item-link">Shop List</a>
                                            </div>
                                        </li>

                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <a href="shop-right-sidebar.html" className="mobile-links__item-link">Shop Right Sidebar</a>
                                            </div>
                                        </li>

                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <a href="product.html" className="mobile-links__item-link">Product</a>
                                                <button className="mobile-links__item-toggle" type="button" data-collapse-trigger>
                                                    <svg className="mobile-links__item-arrow" width="12px" height="7px">
                                                        <use xlinkHref="images/sprite.svg#arrow-rounded-down-12x7"></use>
                                                    </svg>
                                                </button>
                                            </div>

                                            <div className="mobile-links__item-sub-links" data-collapse-content>
                                                <ul className="mobile-links mobile-links--level--2">
                                                    <li className="mobile-links__item" data-collapse-item>
                                                        <div className="mobile-links__item-title">
                                                            <a href="product.html" className="mobile-links__item-link">Product</a>
                                                        </div>
                                                    </li>

                                                    <li className="mobile-links__item" data-collapse-item>
                                                        <div className="mobile-links__item-title">
                                                            <a href="product-alt.html" className="mobile-links__item-link">Product Alt</a>
                                                        </div>
                                                    </li>

                                                    <li className="mobile-links__item" data-collapse-item>
                                                        <div className="mobile-links__item-title">
                                                            <a href="product-sidebar.html" className="mobile-links__item-link">Product Sidebar</a>
                                                        </div>
                                                    </li>

                                                </ul>
                                            </div>
                                        </li>

                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <a href="cart.html" className="mobile-links__item-link">Cart</a>
                                            </div>
                                        </li>

                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <a href="cart-empty.html" className="mobile-links__item-link">Cart Empty</a>
                                            </div>
                                        </li>

                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <a href="checkout.html" className="mobile-links__item-link">Checkout</a>
                                            </div>
                                        </li>

                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <a href="order-success.html" className="mobile-links__item-link">Order Success</a>
                                            </div>
                                        </li>

                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <a href="wishlist.html" className="mobile-links__item-link">Wishlist</a>
                                            </div>
                                        </li>

                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <a href="compare.html" className="mobile-links__item-link">Compare</a>
                                            </div>
                                        </li>

                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <a href="track-order.html" className="mobile-links__item-link">Track Order</a>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </li>

                            <li className="mobile-links__item" data-collapse-item>
                                <div className="mobile-links__item-title">
                                    <a href="account-login.html" className="mobile-links__item-link">Account</a>
                                    <button className="mobile-links__item-toggle" type="button" data-collapse-trigger>
                                        <svg className="mobile-links__item-arrow" width="12px" height="7px">
                                            <use xlinkHref="images/sprite.svg#arrow-rounded-down-12x7"></use>
                                        </svg>
                                    </button>
                                </div>

                                <div className="mobile-links__item-sub-links" data-collapse-content>
                                    <ul className="mobile-links mobile-links--level--1">
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <a href="account-login.html" className="mobile-links__item-link">Login</a>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <a href="account-dashboard.html" className="mobile-links__item-link">Dashboard</a>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <a href="account-profile.html" className="mobile-links__item-link">Edit Profile</a>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <a href="account-orders.html" className="mobile-links__item-link">Order History</a>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <a href="account-order-details.html" className="mobile-links__item-link">Order Details</a>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <a href="account-addresses.html" className="mobile-links__item-link">Address Book</a>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <a href="account-edit-address.html" className="mobile-links__item-link">Edit Address</a>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <a href="account-password.html" className="mobile-links__item-link">Change Password</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li className="mobile-links__item" data-collapse-item>
                                <div className="mobile-links__item-title">
                                    <a href="blog-classic.html" className="mobile-links__item-link">Blog</a>
                                    <button className="mobile-links__item-toggle" type="button" data-collapse-trigger>
                                        <svg className="mobile-links__item-arrow" width="12px" height="7px">
                                            <use xlinkHref="images/sprite.svg#arrow-rounded-down-12x7"></use>
                                        </svg>
                                    </button>
                                </div>

                                <div className="mobile-links__item-sub-links" data-collapse-content>
                                    <ul className="mobile-links mobile-links--level--1">
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <a href="blog-classic.html" className="mobile-links__item-link">Blog Classic</a>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <a href="blog-grid.html" className="mobile-links__item-link">Blog Grid</a>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <a href="blog-list.html" className="mobile-links__item-link">Blog List</a>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <a href="blog-left-sidebar.html" className="mobile-links__item-link">Blog Left Sidebar</a>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <a href="post.html" className="mobile-links__item-link">Post Page</a>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <a href="post-without-sidebar.html" className="mobile-links__item-link">Post Without Sidebar</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="mobile-links__item" data-collapse-item>
                                <div className="mobile-links__item-title">
                                    <a href="#" className="mobile-links__item-link">Pages</a>
                                    <button className="mobile-links__item-toggle" type="button" data-collapse-trigger>
                                        <svg className="mobile-links__item-arrow" width="12px" height="7px">
                                            <use xlinkHref="images/sprite.svg#arrow-rounded-down-12x7"></use>
                                        </svg>
                                    </button>
                                </div>

                                <div className="mobile-links__item-sub-links" data-collapse-content>
                                    <ul className="mobile-links mobile-links--level--1">
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <a href="about-us.html" className="mobile-links__item-link">About Us</a>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <a href="contact-us.html" className="mobile-links__item-link">Contact Us</a>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <a href="contact-us-alt.html" className="mobile-links__item-link">Contact Us Alt</a>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <a href="404.html" className="mobile-links__item-link">404</a>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <a href="terms-and-conditions.html" className="mobile-links__item-link">Terms And Conditions</a>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <a href="faq.html" className="mobile-links__item-link">FAQ</a>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <a href="components.html" className="mobile-links__item-link">Components</a>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <a href="typography.html" className="mobile-links__item-link">Typography</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li className="mobile-links__item" data-collapse-item>
                                <div className="mobile-links__item-title">
                                    <a data-collapse-trigger className="mobile-links__item-link">Currency</a>
                                    <button className="mobile-links__item-toggle" type="button" data-collapse-trigger>
                                        <svg className="mobile-links__item-arrow" width="12px" height="7px">
                                            <use xlinkHref="images/sprite.svg#arrow-rounded-down-12x7"></use>
                                        </svg>
                                    </button>
                                </div>

                                <div className="mobile-links__item-sub-links" data-collapse-content>
                                    <ul className="mobile-links mobile-links--level--1">
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <a href="#" className="mobile-links__item-link">€ Euro</a>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <a href="#" className="mobile-links__item-link">£ Pound Sterling</a>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <a href="#" className="mobile-links__item-link">$ US Dollar</a>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <a href="#" className="mobile-links__item-link">₽ Russian Ruble</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li className="mobile-links__item" data-collapse-item>
                                <div className="mobile-links__item-title">
                                    <a data-collapse-trigger className="mobile-links__item-link">Language</a>
                                    <button className="mobile-links__item-toggle" type="button" data-collapse-trigger>
                                        <svg className="mobile-links__item-arrow" width="12px" height="7px">
                                            <use xlinkHref="images/sprite.svg#arrow-rounded-down-12x7"></use>
                                        </svg>
                                    </button>
                                </div>

                                <div className="mobile-links__item-sub-links" data-collapse-content>
                                    <ul className="mobile-links mobile-links--level--1">
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <a href="#" className="mobile-links__item-link">English</a>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <a href="#" className="mobile-links__item-link">French</a>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <a href="#" className="mobile-links__item-link">German</a>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <a href="#" className="mobile-links__item-link">Russian</a>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <a href="#" className="mobile-links__item-link">Italian</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="pswp" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="pswp__bg"></div>
                <div className="pswp__scroll-wrap">
                    <div className="pswp__container">
                        <div className="pswp__item"></div>
                        <div className="pswp__item"></div>
                        <div className="pswp__item"></div>
                    </div>

                    <div className="pswp__ui pswp__ui--hidden">
                        <div className="pswp__top-bar">
                            <div className="pswp__counter"></div>
                            <button className="pswp__button pswp__button--close" title="Close (Esc)"></button>
                            <button className="pswp__button pswp__button&#45;&#45;share" title="Share"></button>
                            <button className="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
                            <button className="pswp__button pswp__button--zoom" title="Zoom in/out"></button>

                            <div className="pswp__preloader">
                                <div className="pswp__preloader__icn">
                                    <div className="pswp__preloader__cut">
                                        <div className="pswp__preloader__donut"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                            <div className="pswp__share-tooltip"></div>
                        </div>

                        <button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
                        <button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
                        <div className="pswp__caption">
                            <div className="pswp__caption__center"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal