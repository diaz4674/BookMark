import preFilledData from "../preFilled/preFilledData";
import {
  ADD_BANKS_SUCCESS,
  ADD_STORE_SUCCESS,
  ADD_PERSONAL_SITE_SUCCESS
} from "../actions";

const initialstate = preFilledData;

export const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_BANKS_SUCCESS:
      // Adds inputed financial name and wesite to the array of banks so it may be viewed by the user as a selection to add.
      state.myBanks.push(action.payload);
      return {
        ...state
      };
    case ADD_STORE_SUCCESS:
      state.shopping.push(action.payload);
      // Adds inputed store name and wesite to the array of stores so it may be viewed by the user as a selection to add.
      return {
        ...state
      };
    case ADD_PERSONAL_SITE_SUCCESS:
      // Adds inputed personal name of the site and wesite to the array of stores so it may be viewed by the user as a selection to add.
      state.personal.push(action.payload);
      return {
        ...state
      };
    default:
      return state;
  }
};
