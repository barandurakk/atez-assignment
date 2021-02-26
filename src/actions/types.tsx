
//type constants
export const FETCH_TOP_DATA = "FETCH_TOP_DATA";

export const SET_DB_ERROR = "SET_DB_ERROR";
export const CLEAR_DB_ERROR= "CLEAR_DB_ERROR"

export interface TopData {
    topSection:{
            mainHeader: string,
        explore: {
            exploreText: string,
            exploreButtonText: string
        },
        news: {
            newsHeader: string,
            newsText: string,
            newsBtnText: string
        }
    }  
}

export interface AboutUsData {
    aboutUsText: string,
    aboutUsImgs: []
}

export interface positionObject {
    title: string, isNew: boolean, isOnline: boolean, body:string
}


export interface DataState {   
        topSection: TopData,
        aboutSection: AboutUsData,
        openPositionSection: positionObject[]   
}

//action types
export interface FetchDataAction {
    type: typeof FETCH_TOP_DATA | typeof SET_DB_ERROR | typeof CLEAR_DB_ERROR,
    payload?: DataState |  TopData |  AboutUsData
}
