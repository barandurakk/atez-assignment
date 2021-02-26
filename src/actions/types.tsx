
//type constants
//data
export const FETCH_TOP_DATA = "FETCH_TOP_DATA";
export const FETCH_ABOUT_DATA = "FETCH_ABOUT_DATA";
export const FETCH_POSITIONS_DATA = "FETCH_POSITIONS_DATA";
export const SET_DB_ERROR = "SET_DB_ERROR";
export const CLEAR_DB_ERROR= "CLEAR_DB_ERROR"

//ui
export const SELECT_POSITION = "SELECT_POSITION";

export interface TopData {
    topSection:{          
        explore: {
            mainHeader: string,
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
    aboutUsText: {
        h1: string,
        p1: string,
        p2: string
    }
}

export interface positionObject {
    id: number, title: string, isNew: boolean, isPublished: boolean, body:string
}

export type PositionData = positionObject[]


export interface DataState {   
        topSection: TopData,
        aboutSection: AboutUsData,
        positionsSection: positionObject[]   
}

//action types
export interface FetchDataAction {
    type: typeof FETCH_TOP_DATA | typeof FETCH_ABOUT_DATA | typeof FETCH_POSITIONS_DATA | typeof SET_DB_ERROR | typeof CLEAR_DB_ERROR,
    payload?: DataState |  TopData |  AboutUsData | PositionData
}
