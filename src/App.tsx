import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import ApplicationRouter from "./Router";

import "styles/styles.css";
import "styles/indentation.css";
import "styles/layout.css";

export default function App() {
  return (
    <Provider store={store}>
      <ApplicationRouter />
    </Provider>
  );
}
