import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import signInSaga from "pages/Login/saga";
import searchSaga from "pages/Search/saga";
import { composeWithDevTools } from "redux-devtools-extension";
import loginReducer from "./reducers/loginReducer";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  loginReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(signInSaga);
sagaMiddleware.run(searchSaga);

export default store;
