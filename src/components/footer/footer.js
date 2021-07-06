import React from "react";
import InstaImg from "../../assets/images/instagram.svg";
import FacebookImg from "../../assets/images/facebook.svg";

import "./footer.css";

const Footer = () => {

    return (
        <div className="footer">
            <div className="copyright">
                © 2021 Eco-shop
            </div>
            <div className="social-network-icon">
                <a href="#"><img src={FacebookImg} alt="facebook"/></a>
                <a href="#"><img src={InstaImg} alt="instagram"/></a>
            </div>
            <div className="scroll-up__button">
                <button onClick={() => window.scrollTo({ top: 0})}>До початку сторінки</button>
            </div>
        </div>
    )
}

export default Footer;