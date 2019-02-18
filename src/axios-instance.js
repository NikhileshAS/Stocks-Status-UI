import axios from "axios";
export const time_series_instance = axios.create({
  baseURL: "https://www.alphavantage.co/"
});
