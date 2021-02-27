import React from "react";

//styles
import "../scss/positionDetail.scss";

import {editSvg} from "../svg/editSvg";
import {saveIcon} from "../svg/saveIcon";

type PositionDetailProps = {
    selectedItem: {
        id: number, 
        title: string, 
        isNew: boolean, 
        isPublished: boolean,  
        applyCount: number, 
        startDate: string, 
        endDate: string, 
        publishedDayCount: number, 
        body:string
    }
}

const PositionDetail:React.FC<PositionDetailProps> = ({selectedItem}:PositionDetailProps) => {
    return(
        <div className="positionDetail-container">
            <div className="apply-wrapper">
                <label>Başvurular</label>
                <span>{selectedItem.applyCount}</span>
            </div>
            <div className="publish-wrapper">
                <div>
                    <label>Başlangıç Tarihi</label>
                    <span className="date-span">{selectedItem.startDate}</span>
                </div>
                <div>
                    <label>Bitiş Tarihi</label>
                    <span  className="date-span">{selectedItem.isPublished && editSvg}{selectedItem.endDate}</span>
                </div>
                <div>
                    <label>Yayında kalma süresi</label>
                    <span className={`day-span ${!selectedItem.isPublished && "red"}`}>{selectedItem.publishedDayCount} Gün</span>
                </div>
                <div>
                    <label>Yayın</label>
                    {selectedItem.isPublished ? 
                    (
                    <span className="open-span">AÇIK<div className="switch-circle"></div></span>
                    )
                    :
                    (
                    <span className="close-span"><div className="switch-circle"></div>KAPALI</span>
                    )}
                </div>
            </div>
            <button>{saveIcon}<span>Kaydet</span></button>
        </div>
    )
}

export default PositionDetail;