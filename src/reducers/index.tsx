import { combineReducers } from 'redux'
import dataReducer from "./dataReducer";
import {DataState, TopData, AboutUsData, positionObject} from "../actions/types";
import uiReducer from './uiReducer';

export interface AppState {
    data: DataState | TopData | AboutUsData | positionObject[] | any
    ui: {selectedPosition: {
        id: number, 
        title: string, 
        isNew: boolean, 
        isPublished: boolean,  
        applyCount: number, 
        startDate: string, 
        endDate: string, 
        publishedDayCount: number, 
        body:string
        },
        loading:boolean
    }
}

const rootReducer =  combineReducers<AppState>({
    data: dataReducer,
    ui: uiReducer
})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;