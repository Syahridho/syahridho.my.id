export const updateDetail = (newValue) => (dispatch) => {
  dispatch({ type: "UPDATE_DETAIL", detail: newValue });
};
