import {
    FETCH_TOP_DATA,
    } from "../actions/types";

const initialState:any = {
    
        // topSection:{
        //     mainHeader:"",
        //     explore:{exploreText:"", exploreButtonText:""},
        //     news: {newsHeader:"", newsText:"", newsBtnText:""},  
        // },
        // aboutSection: {
        //     aboutUsText:"",
        //     aboutUsImgs:[],  
        // },
        // openPositionSection: [
        //     {title: "", isNew: false, isOnline: false, body:""}
        // ]
      
} 

const dataReducer = (state = initialState, action:any) => {

    switch (action.type) {

        case FETCH_TOP_DATA:
            
          //Normalde database'den sadece topData'yı çekerdik bunu simule etmek için burada filtreliyorum
          return {
              ...state,
              ...action.payload.topSection
          };
    
        default:
          return state;
      }
}

export default dataReducer;