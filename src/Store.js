import { applyMiddleware, createStore } from "redux"; 
import thunk from 'redux-thunk'; 
import rootReducer from "./Reducers";

const dataStore = createStore(rootReducer , applyMiddleware(thunk));

export default dataStore;