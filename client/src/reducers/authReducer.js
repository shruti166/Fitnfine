import { SET_CURRENT_USER } from "../actions/types";

const initiaState = {
  isAuthenticated: false,
  user: {},
};

export default function authReducer(state = initiaState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: action.payload,
        user: action.payload,
      };
    default:
      return state;
  }
}


