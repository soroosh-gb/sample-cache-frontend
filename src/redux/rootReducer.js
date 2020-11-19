import {combineReducers} from'redux'

const defaultState={
    api: [],

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

export default rootReducer