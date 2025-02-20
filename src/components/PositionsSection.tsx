import React from "react";
import { useSelector } from 'react-redux'
import {RootState} from "../reducers/index";
//components
import PositionsList from "./PositionsList"
import PositionContent from "./PositionContent"
//image
import LaunchPng from "../img/launch.png";

//styles
import "../scss/positionsSection.scss";


const PositionsSection: React.FC = () => {

    const positionList = useSelector((state: RootState)=> state.data.openPositions);
    const selectedItem = useSelector((state: RootState)=> state.ui.selectedPosition);
    const loading = useSelector((state: RootState)=> state.ui.loading);

    return(
        <section id="positions-section">
            {!loading ? 
            (
                <>
                <div className="positions-container container">   
                    {positionList.length >0 ? (
                            <>
                        <div style={{alignSelf:"flex-start"}}>
                            <h1 className="listHeader">Açık Pozisyonlar</h1>
                            <PositionsList list={positionList} isPanel={false}/>  
                        </div>     
                        <PositionContent selectedItem={selectedItem} isPanel={false} />  
                        </>
                    ):(
                        <div className="no-content">
                            Şu anda açık bir pozisyon bulunmamaktadır.
                        </div>
                    )} 
                </div>

                <div  className="positionsImage-container">
                    <img src={LaunchPng} alt="positionImg"/>  
                </div> 
                
                </>

            ):(
                <div className="container">Loading</div>
            )}
               
        </section>
    )

}

export default PositionsSection;