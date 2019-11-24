import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import signInSaga from "pages/Login/saga";
import { composeWithDevTools } from "redux-devtools-extension";
import loginReducer from "./reducers/loginReducer";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  loginReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(signInSaga);

export default store;
