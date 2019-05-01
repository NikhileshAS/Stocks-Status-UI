import * as actions from "../actions";
const initialState = {
  monthly_stock: null,
  daily_stock: null,
  search_stock: null,
  monthly_stock_loading: false,
  daily_stock_loading: false,
  search_stock_loading: false,
  shouldLoad: false,
  items: [
    { title: "AMAZON", description: "" },
    { title: "MICROSOFT", description: "" },
    { title: "ORACLE", description: "" },
    { title: "ALIBABA", description: "" },
    { title: "APPLE", description: "" },
    { title: "GOOGLE", description: "" },
    { title: "FACEBOOK", description: "" },
    { title: "INFOSYS", description: "" },
    { title: "HCL", description: "" },
    { title: "TCS", description: "" }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_DAILY_STOCK_DATA:
      // console.log(action.payload);
      return { ...state, daily_stock: action.payload };
    case actions.START_DAILY_FETCH_STOCK_DATA:
      return { ...state, daily_stock_loading: true };
    case actions.STOP_DAILY_FETCH_STOCK_DATA:
      return { ...state, daily_stock_loading: false };
    case actions.FETCH_STOCK_DATA:
      // console.log(action.payload);
      return { ...state, monthly_stock: action.payload };
    case actions.START_FETCH_STOCK_DATA:
      return { ...state, monthly_stock_loading: true, shouldLoad: true };
    case actions.STOP_CHART_DISPLAY:
      return { ...state, shouldLoad: false };
    case actions.STOP_FETCH_STOCK_DATA:
      return { ...state, monthly_stock_loading: false };
    case actions.START_SEARCH_STOCK_DATA:
      return { ...state, search_stock_loading: true };
    case actions.STOP_SEARCH_STOCK_DATA:
      return { ...state, search_stock_loading: false };
    case actions.FETCH_SEARCH_STOCK_DATA:
      return { ...state, search_stock: action.payload };
    default:
      return state;
  }
};

export default reducer;
