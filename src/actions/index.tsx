import {
  FETCH_LANDING_DATA,
  SET_UI_LOADING,
  UNSET_UI_LOADING,
  SET_INITIAL_POSITION_ITEM,
  FetchDataAction,
} from "./types";

type DispatchAssets = (arg: FetchDataAction) => (FetchDataAction);


//DATA ACTIONS
export const fetchLandingData = () => (dispatch: DispatchAssets) => {
    
        //database query
        dispatch({type: SET_UI_LOADING});
        fetch("/DB.json"
        ,{
          headers:{
            "Content-Type":"application/json",
            "Accept": "application/json"
          }
        }
        ).then((response) => {        
          return response.json();
        })
        .then((data) => {
          dispatch({type: FETCH_LANDING_DATA, payload: data});
          dispatch({type: SET_INITIAL_POSITION_ITEM, payload: data.openPositions});
          dispatch({type: UNSET_UI_LOADING});
        }).catch(err => {
            console.error(err);
        })      
}

