import React from 'react'

export default function PartnerComponent() {
    return (
        <>
            <section class="partner flex center align-center">
                <h1>our <span>Partners</span></h1>
                <div class="swiper partner-slider">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide box">
                            <img src="images/partner-1.png" alt="" />
                        </div>
                        <div class="swiper-slide box">
                            <img src="images/partner-2.png" alt="" />
                        </div>
                        <div class="swiper-slide box">
                            <img src="images/partner-3.png" alt="" />
                        </div>
                        <div class="swiper-slide box">
                            <img src="images/partner-5.png" alt="" />
                        </div>
                        <div class="swiper-slide box">
                            <img src="images/partner-3.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
