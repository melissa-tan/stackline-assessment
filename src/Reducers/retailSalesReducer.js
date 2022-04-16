const initialState = {
  loading: false,
  data: {
    labels: [],
    datasets: [
      {
        label: "Retail Sales",
        data: [],
        borderColor: "rgb(66,166,246)",
      },
    ],
  },
};

const retailSalesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "AWAITING_RETAILSALES":
      default: return {
        ...state,
        loading: true,
      };
    case "REJECTED_RETAILSALES":
      return {
        ...state,
        loading: false,
      };
    case "SUCCESS_RETAILSALES":
      return {
        ...state,
        loading: false,
        data: {
          labels: payload.labels,
          datasets: [
            {
              label: "Retail Sales",
              data: payload.data,
              borderColor: "rgb(66,166,246)",
            },
          ],
        },
      };
  }
};

export default retailSalesReducer;
