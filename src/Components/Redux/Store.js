// import { combineReducers, createStore } from "redux";
// import userReducer from "./UserReducer/UserReducer";




// const rootReducer = combineReducers({
//       user: userReducer,
// })

// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// export default store

import { createStore, combineReducers } from "redux"
import userReducer from "./UserReducer/UserReducer"

const roodReducer = combineReducers({
      user: userReducer,
})

const store = createStore(roodReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;