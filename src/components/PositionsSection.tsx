import React, {useEffect} from "react";
import {useDispatch, useSelector } from 'react-redux'
import {RootState} from "../reducers/index";
//actions
import {fetchPositionsData} from "../actions/index";
//components
import PositionsList from "./PositionsList"
import PositionDetail from "./PositionDetail"
//image
import LaunchPng from "../img/launch.png";

//styles
import "../scss/positionsSection.scss";


const PositionsSection: React.FC = () => {

    const dispatch = useDispatch();
    const positionList = useSelector((state: RootState)=> state.data.positionList);
    const selectedItem = useSelector((state: RootState)=> state.ui.selectedPosition);

    useEffect(() => {
        
        dispatch(fetchPositionsData());
        
    }, [dispatch])

    return(
        <section id="positions-section">
           <div className="positions-container container">   
            <div className="positionsList-container">
                <h1>Açık Pozisyonlar</h1>
                <PositionsList list={positionList} isPanel={false}/>
            </div>           
                <PositionDetail selectedItemId={selectedItem} list={positionList} />
                       
           </div>
           <div  className="positionsImage-container">
                <img src={LaunchPng} alt="positionImg"/>  
           </div>     
        </section>
    )

}

export default PositionsSection;