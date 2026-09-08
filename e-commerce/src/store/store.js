import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { reducers } from "./reducers";
import { createLogger } from "redux-logger";
import { thunk } from "redux-thunk";
const logger = createLogger();
export const myStore = createStore(reducers, applyMiddleware(thunk, logger));

