import { applyMiddleware } from "redux";
import customMiddleware from "./custom-middlware";
import thunk from "redux-thunk";
import rLogger from "redux-logger";

export default applyMiddleware(thunk, customMiddleware, rLogger);
