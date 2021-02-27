
//type constants
//data
export const FETCH_TOP_DATA = "FETCH_TOP_DATA";
export const FETCH_ABOUT_DATA = "FETCH_ABOUT_DATA";
export const FETCH_POSITIONS_DATA = "FETCH_POSITIONS_DATA";

//ui
export const SELECT_POSITION = "SELECT_POSITION";
export const SET_INITIAL_POSITION_ITEM = "SET_INITIAL_POSITION_ITEM";

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
    id: number, 
    title: string, 
    isNew: boolean, 
    isPublished: boolean,  
    applyCount: number, 
    startDate: string, 
    endDate: string, 
    publishedDayCount: number, 
    body:string
}

export type PositionData = positionObject[]


export interface DataState {   
        topSection: TopData,
        aboutSection: AboutUsData,
        positionsSection: positionObject[]   
}

//action types
export interface FetchDataAction {
    type: typeof FETCH_TOP_DATA | typeof FETCH_ABOUT_DATA | typeof FETCH_POSITIONS_DATA  | typeof SET_INITIAL_POSITION_ITEM 
    payload?: DataState |  TopData |  AboutUsData | PositionData
}
