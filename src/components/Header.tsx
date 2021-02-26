import {Link} from "react-router-dom";

//style
import "../scss/header.scss";

const Header = () => {

    return(
        <div id="header">
            <div id="header-content">
                <div className="branding-wrapper">
                    <img src="#" alt="Atez Logo" />
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