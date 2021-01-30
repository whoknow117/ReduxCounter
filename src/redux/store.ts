import {combineReducers, createStore} from "redux";
import counterReducer  from "./counter-reducer";





let rootReducer = combineReducers({
    counter: counterReducer,

})

export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

