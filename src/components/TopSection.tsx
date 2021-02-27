import React, {useEffect} from "react";
import {useDispatch, useSelector } from 'react-redux'
import {RootState} from "../reducers/index";

//components
import Explore from "./Explore";
import News from "./News";

//actions
import {fetchTopData} from "../actions/index";

//style
import "../scss/topSection.scss";

//assets
import {vr, success} from "../img/index";
import PathSvg from "../svg/top-path.svg";

const TopSection: React.FC = () => {

    const dispatch = useDispatch();
    const topData = useSelector((state: RootState)=> state.data.topData);

    useEffect(() => {
        
        dispatch(fetchTopData());
        
    }, [dispatch]);

    return(
        <section id="top-section" className="sections">
            {topData &&
            <div className="top-wrapper">
                <div className="container">
                    <Explore explore={topData.explore}/>
                    <News news={topData.news}/>
                </div>
                    <img src={success} alt="success" className="success-img"/>
                    <img src={vr} alt="success" className="vr-img"/>
                    <img src={PathSvg} alt="path" className="path-svg" />                            
            </div>
            }      
        </section>
    )

}

export default TopSection;