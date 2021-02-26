import React from "react"
import {Link, useLocation} from "react-router-dom";
import LogoSvg from "../svg/Logo.svg";

//style
import "../scss/header.scss";


const Header: React.FC= () => {
const {pathname} = useLocation();  

    return(
        //eğer paneldeyse header'ın stilini değiştiriyorum.
        <div id="header" className={`${pathname === "/panel" && "panel" }`}>
            <div id="header-content">
                <div className="branding-wrapper">
                    <img src={LogoSvg} alt="Atez Logo" />
                </div>       
                    <div className="navMenu-wrapper">
                    <ul>
                        <li><Link to="/panel">YÖNETİCİ PANELİ</Link></li>
                        <li>BİZ KİMİZ?</li>
                        <li>AÇIK POZİSYONLAR</li>
                    </ul>
                </div>
                            
            </div>
        </div>
    )

}

export default Header;