import React, {useEffect} from "react";
import {useDispatch, useSelector } from 'react-redux'
import {RootState} from "../reducers/index";
//actions
import {fetchPositionsData} from "../actions/index";

import PositionsList from "../components/PositionsList";
import PositionContent from "../components/PositionContent";
import PositionDetail from "../components/PositionDetail";

import "../scss/panel.scss";

//svg
import {addCircle} from "../svg/addCircle";

const Panel: React.FC = () => {

    const dispatch = useDispatch();
    const positionList = useSelector((state: RootState)=> state.data.positionList);
    const selectedItem = useSelector((state: RootState)=> state.ui.selectedPosition);

    useEffect(() => {
        
        dispatch(fetchPositionsData()); //bütün ilanları çek
        
    }, [dispatch])

    return(
        <div id="content">
            <div className="container panel-container">

                <div className="panel-left-container">
                    <div className="panel-left-up">
                        <span>İlanlar</span>
                        <a>{addCircle}İlan Oluştur</a>
                        <PositionsList isPanel={true} list={positionList} />
                    </div>
                    <div className="panel-left-down">
                        <a>E-posta Abone</a>
                    </div>
                </div>

                <div className="panel-middle-container">
                   <PositionContent isPanel={true} selectedItem={selectedItem} />
                </div>

                <div className="panel-right-container">
                    <PositionDetail selectedItem={selectedItem} />
                </div>
            </div>
        </div>
    )

}

export default Panel;