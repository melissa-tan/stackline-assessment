export const getData = () => async (dispatch) => {
  try {
    dispatch({
      type: "AWAITING_RETAILSALES",
    });

    let data = [];
    let labels = [];
    await fetch("./data/stackline_frontend_assessment_data_2021.json")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((d) => {
        let dataSet = [];
        for (let i = 0; i < d.length; i++) {
          dataSet.push(d[i].sales);
        }
        for (let i = 0; i < dataSet[0].length; i++) {
          labels.push(dataSet[0][i].weekEnding);
          data.push(dataSet[0][i].retailSales);
        }
      });

    dispatch({
      type: "SUCCESS_RETAILSALES",
      payload: {
        data,
        labels,
      },
    });
    return dispatch;
  } catch (e) {
    dispatch({
      type: "REJECTED_RETAILSALES",
    });
  }
};
