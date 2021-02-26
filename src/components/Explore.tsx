import React from "react";

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
                <a href="#about-section">{explore.exploreButtonText}</a>
            </div>
            }
           

        </div>
    )

}

export default Explore;