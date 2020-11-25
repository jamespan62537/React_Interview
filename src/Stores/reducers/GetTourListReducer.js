export const GET_TOURLIST = "GET_TOURLIST";
export const GET_TOURLIST_BY_FILTER = "GET_TOURLIST_BY_FILTER";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";

const initState = {
  data: {},
};

const getTourListReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
      };
    default:
      return { ...state };
  }
};

export default getTourListReducer;
