import { applyMiddleware, legacy_createStore as createStore, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
const initiaState = {}
const middlewear = [thunk];

 const store = createStore(rootReducer, initiaState, compose(applyMiddleware(...middlewear),
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

 export default store;