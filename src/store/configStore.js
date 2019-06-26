// export const configStore = createStore(reducer)

import reducers from "../reducers";
import {createStore} from "redux";

export default function (init) {
    // init参数是state的初始值
    const store = createStore(
        reducers
        ,init
        ,window.devToolsExtension?window.devToolsExtension():undefined
    )
    return store
}