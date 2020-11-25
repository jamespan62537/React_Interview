import { call, put, takeEvery } from "redux-saga/effects";

const GET_TOURLIST = "GET_TOURLIST";
const GET_TOURLIST_BY_FILTER = "GET_TOURLIST_BY_FILTER";
const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";

function* fetchData() {
  const data = yield call(() =>
    fetch("https://interview.tripresso.com/tour/search").then((response) =>
      response.json()
    )
  );
  yield put({ type: FETCH_DATA_SUCCESS, payload: { data } });
}

function* fetchDataByAsc(action) {
  const data = yield call(() =>
    fetch(
      `https://interview.tripresso.com/tour/search?sort=${action.filter_type}`
    ).then((response) => response.json())
  );
  yield put({ type: FETCH_DATA_SUCCESS, payload: { data } });
}

export default function* getTourListMiddleWare() {
  yield takeEvery(GET_TOURLIST, fetchData);
  yield takeEvery(GET_TOURLIST_BY_FILTER, fetchDataByAsc);
}
