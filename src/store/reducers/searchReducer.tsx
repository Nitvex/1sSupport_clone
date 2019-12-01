import {
  SEARCH,
  SEARCH_SUCCEEDED,
  SEARCH_FAILED
} from "store/constants/action-types";

import { searchData } from "utils/models/searchResult";

const initialState = {
  isLoading: false,
  searchData: {} as searchData,
  error: {}
};

export default function searchReducer(
  state = initialState,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        isLoading: true
      };
    case SEARCH_SUCCEEDED:
      return {
        isLoading: false,
        searchData: { ...(action.payload as searchData) },
        error: {}
      };
    case SEARCH_FAILED:
      return {
        isLoading: false,
        searchData: {} as searchData,
        error: { ...action.payload }
      };
    default:
      return state;
  }
}
