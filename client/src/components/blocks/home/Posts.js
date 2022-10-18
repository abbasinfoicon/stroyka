import React from 'react'

const Posts = () => {
    return (
        <div className="block block-posts" data-layout="list" data-mobile-columns="1">
            <div className="container">
                <div className="block-header">
                    <h3 className="block-header__title">Latest News</h3>
                    <div className="block-header__divider"></div>
                    <div className="block-header__arrows-list"><button
                        className="block-header__arrow block-header__arrow--left" type="button"><svg width="7px"
                            height="11px">
                            <use xlinkHref="assets/images/sprite.svg#arrow-rounded-left-7x11"></use>
                        </svg></button> <button className="block-header__arrow block-header__arrow--right"
                            type="button"><svg width="7px" height="11px">
                                <use xlinkHref="assets/images/sprite.svg#arrow-rounded-right-7x11"></use>
                            </svg></button></div>
                </div>
                <div className="block-posts__slider">
                    <div className="owl-carousel">
                        <div className="post-card">
                            <div className="post-card__image"><a href="#"><img src="assets/images/posts/post-1.jpg" alt="" /></a>
                            </div>
                            <div className="post-card__info">
                                <div className="post-card__category"><a href="#">Special Offers</a></div>
                                <div className="post-card__name"><a href="#">Philosophy That Addresses Topics Such As
                                    Goodness</a></div>
                                <div className="post-card__date">October 19, 2019</div>
                                <div className="post-card__content">In one general sense, philosophy is associated with
                                    wisdom, intellectual culture and a search for knowledge. In that sense, all
                                    cultures...</div>
                                <div className="post-card__read-more"><a href="#" className="btn btn-secondary btn-sm">Read
                                    More</a></div>
                            </div>
                        </div>
                        <div className="post-card">
                            <div className="post-card__image"><a href="#"><img src="assets/images/posts/post-2.jpg" alt="" /></a>
                            </div>
                            <div className="post-card__info">
                                <div className="post-card__category"><a href="#">Latest News</a></div>
                                <div className="post-card__name"><a href="#">Logic Is The Study Of Reasoning And
                                    Argument Part 2</a></div>
                                <div className="post-card__date">September 5, 2019</div>
                                <div className="post-card__content">In one general sense, philosophy is associated with
                                    wisdom, intellectual culture and a search for knowledge. In that sense, all
                                    cultures...</div>
                                <div className="post-card__read-more"><a href="#" className="btn btn-secondary btn-sm">Read
                                    More</a></div>
                            </div>
                        </div>
                        <div className="post-card">
                            <div className="post-card__image"><a href="#"><img src="assets/images/posts/post-3.jpg" alt="" /></a>
                            </div>
                            <div className="post-card__info">
                                <div className="post-card__category"><a href="#">New Arrivals</a></div>
                                <div className="post-card__name"><a href="#">Some Philosophers Specialize In One Or More
                                    Historical Periods</a></div>
                                <div className="post-card__date">August 12, 2019</div>
                                <div className="post-card__content">In one general sense, philosophy is associated with
                                    wisdom, intellectual culture and a search for knowledge. In that sense, all
                                    cultures...</div>
                                <div className="post-card__read-more"><a href="#" className="btn btn-secondary btn-sm">Read
                                    More</a></div>
                            </div>
                        </div>
                        <div className="post-card">
                            <div className="post-card__image"><a href="#"><img src="assets/images/posts/post-4.jpg" alt="" /></a>
                            </div>
                            <div className="post-card__info">
                                <div className="post-card__category"><a href="#">Special Offers</a></div>
                                <div className="post-card__name"><a href="#">A Variety Of Other Academic And
                                    Non-Academic Approaches Have Been Explored</a></div>
                                <div className="post-card__date">Jule 30, 2019</div>
                                <div className="post-card__content">In one general sense, philosophy is associated with
                                    wisdom, intellectual culture and a search for knowledge. In that sense, all
                                    cultures...</div>
                                <div className="post-card__read-more"><a href="#" className="btn btn-secondary btn-sm">Read
                                    More</a></div>
                            </div>
                        </div>
                        <div className="post-card">
                            <div className="post-card__image"><a href="#"><img src="assets/images/posts/post-5.jpg" alt="" /></a>
                            </div>
                            <div className="post-card__info">
                                <div className="post-card__category"><a href="#">New Arrivals</a></div>
                                <div className="post-card__name"><a href="#">Germany Was The First Country To
                                    Professionalize Philosophy</a></div>
                                <div className="post-card__date">June 12, 2019</div>
                                <div className="post-card__content">In one general sense, philosophy is associated with
                                    wisdom, intellectual culture and a search for knowledge. In that sense, all
                                    cultures...</div>
                                <div className="post-card__read-more"><a href="#" className="btn btn-secondary btn-sm">Read
                                    More</a></div>
                            </div>
                        </div>
                        <div className="post-card">
                            <div className="post-card__image"><a href="#"><img src="assets/images/posts/post-6.jpg" alt="" /></a>
                            </div>
                            <div className="post-card__info">
                                <div className="post-card__category"><a href="#">Special Offers</a></div>
                                <div className="post-card__name"><a href="#">Logic Is The Study Of Reasoning And
                                    Argument Part 1</a></div>
                                <div className="post-card__date">May 21, 2019</div>
                                <div className="post-card__content">In one general sense, philosophy is associated with
                                    wisdom, intellectual culture and a search for knowledge. In that sense, all
                                    cultures...</div>
                                <div className="post-card__read-more"><a href="#" className="btn btn-secondary btn-sm">Read
                                    More</a></div>
                            </div>
                        </div>
                        <div className="post-card">
                            <div className="post-card__image"><a href="#"><img src="assets/images/posts/post-7.jpg" alt="" /></a>
                            </div>
                            <div className="post-card__info">
                                <div className="post-card__category"><a href="#">Special Offers</a></div>
                                <div className="post-card__name"><a href="#">Many Inquiries Outside Of Academia Are
                                    Philosophical In The Broad Sense</a></div>
                                <div className="post-card__date">April 3, 2019</div>
                                <div className="post-card__content">In one general sense, philosophy is associated with
                                    wisdom, intellectual culture and a search for knowledge. In that sense, all
                                    cultures...</div>
                                <div className="post-card__read-more"><a href="#" className="btn btn-secondary btn-sm">Read
                                    More</a></div>
                            </div>
                        </div>
                        <div className="post-card">
                            <div className="post-card__image"><a href="#"><img src="assets/images/posts/post-8.jpg" alt="" /></a>
                            </div>
                            <div className="post-card__info">
                                <div className="post-card__category"><a href="#">Latest News</a></div>
                                <div className="post-card__name"><a href="#">An Advantage Of Digital Circuits When
                                    Compared To Analog Circuits</a></div>
                                <div className="post-card__date">Mart 29, 2019</div>
                                <div className="post-card__content">In one general sense, philosophy is associated with
                                    wisdom, intellectual culture and a search for knowledge. In that sense, all
                                    cultures...</div>
                                <div className="post-card__read-more"><a href="#" className="btn btn-secondary btn-sm">Read
                                    More</a></div>
                            </div>
                        </div>
                        <div className="post-card">
                            <div className="post-card__image"><a href="#"><img src="assets/images/posts/post-9.jpg" alt="" /></a>
                            </div>
                            <div className="post-card__info">
                                <div className="post-card__category"><a href="#">New Arrivals</a></div>
                                <div className="post-card__name"><a href="#">A Digital Circuit Is Typically Constructed
                                    From Small Electronic Circuits</a></div>
                                <div className="post-card__date">February 10, 2019</div>
                                <div className="post-card__content">In one general sense, philosophy is associated with
                                    wisdom, intellectual culture and a search for knowledge. In that sense, all
                                    cultures...</div>
                                <div className="post-card__read-more"><a href="#" className="btn btn-secondary btn-sm">Read
                                    More</a></div>
                            </div>
                        </div>
                        <div className="post-card">
                            <div className="post-card__image"><a href="#"><img src="assets/images/posts/post-10.jpg"
                                alt="" /></a></div>
                            <div className="post-card__info">
                                <div className="post-card__category"><a href="#">Special Offers</a></div>
                                <div className="post-card__name"><a href="#">Engineers Use Many Methods To Minimize
                                    Logic Functions</a></div>
                                <div className="post-card__date">January 1, 2019</div>
                                <div className="post-card__content">In one general sense, philosophy is associated with
                                    wisdom, intellectual culture and a search for knowledge. In that sense, all
                                    cultures...</div>
                                <div className="post-card__read-more"><a href="#" className="btn btn-secondary btn-sm">Read
                                    More</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Posts