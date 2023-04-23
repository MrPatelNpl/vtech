

const Navbar = () => {
    return (<>

        <nav className="navigation flex align-center">
            <div className="logo flex center align-center">
                <p><span>V</span>ishma<span>T</span>ech</p>
            </div>
            <ul className="navlinks flex center align-center">
                <span className="logo">
                    <p><span>V</span>ishma<span>T</span>ech</p>
                </span>
                <li><a href="">home</a></li>
                <li><a href="">about us</a></li>
                <li className="has-child"><a href="">service</a>
                    <ion-icon name="arrow-down"></ion-icon>
                    <ul className="sub-menu">
                        <li><a href="">service</a></li>
                        <li><a href="">service details</a></li>
                    </ul>
                </li>
                <li className="has-child"><a href="">project</a>
                    <ion-icon name="arrow-down"></ion-icon>
                    <ul className="sub-menu">
                        <li><a href="">project</a></li>
                        <li><a href="">project details</a></li>
                    </ul>
                </li>
                <li className="has-child"><a href="">blog</a>
                    <ion-icon name="arrow-down"></ion-icon>
                    <ul className="sub-menu">
                        <li><a href="">Blog</a></li>
                        <li><a href="">Blog standard</a></li>
                        <li><a href="">Blog details</a></li>
                    </ul>
                </li>
                <li className="has-child"><a href="">pages</a>
                    <ion-icon name="arrow-down"></ion-icon>
                    <ul className="sub-menu">
                        <li><a href="">team</a></li>
                        <li><a href="">FAQs</a></li>
                    </ul>
                </li>
            </ul>
            <div className="right-nav flex center align-center">
                <div className="contactBtn flex center align-center">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <a href="">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Contact Us
                    </a>
                </div>
                <div className="menuBtn flex center align-center">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

        </nav>
    </>)
}

export default Navbar;