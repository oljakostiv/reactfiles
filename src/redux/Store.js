import {createStore} from "redux";
import {rootReducer} from "./reducers/Reducers";

export const store = createStore(rootReducer);

//6.1