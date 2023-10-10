import { createStore } from "redux";
import reducer from "../reducer";

const storeRedux = createStore(reducer);

export default storeRedux;
