import React from "react";
import {Link} from "react-scroll";

import "./header.css";

const Header = () => {

    return (
        <div className="header">
            <div className="header-logo">
                <img src="https://static.tildacdn.com/tild3466-3831-4339-a532-343531316332/logo_whale.svg" alt="logo"/>
            </div>
            <div className="header-nav">
                <ul>
                    <li><Link to="cargo">Товари</Link></li>
                    <li><Link to="sets">Набори</Link></li>
                    <li><Link to="order">Як замовити?</Link></li>
                    <li><Link to="instagram">Ми в Instagram</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;