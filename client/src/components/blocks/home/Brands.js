import React from 'react'
import OwlCarousel from 'react-owl-carousel';

const options = {
    nav: false,
    dots: false,
    loop: true,
    responsive: {
        1200: { items: 6 },
        992: { items: 5 },
        768: { items: 4 },
        576: { items: 3 },
        0: { items: 2 }
    }
}

const Brands = () => {
    return (
        <div className="block block-brands">
            <div className="container">
                <div className="block-brands__slider">
                    <OwlCarousel {...options}>
                        <div className="block-brands__item"><a href="#"><img src="assets/images/logos/logo-1.png" alt="" /></a>
                        </div>
                        <div className="block-brands__item"><a href="#"><img src="assets/images/logos/logo-2.png" alt="" /></a>
                        </div>
                        <div className="block-brands__item"><a href="#"><img src="assets/images/logos/logo-3.png" alt="" /></a>
                        </div>
                        <div className="block-brands__item"><a href="#"><img src="assets/images/logos/logo-4.png" alt="" /></a>
                        </div>
                        <div className="block-brands__item"><a href="#"><img src="assets/images/logos/logo-5.png" alt="" /></a>
                        </div>
                        <div className="block-brands__item"><a href="#"><img src="assets/images/logos/logo-6.png" alt="" /></a>
                        </div>
                        <div className="block-brands__item"><a href="#"><img src="assets/images/logos/logo-7.png" alt="" /></a>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </div>
    )
}

export default Brands