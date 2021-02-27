import React from "react";
import { HashLink } from 'react-router-hash-link';

//styles
import "../scss/explore.scss";

interface ExploreProps {
    explore:{
        exploreButtonText: string,
        exploreText: string,
        mainHeader: string
    }
    
}

const Explore: React.FC<ExploreProps> = ({explore}: ExploreProps) => {

    return(
        <div id="explore-container">
            {explore 
            && 
            <div>
                <h1>{explore.mainHeader.slice(0,23)} <br/> {explore.mainHeader.slice(23,explore.mainHeader.length)}</h1>
                <h3>{explore.exploreText}</h3>
                <HashLink to="#about-section" smooth={true}>{explore.exploreButtonText}</HashLink>
            </div>
            }
           

        </div>
    )

}

export default Explore;