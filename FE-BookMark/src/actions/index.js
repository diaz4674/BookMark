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
