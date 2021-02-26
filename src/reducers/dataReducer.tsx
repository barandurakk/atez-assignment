import {
    FETCH_TOP_DATA,
    FETCH_ABOUT_DATA,
    FETCH_POSITIONS_DATA
    } from "../actions/types";

const initialState:any = {
        
} 

const dataReducer = (state = initialState, action:any) => {

    switch (action.type) {

        case FETCH_TOP_DATA:
            
          //Normalde database'den sadece topData'yı çekerdik bunu simule etmek için burada filtreliyorum
          return {
              ...state,
              topData: action.payload.topSection
          };

          case FETCH_ABOUT_DATA:
            
          //Normalde database'den sadece aboutUs'ı çekerdik bunu simule etmek için burada filtreliyorum
          return {
              ...state,
              aboutData: action.payload.aboutUsSection
          };

          case FETCH_POSITIONS_DATA:
            
          //Normalde database'den sadece openPositions'u çekerdik bunu simule etmek için burada filtreliyorum
          return {
              ...state,
              positionList: action.payload.openPositions
          };
    
        default:
          return state;
      }
}

export default dataReducer;