import { GET_ERRORS } from "../actions/types";

const initiaState = {}


export default function errorReducer(state = initiaState, action) {
    switch(action.type) {
        case GET_ERRORS: 
        return action.payload;
       default: 
       return state;
    }
}