import ActionType from "../actionType";

const initialState = {
  detail: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.UPDATE_DETAIL:
      return {
        ...state,
        detail: action.detail,
      };
    default:
      return state;
  }
};

export default reducer;
