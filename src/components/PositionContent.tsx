import React from "react";

//styles
import "../scss/positionContent.scss";

type SelectedItemProps = {
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

type isPanel = {isPanel: boolean};

type PositionContentProps = SelectedItemProps & isPanel

const PositionContent:React.FC<PositionContentProps> = ({selectedItem, isPanel}:PositionContentProps) => {
    return(
        <div className= {` positionContent-container ${isPanel ? "panel" : "landing" }`} >
            {!isPanel && selectedItem.isPublished ? 
            (
                <>
                {selectedItem.isPublished && <span>YAYINDA</span>}
                <h1>{selectedItem.title}</h1>
                <p>{selectedItem.body}</p>
                <a>BAŞVUR</a>  
                </>
            )
            :
            (
                <>
                    <input 
                        className="positionTitle-input"
                        type="text"
                        value={selectedItem.title}
                    />
                    <textarea  
                        className="positionBody-input"
                        rows={30}
                        value={selectedItem.body}
                        
                    />
                </>
            )

            }           
                                
        </div> 
    )
}

export default PositionContent;