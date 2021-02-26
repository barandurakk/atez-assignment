import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { SELECT_POSITION } from "../actions/types";
import {RootState} from "../reducers/index";

//styles
import "../scss/positionsList.scss";

type positionObject = {
        id: number,
        title: string,
        isNew: boolean,
        isPublished: boolean,
        body: string
       
};

type PositionList = {list: positionObject[] };

type isPanel = {isPanel: boolean};

type PositionListProps = PositionList & isPanel;


const PositionsList:React.FC<PositionListProps> = ({list, isPanel}:PositionListProps) => {
    const dispatch = useDispatch()
    const selectedItem = useSelector((state: RootState)=> state.ui.selectedPosition);
   
    return(
        <div className={`positionsList-wrapper ${isPanel ? "panel" : "landing"}`}>   
            {list &&
            list.map((positionItem) => {
                if(isPanel){ //aynı componenti panelde de kullanacağım için bu props'u kullanıyorum. Normal şartlarda tabiki bu şekilde admin kontrolü yapılmaz
                    return(
                        <div 
                        key={positionItem.id}
                        >
                            {positionItem.title}
                        </div>   
                    )          
                }else{
                    if(positionItem.isPublished){
                        return(
                            <div 
                            onClick={()=>{
                                dispatch({type: SELECT_POSITION, payload: positionItem.id});
                            }}
                            key={positionItem.id}
                            className={`positionItem ${selectedItem === positionItem.id ? "active" : "" }`}
                            >
                                <h3>{positionItem.title}</h3>
                                {positionItem.isNew && <span>Yeni</span>}
                                 
                            </div>   
                        )                  
                    }else {
                        return null;
                    }   
                }
                                  
            })}
        </div>
    )
}

export default PositionsList;