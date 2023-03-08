import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import rootReducer from "../reducers";
const initiaState = {}
;
const middleware = [thunk];
 const store = createStore(rootReducer, initiaState, 
    composeWithDevTools(applyMiddleware(...middleware)))

 export default store;