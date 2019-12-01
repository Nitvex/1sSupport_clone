import { call, takeLatest, put } from "redux-saga/effects";
import { SEARCH, SEARCH_SUCCEEDED } from "store/constants/action-types";

import SearchService from "services/SearchService";
import { searchData } from "utils/models/searchResult";

function* search(action: {
  type: string;
  payload: { query: string; offset: number };
}) {
  try {
    const { query, offset } = action.payload;
    const searchResponse: searchData = yield call(
      SearchService.Search,
      query,
      offset
    );
    yield put({ type: SEARCH_SUCCEEDED, payload: searchResponse });
  } catch (e) {
    console.log(e);
  }
}

function* searchSaga() {
  yield takeLatest(SEARCH, search);
}

export default searchSaga;
