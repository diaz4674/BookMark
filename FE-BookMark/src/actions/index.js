import axios from "axios";
import {
  ADD_BANKS_SUCCESS,
  DELETE_BANK_SUCCESS,
  ADD_STORE_SUCCESS,
  DELETE_STORE_SUCCESS,
  ADD_PERSONAL_SITE_SUCCESS,
  DELETE_SITE_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  SET_FINANCIAL_SUCCESS,
  SET_FINANCIAL_FAIL,
  SET_STORES_SUCCESS,
  SET_STORES_FAIL,
  SET_PERSONAL_SUCCESS,
  SET_PERSONAL_FAIL,
  GET_FINANCIAL_SUCCESS,
  GET_FINANCIAL_FAIL
} from "./types";
import { getTokenId } from "../components/common/UserId";

//Sends the financial information inputted from the onboarding section to the array of financial data that displays as options for users to select.
export const addBanks = bank => dispatch => {
  dispatch({ type: ADD_BANKS_SUCCESS, payload: bank });
};
export const deleteBank = deleteBank => dispatch => {
  dispatch({ type: DELETE_BANK_SUCCESS, payload: deleteBank });
};

//Sends the store information inputted from the onboarding section to the array of data that displays as options for users to select.
export const addStore = Store => dispatch => {
  dispatch({ type: ADD_STORE_SUCCESS, payload: Store });
};
export const deleteStore = deleteStore => dispatch => {
  dispatch({ type: DELETE_STORE_SUCCESS, payload: deleteStore });
};

//Sends the personal site information inputted from the onboarding section to the array of personal sites data that displays as options for users to select.
export const addPersonalSite = personalSite => dispatch => {
  dispatch({ type: ADD_PERSONAL_SITE_SUCCESS, payload: personalSite });
};
export const deleteSite = deleteSite => dispatch => {
  dispatch({ type: DELETE_SITE_SUCCESS, payload: deleteSite });
};

//LOGIN
export const postLogin = body => dispatch => {
  axios
    //sends Post request to backend to login and authenticate user credentials
    .post("https://be-bookmark.herokuapp.com/login", body)
    .then(res => {
      //if user credentials are verified, sets the jwt token to the local storage for authorization
      localStorage.setItem("token", res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: LOGIN_FAIL, payload: err }));
};

//REGISTER
export const postRegister = body => dispatch => {
  localStorage.removeItem("token");
  axios
    .post("https://be-bookmark.herokuapp.com/register", body)
    .then(res => {
      // After sign up, sets token to Headers
      localStorage.setItem("token", res.data.token);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: REGISTER_FAIL, payload: err }));
};

//Sends Institution card options to database
export const setFinancial = body => dispatch => {
  let id = getTokenId();
  const headers = { authorization: localStorage.getItem("token") };
  axios
    .post(`https://be-bookmark.herokuapp.com/addBanks/${id}`, body, { headers })
    .then(res => {
      dispatch({ type: SET_FINANCIAL_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: SET_FINANCIAL_FAIL, payload: err }));
};

//Sends Shopping card options to database
export const setStores = body => dispatch => {
  let id = getTokenId();
  const headers = { authorization: localStorage.getItem("token") };
  axios
    .post(`https://be-bookmark.herokuapp.com/addStoreData/${id}`, body, {
      headers
    })
    .then(res => {
      dispatch({ type: SET_STORES_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: SET_STORES_FAIL, payload: err }));
};

//Sends Personal card options to database
export const setPersonal = body => dispatch => {
  let id = getTokenId();
  const headers = { authorization: localStorage.getItem("token") };
  axios
    .post(` https://be-bookmark.herokuapp.com/addPersonal/${id}`, body, {
      headers
    })
    .then(res => {
      dispatch({ type: SET_PERSONAL_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: SET_PERSONAL_FAIL, payload: err }));
};

//GETS user financial sites/names
export const getmyFinancials = () => dispatch => {
  let id = getTokenId();

  const headers = { authorization: localStorage.getItem("token") };
  axios
    .get(`https://be-bookmark.herokuapp.com/getUserFinancial/${id}`, {
      headers
    })
    .then(res => {
      dispatch({ type: GET_FINANCIAL_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: GET_FINANCIAL_FAIL, payload: err }));
};
