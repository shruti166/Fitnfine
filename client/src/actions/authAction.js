import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER} from "./types";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from 'jwt-decode';


//Register User

export const registerUser = (userData) => (dispatch) => {
  axios
    .post("/users/register", userData)
    .then((res) => console.log(res.data))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

//Login user

export const loginUser = (userData) => (dispatch) => {
  axios
    .post("/users/login", userData)
    .then((res) => {
        const {token} = res.data;
        // Save to ls
        localStorage.setItem('jwtToken', token);

        //Set token to auth header
        setAuthToken(token);

        //Decode token to get user data

        const decoded = jwt_decode(token);

        dispatch(setCurrentUser(decoded))
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const setCurrentUser = (decoded) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}