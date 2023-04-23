import React from 'react'

export default function ProjectComponent() {
    return (
        <>
            <section className="projects services flex center align-center column">
                <div className="wrapper">
                    <h1 data-aos="fade-right" data-aos-duration="500" data-aos-easing="ease-in-sine">our <span>projects</span>
                    </h1>
                    <p data-aos="fade-left" data-aos-duration="500" data-aos-easing="ease-in-sine">Lorem ipsum dolor sit, amet
                        consectetur adipisicing elit. Ratione suscipit commodi facere at cum quidem
                        maxime dolor. Ducimus, dolores vitae impedit temporibus facilis eos, tempora odio, nostrum error minima
                        obcaecati.</p>
                    <div className="categoryBtn flex align-center center" data-aos="slide-up" data-aos-duration="800"
                        data-aos-easing="ease-in-sine">
                        <span>All</span>
                        <span>UI/UX</span>
                        <span>Web Design</span>
                        <span>Developing</span>
                        <span>Graphic Design</span>
                    </div>
                </div>
                <div className="cardHolder">
                    <div className="card">
                        <div className="img">
                            <a href=""><img src="/images/project-1.jpg" alt="" /></a>
                        </div>
                        <div className="prText">
                            <h5>software</h5>
                            <h3>desktop mockup</h3>
                            <div className="readBtn">
                                <a href="">view details</a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="img">
                            <a href=""><img src="/images/project-2.jpg" alt="" /></a>
                        </div>
                        <div className="prText">
                            <h5>template</h5>
                            <h3>creative agency</h3>
                            <div className="readBtn">
                                <a href="">view details</a>
                            </div>

                        </div>
                    </div>
                    <div className="card">
                        <div className="img">
                            <a href=""><img src="/images/project-3.jpg" alt="" /></a>
                        </div>
                        <div className="prText">
                            <h5>app</h5>
                            <h3>mobile crypto wallet</h3>
                            <div className="readBtn">
                                <a href="">view details</a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="img">
                            <a href=""><img src="/images/project-4.jpg" alt="" /></a>
                        </div>
                        <div className="prText">
                            <h5>UI kit</h5>
                            <h3>e-shop ecommerce</h3>
                            <div className="readBtn">
                                <a href="">view details</a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="img">
                            <a href=""><img src="/images/project-5.jpg" alt="" /></a>
                        </div>
                        <div className="prText">
                            <h5>graphic</h5>
                            <h3>art deco cocktails</h3>
                            <div className="readBtn">
                                <a href="">view details</a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="img">
                            <a href=""><img src="/images/project-6.jpg" alt="" /></a>
                        </div>
                        <div className="prText">
                            <h5>3D design</h5>
                            <h3>low ploy base mesh</h3>
                            <div className="readBtn">
                                <a href="">view details</a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
