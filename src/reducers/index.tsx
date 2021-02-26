import { combineReducers } from 'redux'
import dataReducer from "./dataReducer";
import {DataState, TopData, AboutUsData, positionObject} from "../actions/types";
import uiReducer from './uiReducer';

export interface AppState {
    data: DataState | TopData | AboutUsData | positionObject[] | any
    ui: {selectedPosition:number}
}

const rootReducer =  combineReducers<AppState>({
    data: dataReducer,
    ui: uiReducer
})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;