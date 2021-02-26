import {
    SELECT_POSITION
    } from "../actions/types";

const initialState:any = {
    selectedPosition: 1  
} 

const uiReducer = (state = initialState, action:any) => {

    switch (action.type) {

        case SELECT_POSITION:
            
         //select position
         console.log("selectReducer: ", action.payload);
          return {
            selectedPosition: action.payload
          };

    
        default:
          return state;
      }
}

export default uiReducer;