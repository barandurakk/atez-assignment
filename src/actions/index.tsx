import {
  FETCH_TOP_DATA, 
    SET_DB_ERROR,
    CLEAR_DB_ERROR,
    FetchDataAction,
} from "./types";

type DispatchAssets = (arg: FetchDataAction) => (FetchDataAction);

export const fetchTopData = () => (dispatch: DispatchAssets) => {
    
        //database query
        //bu örnekte tüm dataları çekiyorum fakat gerçek bir projede data, sorgular ile kısımlara ayrılır
        fetch("./DB.json"
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
            console.log("FetchTopActionData: ", data);
          dispatch({type: FETCH_TOP_DATA, payload: data});
          dispatch({type: CLEAR_DB_ERROR});
        }).catch(err => {
            console.error(err);
            dispatch({type: SET_DB_ERROR, payload: err.message});
        })      
} 