import preFilledData from "../preFilled/preFilledData";
import {
  ADD_BANKS_SUCCESS,
  DELETE_BANK_SUCCESS,
  ADD_STORE_SUCCESS,
  DELETE_STORE_SUCCESS,
  DELETE_SITE_SUCCESS,
  ADD_PERSONAL_SITE_SUCCESS
} from "../actions";

const initialstate = preFilledData;

export const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_BANKS_SUCCESS:
      state.myBanks.push(action.payload);
      return {
        ...state
      };
    case DELETE_BANK_SUCCESS:
      let deleteBank = state.myBanks.indexOf(action.payload);
      state.myBanks.splice(deleteBank, 1);
      return {
        ...state
      };
    case ADD_STORE_SUCCESS:
      state.shopping.push(action.payload);
      return {
        ...state
      };
    case DELETE_STORE_SUCCESS:
      let deleteStore = state.shopping.indexOf(action.payload);
      state.shopping.splice(deleteStore, 1);
      return {
        ...state
      };
    case ADD_PERSONAL_SITE_SUCCESS:
      state.personal.push(action.payload);
      return {
        ...state
      };
    case DELETE_SITE_SUCCESS:
      let deleteSite = state.personal.indexOf(action.payload);
      state.personal.splice(deleteSite, 1);
      return {
        ...state
      };
    default:
      return state;
  }
};
