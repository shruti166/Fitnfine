import axios from "axios";
import { SET_CURRENT_USER, GET_STATUS, CLEAR_STATUS, IS_LOADING, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL} from "./types";





// RETURN STATUS
export const returnStatus = (msg, status, id = null) => {
  return {
    type: GET_STATUS,
    payload: { msg, status, id}
  };
};

// CLEAR STATUS
export const clearStatus = () => {
  return {
    type: CLEAR_STATUS
  };
};

//Register User

export const registerUser = ({ name, email, password }) => (dispatch) => {
  // Headers
  const headers = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // Request body
  const body = JSON.stringify({ name, email, password });

  axios
    .post("/users/register", body, headers)
    .then((res) =>{
      dispatch(returnStatus(res.data, res.status, 'REGISTER_SUCCESS'));
      dispatch({ type: IS_LOADING })
    })
    .catch((err) => {
      dispatch(returnStatus(err.response.data, err.response.status, 'REGISTER_FAIL'))
      dispatch({
        type: REGISTER_FAIL
      });
      dispatch({ type: IS_LOADING })
    });
};

//Login User
export const loginUser = ({ email, password }) => (dispatch) => {
  // Headers
  const headers = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // Request body
  const body = JSON.stringify({ email, password });

  axios
    .post("/users/login", body, headers)
    .then((res) => {
      console.log(res);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
      dispatch({ type: IS_LOADING });
    }
    )
    .catch((err) => {
      dispatch(returnStatus(err.response.data, err.response.status, 'LOGIN_FAIL'))
      dispatch({
        type: LOGIN_FAIL
      });
      dispatch({ type: IS_LOADING })
    });
};
export const setCurrentUser = (decoded) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}