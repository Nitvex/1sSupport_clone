import { call, takeLatest } from "redux-saga/effects";
import { SEARCH } from "store/constants/action-types";

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
    console.log(searchResponse);
  } catch (e) {
    console.log(e);
  }
}

function* searchSaga() {
  yield takeLatest(SEARCH, search);
}

export default searchSaga;
