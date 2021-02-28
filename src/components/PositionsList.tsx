import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { SELECT_POSITION } from "../actions/types";
import {RootState} from "../reducers/index";
//svg
import {actionSVG} from "../svg/actionArrow";

//styles
import "../scss/positionsList.scss";

type positionObject = {
    id: number, 
    title: string, 
    isNew: boolean, 
    isPublished: boolean,  
    applyCount: number, 
    startDate: string, 
    endDate: string, 
    publishedDayCount: number, 
    body:string   
};
type PositionList = {list: positionObject[] };
type isPanel = {isPanel: boolean};
type PositionListProps = PositionList & isPanel;

const handleSelect  = (dispatch:any, item:any) => {
    dispatch({type: SELECT_POSITION, payload: item});
}

const PositionsList:React.FC<PositionListProps> = ({list, isPanel}:PositionListProps) => {
    const dispatch = useDispatch()
    const selectedItem = useSelector((state: RootState)=> state.ui.selectedPosition);
   
    return(
        <div className={`positionsList-container ${isPanel ? "panel" : "landing"}`}>
            
             <div className="positionsList-wrapper">  
                    {list &&
                        list.map((positionItem) => {
                            if(!isPanel){
                                if(positionItem.isPublished){
                                    return(
                                        <div 
                                        onClick={()=>{
                                            handleSelect(dispatch, positionItem);
                                        }}
                                        key={positionItem.id}
                                        className={`positionItem ${selectedItem.id === positionItem.id ? "active" : "" }`}
                                        >
                                            <h3>{positionItem.title}</h3>
                                            {positionItem.isNew && <span>Yeni</span>}
                                            
                                        </div>   
                                    )                  
                                }else {
                                    return null;
                                }          
                            }else{
                                return(
                                    <div 
                                    onClick={()=>{
                                        handleSelect(dispatch, positionItem);
                                    }}
                                    key={positionItem.id}
                                    className={`positionItem ${selectedItem.id === positionItem.id ? "active" : "" }`}
                                    >
                                        <h3 className={`${!positionItem.isPublished ? "notPublished" : "" }`}>
                                            {positionItem.title}
                                        </h3>
                                        {actionSVG}
                                    </div>   
                                )            
                            }
                                   
                        })
                    }
                </div>
        </div> 
    )
}

export default PositionsList;