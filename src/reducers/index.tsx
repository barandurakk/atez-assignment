import { combineReducers } from 'redux'
import dataReducer from "./dataReducer";
import {DataState, TopData, AboutUsData, positionObject} from "../actions/types";

export interface AppState {
    data: DataState | TopData | AboutUsData | positionObject[] | any
}

const rootReducer =  combineReducers<AppState>({
    data: dataReducer
})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;