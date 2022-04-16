import React from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../Actions/retailSalesActions";
export default function Chart() {
  ChartJS.register(...registerables);

  const dispatch = useDispatch();
  const state = useSelector(state => state.retailSales)
  const fetchData = () => {
    dispatch(getData());
  };
  return (
    <div className="chart-container">
      {state.loading && <p>Loading...</p>}
      <button onClick={() => fetchData()}>View Retail Sales</button>
      <Line data={state.data} width="1000px" height="700px" className="chart-size"/>
    </div>
  );
}
