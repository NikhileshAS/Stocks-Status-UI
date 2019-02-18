import * as actions from "../actions";
const initialState = {
  stock: null,
  loading: false,
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
  // console.log(state);

  switch (action.type) {
    case actions.FETCH_STOCK_DATA:
      console.log(action.payload);
      return { ...state, stock: action.payload };
    case actions.START_FETCH_STOCK_DATA:
      return { ...state, loading: true, shouldLoad: true };
    case actions.STOP_FETCH_STOCK_DATA:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default reducer;
