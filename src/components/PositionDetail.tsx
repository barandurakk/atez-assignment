import React, { Fragment } from "react";

//styles
import "../scss/positionDetail.scss";

type SelectedItemProps = {
    selectedItemId: number
}

type positionObject = {
    id: number,
    title: string,
    isNew: boolean,
    isPublished: boolean,
    body: string
   
}

type PositionListProps = {list: positionObject[] }

type PositionDetailProps = SelectedItemProps & PositionListProps

const PositionDetail:React.FC<PositionDetailProps> = ({selectedItemId, list}:PositionDetailProps) => {
    return(
        <div className="positionDetail-container">
            {list&&
            list.map((item) => {
                if(item.id === selectedItemId){
                    return (
                        <Fragment key={item.id}>
                            {item.isPublished && <span>YAYINDA</span>}
                            <h1>{item.title}</h1>
                            <p>{item.body}</p>
                            <a>BAŞVUR</a>
                        </Fragment>
                    )          
                }else{
                    return null;
                }
            })}
        </div> 
    )
}

export default PositionDetail;