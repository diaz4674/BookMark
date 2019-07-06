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
  const token = localStorage.getItem("token");
  const deconstructedToken = token.split(".")[1];
  const deconstructedUserID = JSON.parse(window.atob(deconstructedToken));
  let id = deconstructedUserID.id;

  const headers = { authorization: localStorage.getItem("token") };

  axios
    .post(` http://localhost:3300/addBanks/${id}`, body, {headers} )
    .then(res => {
      dispatch({ type: SET_FINANCIAL_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: SET_FINANCIAL_FAIL, payload: err }));
};

//Sends Shopping card options to database
export const SET_STORES_SUCCESS = "SET_STORES_SUCCESS";
export const SET_STORES_FAIL = "SET_STORES_FAIL";

export const setStores = body => dispatch => {
  const token = localStorage.getItem("token");
  const deconstructedToken = token.split(".")[1];
  const deconstructedUserID = JSON.parse(window.atob(deconstructedToken));
  let id = deconstructedUserID.id;

  const headers = { authorization: localStorage.getItem("token") };

  axios
    .post(` http://localhost:3300/addStoreData/${id}`, body, { headers })
    .then(res => {
      dispatch({ type: SET_STORES_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: SET_STORES_FAIL, payload: err }));
};

//Sends Personal card options to database
export const SET_PERSONAL_SUCCESS = "SET_PERSONAL_SUCCESS";
export const SET_PERSONAL_FAIL = "SET_PERSONAL_FAIL";

export const setPersonal = body => dispatch => {
  const token = localStorage.getItem("token");
  const deconstructedToken = token.split(".")[1];
  const deconstructedUserID = JSON.parse(window.atob(deconstructedToken));
  let id = deconstructedUserID.id;

  const headers = { authorization: localStorage.getItem("token") };

  axios
    .post(` http://localhost:3300/addPersonal/${id}`, body, { headers })
    .then(res => {
      dispatch({ type: SET_PERSONAL_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: SET_PERSONAL_FAIL, payload: err }));
};

//GETS user financial sites/names
export const GET_FINANCIAL_SUCCESS = "GET_FINANCIAL_SUCCESS"
export const GET_FINANCIAL_FAIL = "GET_FINANCIAL_FAIL"

export const getmyFinancials = () => dispatch => {

  const token = localStorage.getItem("token");
  const deconstructedToken = token.split(".")[1];
  const deconstructedUserID = JSON.parse(window.atob(deconstructedToken));
  let id = deconstructedUserID.id;

  const headers = { authorization: localStorage.getItem("token") };

  axios
    .get(`http://localhost:3300/getUserFinancial/${id}`, {headers})
    .then(res => {
      dispatch({type: GET_FINANCIAL_SUCCESS, payload: res.data})
    })
    .catch(err => dispatch({type: GET_FINANCIAL_FAIL, payload: err }))
}