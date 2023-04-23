import React from 'react'
import Services from './services'
import ProjectComponent from './projectComponent'
import PartnerComponent from './PartnerComponent'

export default function LandingPage() {
    return (
        <>
            <section className="home flex align-center">
                <div className="circle"></div>
                <div className="circle3"></div>
                <div className="socialVertical">
                    <ul className="socialMediaVertical">
                        <li><a href="">
                            <ion-icon name="logo-facebook"></ion-icon>facebook
                        </a></li>
                        <li><a href="">
                            <ion-icon name="logo-instagram"></ion-icon>instagram
                        </a></li>
                        <li><a href="">
                            <ion-icon name="logo-linkedin"></ion-icon>linkedin
                        </a></li>
                    </ul>
                </div>
                <div className="wrapper flex center align-center">
                    <div className="homeContent flex center align-center column">
                        <h1>
                            Creative & Technical
                        </h1>
                        <div className="textLoader">
                            <h2>think tech, choose us...</h2>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium atque cupiditate fuga
                            voluptatem nemo perferendis provident veritatis libero, eius alias. Inventore consectetur sunt nihil
                            beatae!</p>
                        <div className="button flex center align-center">
                            {/* style="--color:#75dab4" */}
                            <a href=""  ><span>see project</span><i></i></a>
                        </div>
                    </div>
                    <div className="homeImg">
                        <div className="elmnt element1" data-aos="slide-down">
                            <h1 className="num" data-val="350">000</h1>
                            <p>finish projects</p>
                        </div>
                        <div className="elmnt element2" data-aos="slide-left">
                            <h1 className="num" data-val="500">000</h1>
                            <p>customer</p>
                        </div>
                        <div className="circle2"></div>
                        <img src="images/img1.4-1024x683.png" alt="" />
                    </div>
                </div>

            </section>

            {/* <!-- home section ends here -->

    <!-- section for work starts here --> */}

            <section className="work flex center align-center">
                <div className="C1"></div>
                <div className="C2"></div>
                <div className="wrapper flex center align-center column">
                    <h1>how it <span>works</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, vel incidunt doloremque voluptate
                        expedita, aperiam quam reprehenderit qui consectetur minus animi ea, commodi nisi aspernatur laboriosam
                        non. Accusantium, repellendus. Molestias.</p>
                    <div className="cardHolder flex align-center">
                        <div className="card" data-aos="fade-right" data-aos-delay="150">
                            <div className="img">
                                <img src="Images/icon1.png" alt="" />
                            </div>
                            <span>contact us or come to our<br /> office</span>
                        </div>
                        <div className="card" data-aos="fade-right" data-aos-delay="30">
                            <div className="img">
                                <img src="images/icon2.png" alt="" />
                            </div>
                            <span>prepare what you needed for<br /> your business software</span>
                        </div>
                        <div className="card" data-aos="fade-right" data-aos-delay="10">
                            <div className="img">
                                <img src="images/icon3.png" alt="" />
                            </div>
                            <span>let us do our job to make your<br /> business more advance</span>

                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- section for about starts here --> */}
            <section className="about">
                <div className="wrapper flex center align-center">
                    <div className="textContent">
                        <h1>about <span>us</span></h1>
                        <h3>we do the designing, coding, developing & launching of the software.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque placeat, doloribus unde
                            consectetur quo labore ex in quibusdam magni nostrum alias hic vitae quisquam. Totam, qui id
                            delectus itaque aliquid incidunt ratione minus cum laudantium quae a? Suscipit, consequatur dolor?
                        </p>
                        <div className="banner" data-aos="slide-up">
                            <span className="rank">#1</span>
                            <span className="logo">
                                <p><span>V</span>ishma<span>T</span>ech</p>
                            </span>
                            <h4>best creative IT agency & solutions <span>since 2022</span></h4>
                        </div>
                    </div>
                    <div className="aboutImg">
                        <img src="Images/istockphoto-468784170-612x612.jpg" alt="" className="mainImg" />
                        <div className="ab-img">
                            <div className="aboutImg2">
                                <img src="Images/finding-peace-in-chaos-double-exposure-portrait-2JHKBX1.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Services />
            <ProjectComponent />
            <PartnerComponent />


        </>
    )
}
