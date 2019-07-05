import axios from "axios";

export const ADD_BANKS_SUCCESS = "ADD_BANKS_SUCCESS";

export const addBanks = bank => dispatch => {
  dispatch({ type: ADD_BANKS_SUCCESS, payload: bank });
};

export const DELETE_BANK_SUCCESS = "DELETE_BANK_SUCCESS";
export const deleteBank = deleteBank => dispatch => {
  dispatch({ type: DELETE_BANK_SUCCESS, payload: deleteBank });
};

export const ADD_STORE_SUCCESS = "ADD_STORE_SUCCESS";
export const addStore = Store => dispatch => {
  dispatch({ type: ADD_STORE_SUCCESS, payload: Store });
};

export const DELETE_STORE_SUCCESS = "DELETE_STORE_SUCCESS";
export const deleteStore = deleteStore => dispatch => {
  dispatch({ type: DELETE_STORE_SUCCESS, payload: deleteStore });
};

export const ADD_PERSONAL_SITE_SUCCESS = "ADD_PERSONAL_SITE_SUCCESS";
export const addPersonalSite = personalSite => dispatch => {
  dispatch({ type: ADD_PERSONAL_SITE_SUCCESS, payload: personalSite });
};

export const DELETE_SITE_SUCCESS = "DELETE_SITE_SUCCESS";
export const deleteSite = deleteSite => dispatch => {
  dispatch({ type: DELETE_SITE_SUCCESS, payload: deleteSite });
};

export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

export const postRegister = body => dispatch => {
  axios
    .post("http://localhost:3300/register", body)
    .then(res => {
      // After sign up, sets token to Headers
      localStorage.setItem("token", res.data.token);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: REGISTER_FAIL, payload: err }));
};

//Sends Institution card options to database
export const SET_FINANCIAL_SUCCESS = "SET_FINANCIAL_SUCCESS";
export const SET_FINANCIAL_FAIL = "SET_FINANCIAL_FAIL";

export const setFinancial = body => dispatch => {
  const headers = { Authorization: localStorage.getItem("token") };
  axios
    .post("http://localhost:3300", body, { headers })
    .then(res => {
      dispatch({ type: SET_FINANCIAL_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: SET_FINANCIAL_FAIL, payload: res.data }));
};
