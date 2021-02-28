import {
    SELECT_POSITION,
    SET_INITIAL_POSITION_ITEM,
    SET_UI_LOADING,
    UNSET_UI_LOADING,
    } from "../actions/types";

const initialState:any = {
    selectedPosition: {},
    loading: true  
} 

const uiReducer = (state = initialState, action:any) => {

    switch (action.type) {

        case SET_INITIAL_POSITION_ITEM:

        return {
          ...state,
          selectedPosition: action.payload[0] ? action.payload[0] : {}
        }

        case SELECT_POSITION:
            
         //select position
          return {
            ...state,
            selectedPosition: action.payload
          };

        case SET_UI_LOADING:
          return{
            ...state,
            loading:true
          }

          case UNSET_UI_LOADING:
          return{
            ...state,
            loading:false
          }
    
        default:
          return state;
      }
}

export default uiReducer;