import {combineReducers} from'redux'

const defaultState={
    api: [],
    user: null,

}


function apiReducer(state = defaultState.api, action){
    switch (action.type) {
        case "FETCH_SAMPLES":
            // console.log("fetch")
            return {};
            break;
        default:
            return state;
            break;

    }
}




const rootReducer = combineReducers({
    api: apiReducer,
})
// console.log(defaultState)
export default rootReducer