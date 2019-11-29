import { SEARCH } from "../constants/action-types";

export const search = (query: string, offset: number) => ({
  type: SEARCH,
  payload: { query, offset }
});
