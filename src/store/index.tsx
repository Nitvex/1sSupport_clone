/**
 * Should reducers be placed into separated folder or in folder with component, which uses it?
 */
import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import signInSaga from "pages/Login/saga";
import searchSaga from "pages/Search/saga";
import { composeWithDevTools } from "redux-devtools-extension";
import loginReducer from "./reducers/loginReducer";
import searchReducer from "./reducers/searchReducer";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  loginReducer,
  searchReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(signInSaga);
sagaMiddleware.run(searchSaga);

export default store;
