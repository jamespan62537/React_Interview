import { connect } from "react-redux";
import { GET_TOURLIST_BY_FILTER } from "../../Stores/reducers/GetTourListReducer";
import FilterBox from "../Presentational/Home/Content/Box/FilterBox";

const getTourListDispatchProps = (dispatch) => ({
  getTourListByFilter: (filter_type) => {
    dispatch({ type: GET_TOURLIST_BY_FILTER, filter_type: filter_type });
  },
});

export default connect(null, getTourListDispatchProps)(FilterBox);
