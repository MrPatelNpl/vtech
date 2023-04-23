import React from 'react'

export default function Footer() {
    return (
        <>
            <section className="footer">
                <div className="adbanner flex space-between align-center">
                    <div className="offer flex column align-center center" data-aos-offset="120" data-aos="fade-down" data-aos-duration="700"
                        data-aos-easing="ease-in-sine" >
                        <p>we provide great ideas to</p>
                        <h1>Grow your <span>Business</span></h1>
                        <p className="right">have an <span>idea</span> or <span>project</span>?</p>
                    </div>
                    <div className="contactus flex column center align-center" data-aos-offset="120" data-aos="fade-up" data-aos-duration="700"
                        data-aos-easing="ease-in-sine">
                        <h1>grab the <span>limited</span> offer</h1>
                        <div className="btn">
                            <a href="">contact us</a>
                            <i className="fa-solid fa-arrow-up-right-from-square"></i>

                        </div>
                    </div>
                </div>
                <div className="box-container">

                    <div className="box">
                        <h3> About Us </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sequi expedita doloremque
                            quia praesentium repellat deleniti aspernatur dolorum aliquid labore. Aperiam dolores tenetur
                            consequatur nulla hic animi sequi sapiente, vel, mollitia, reprehenderit ipsum. Labore eos, repellat
                            amet molestiae quos aperiam animi expedita a alias iusto nesciunt culpa in ea dicta?</p>
                        <div className="share">
                            <a href="#" className="fab fa-facebook-f"></a>
                            <a href="#" className="fab fa-twitter"></a>
                            <a href="#" className="fab fa-instagram"></a>
                            <a href="#" className="fab fa-linkedin"></a>
                        </div>
                    </div>

                    <div className="box">
                        <h3>contact info</h3>
                        <a href="#" className="links"> <i className="fas fa-phone"></i> +977 9815282289 </a>
                        <a href="#" className="links"> <i className="fas fa-phone"></i> +977 9744368812 </a>
                        <a href="#" className="links"> <i className="fas fa-envelope"></i> rajanshakya39@gmail.com </a>
                        <a href="#" className="links"> <i className="fas fa-map-marker-alt"></i> Birgunj, Nepal - 44300 </a>
                    </div>

                    <div className="box">
                        <h3>quick links</h3>
                        <a href="#" className="links"> <i className="fas fa-arrow-right"></i> home </a>
                        <a href="#" className="links"> <i className="fas fa-arrow-right"></i> projects </a>
                        <a href="#" className="links"> <i className="fas fa-arrow-right"></i> services </a>
                        <a href="#" className="links"> <i className="fas fa-arrow-right"></i> team members </a>
                        <a href="#" className="links"> <i className="fas fa-arrow-right"></i> features </a>
                        <a href="#" className="links"> <i className="fas fa-arrow-right"></i> blogs </a>
                    </div>

                    <div className="box">
                        <h3>our services</h3>
                        <a href="" className="company-links">web development</a>
                        <a href="" className="company-links">strategy & research</a>
                        <a href="" className="company-links">digital marketing</a>
                        <a href="" className="company-links">web solution</a>
                        <a href="" className="company-links">app design</a>
                        <a href="" className="company-links">app development</a>
                    </div>

                </div>

                <div className="credit"> Designed & Developed by <span> Vishma Group </span>| &copy;Copyright 2022. All Rights
                    Reserved </div>

            </section>

        </>
    )
}
