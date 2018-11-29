/*MAIN FETCHING/CHECKING MODULE*/
import { SUCCESS, FAILED } from "../constants/ActionTypes";

export default function reducer(state = {
  data: null,
  status: null
}, action) {
  switch (action.type) {
    case SUCCESS: {
      return {
        ...state,
        data: action.payload,
        status: "success"
      };
      break;
    }
    case FAILED: {
      return {
        ...state,
        status: "failed"
      };

      console.error(`Error fetching data from webservice. ${action.payload}.`); // eslint-disable-line
      break;
    }
  }

  return state;
}