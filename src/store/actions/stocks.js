import * as actions from "../actions";
import { time_series_instance } from "../../axios-instance";
import { API_KEY } from "../../assets/api";

export const startStockFetch = () => {
  return { type: actions.START_FETCH_STOCK_DATA };
};

export const stopStockFetch = () => {
  return { type: actions.STOP_FETCH_STOCK_DATA };
};

export const stockDataFetched = stocks => {
  return {
    type: actions.FETCH_STOCK_DATA,
    payload: stocks
  };
};

export const everydayStockDataFetched = stocks => {
  return {
    type: actions.FETCH_DAILY_STOCK_DATA,
    payload: stocks
  };
};

export const startDailyStockFetch = () => {
  return {
    type: actions.START_DAILY_FETCH_STOCK_DATA
  };
};

export const stopDailyStockFetch = () => {
  return { type: actions.STOP_DAILY_FETCH_STOCK_DATA };
};
export const fetchStockFromAPI = title => {
  return dispatch => {
    dispatch(startStockFetch());
    dispatch(startDailyStockFetch());
    time_series_instance
      .get(
        "query?function=TIME_SERIES_DAILY&symbol=" +
          title +
          "&apikey=" +
          API_KEY
      )
      .then(response => {
        dispatch(stockDataFetched(response.data));
        dispatch(stopStockFetch());
      });

    time_series_instance
      .get(
        "query?function=TIME_SERIES_INTRADAY&interval=5min&symbol=" +
          title +
          "&apikey=" +
          API_KEY
      )
      .then(response => {
        dispatch(everydayStockDataFetched(response.data));
        dispatch(stopDailyStockFetch());
      });
  };
};
