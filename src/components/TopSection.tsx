import React from "react";
import { useSelector } from 'react-redux'
import {RootState} from "../reducers/index";

//components
import Explore from "./Explore";
import News from "./News";

//style
import "../scss/topSection.scss";

//assets
import {vr, success} from "../img/index";
import PathSvg from "../svg/top-path.svg";
const TopSection: React.FC = () => {
    
    const topData = useSelector((state: RootState)=> state.data.topSection);
    const loading = useSelector((state: RootState)=> state.ui.loading);

    return(
        <section id="top-section" className="sections">
            {!loading ?
            topData &&
            <div className="top-wrapper">
                
                    <Explore explore={topData.explore}/>
                    <News news={topData.news}/>
                
                    <img src={success} alt="success" className="success-img"/>
                    <img src={vr} alt="success" className="vr-img"/>
                    <img src={PathSvg} alt="path" className="path-svg" />                            
            </div>
            :
            <div className="container">Loading...</div>
            }      
        </section>
    )

}

export default TopSection;