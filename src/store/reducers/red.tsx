import { INCREMENT } from "../constants/action-types";

const initialState = {
  counter: 0
};

export default function someReducer(
  state = initialState,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };
    default:
      return state;
  }
}
