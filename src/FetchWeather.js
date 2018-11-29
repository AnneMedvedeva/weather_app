/*API DATA FETCHING MODULE*/
import { SUCCESS, FAILED } from "./constants/ActionTypes";

import axios from "axios";

export const fetchData = (region) => (dispatch) => {

  let API = "8d2de98e089f1c28e1a22fc19a24ef04";
  let location = `https://api.openweathermap.org/data/2.5/forecast?q=${region}&units=metric&appid=${API}`;

  return axios.get(location)
    .then((response) => {
      dispatch({type: SUCCESS, payload: response.data});})
    .catch((error) => {
      dispatch({type: FAILED, payload: error});});
};