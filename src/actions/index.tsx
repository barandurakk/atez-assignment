import {
  FETCH_TOP_DATA, 
  FETCH_ABOUT_DATA,
  FETCH_POSITIONS_DATA,
  SET_DB_ERROR,
  CLEAR_DB_ERROR,
  FetchDataAction,
} from "./types";

type DispatchAssets = (arg: FetchDataAction) => (FetchDataAction);


//DATA ACTIONS
export const fetchTopData = () => (dispatch: DispatchAssets) => {
    
        //database query
        //bu örnekte tüm dataları çekiyorum fakat gerçek bir projede sadece top section sorgusu yapılır
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
          dispatch({type: FETCH_TOP_DATA, payload: data});
          dispatch({type: CLEAR_DB_ERROR});
        }).catch(err => {
            console.error(err);
            dispatch({type: SET_DB_ERROR, payload: err.message});
        })      
} 

export const fetchAboutData = () => (dispatch: DispatchAssets) => {
    
  //database query
  //bu örnekte tüm dataları çekiyorum fakat gerçek bir projede sadece about section sorgusu yapılır
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
    dispatch({type: FETCH_ABOUT_DATA, payload: data});
    dispatch({type: CLEAR_DB_ERROR});
  }).catch(err => {
      console.error(err);
      dispatch({type: SET_DB_ERROR, payload: err.message});
  })      
} 

export const fetchPositionsData = () => (dispatch: DispatchAssets) => {
    
  //database query
  //bu örnekte tüm dataları çekiyorum fakat gerçek bir projede sadece about section sorgusu yapılır
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
    dispatch({type: FETCH_POSITIONS_DATA, payload: data});
    dispatch({type: CLEAR_DB_ERROR});
  }).catch(err => {
      console.error(err);
      dispatch({type: SET_DB_ERROR, payload: err.message});
  })      
} 

