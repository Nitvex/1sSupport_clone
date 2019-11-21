import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import signInSaga from "pages/Login/saga";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducers/red";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(signInSaga);

export default store;
