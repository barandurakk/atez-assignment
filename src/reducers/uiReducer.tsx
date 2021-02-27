import {
    SELECT_POSITION,
    SET_INITIAL_POSITION_ITEM
    } from "../actions/types";

const initialState:any = {
    selectedPosition: {}  
} 

const uiReducer = (state = initialState, action:any) => {

    switch (action.type) {

        case SET_INITIAL_POSITION_ITEM:

        return {
          selectedPosition: action.payload ? action.payload[0] : {}
        }

        case SELECT_POSITION:
            
         //select position
          return {
            selectedPosition: action.payload
          };

    
        default:
          return state;
      }
}

export default uiReducer;