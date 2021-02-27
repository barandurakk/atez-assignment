import React,{useEffect} from "react";
import {useDispatch } from 'react-redux'
import {fetchLandingData} from "../actions/index";

//components
import TopSection from "../components/TopSection";
import AboutSection from "../components/AboutSection";
import PositionsSection from "../components/PositionsSection";

const Landing: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        
        dispatch(fetchLandingData());
        
    }, [dispatch]);

    return(
        <div id="content">
            <TopSection/>
            <AboutSection/>
            <PositionsSection/>
        </div>
    )

}

export default Landing;