import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";

const reducers = (state) => state;
const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export default (preloadedState = {}) =>
  createStore(
    reducers,
    preloadedState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
