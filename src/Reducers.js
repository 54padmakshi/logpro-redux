import { FETCH_DATA_REQUEST,FETCH_DATA_SUCCESS,FETCH_DATA_ERROR } from "./ActionTypes";
import {combineReducers} from 'redux' ; // combine the reducers

const initialState = {
    loading : false,
    data : [],
    error : ""
}

const dataReducer = (state = initialState,action) => {
      switch (action.type){
        case FETCH_DATA_REQUEST : return {
                                           ...state,
                                            loading :true
                                        }
        case FETCH_DATA_SUCCESS : return {
            ...state,
            loading :false,
            data : action.payload
        } 
        case FETCH_DATA_ERROR : return {
            ...state,
            loading : false,
            error : action.payload
        }  
        default : return state                             
        
      }

}


 const rootReducer =combineReducers({ 
    data :dataReducer 
   
 })
 export  default rootReducer;