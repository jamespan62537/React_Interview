import { connect } from "react-redux";
import { GET_TOURLIST } from "../../Stores/reducers/GetTourListReducer";

import TourBox from "../Presentational/Home/Content/Box/TourBox";

const getTourListStateToProps = (state) => ({
  data: state.GetTourListReducer.data.data,
});

const getTourListDispatchToProps = (dispatch) => ({
  getTourList: () => {
    dispatch({ type: GET_TOURLIST });
  },
});

export default connect(getTourListStateToProps, getTourListDispatchToProps)(TourBox);
