import { combineReducers } from "redux";
import retailSalesReducer from "./retailSalesReducer";
const rootReducer = combineReducers({
  retailSales: retailSalesReducer,
});

export default rootReducer;
