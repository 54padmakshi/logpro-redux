import { FETCH_DATA_REQUEST,FETCH_DATA_SUCCESS,FETCH_DATA_ERROR } from "./ActionTypes";
import axios from 'axios';

export const fetchDataRequest = ()=> ({
    type : FETCH_DATA_REQUEST
})

export const fetchDataSuccess = (data)=>({
    type : FETCH_DATA_SUCCESS,
    payload : data
})

export const fetchDataError = (error)=>({
    type : FETCH_DATA_ERROR,
    payload : error
})
   
// API CALL actioncreator --fetching values
export const fetchData = ()=>async(dispatch) =>{   //dispatch function in redux
    dispatch(fetchDataRequest)
    try{
          const response = await axios.get("https://dummyjson.com/users");
        dispatch(fetchDataSuccess(response.data))
    }
    catch(error) {
          dispatch(fetchDataError(error.message))
    }
}