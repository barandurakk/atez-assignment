import {
    FETCH_LANDING_DATA,
    } from "../actions/types";

const initialState:any = {
        
} 

const dataReducer = (state = initialState, action:any) => {

    switch (action.type) {

        case FETCH_LANDING_DATA:
            
          return action.payload;
    
        default:
          return state;
      }
}

export default dataReducer;