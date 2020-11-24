import { combineReducers } from 'redux'



const defaultState = {
    api: [],
    user: null,
    collection: [],
    mySamples: [],
}


function apiReducer(state = defaultState.api, action){
    switch (action.type) {
        case "FETCH_SAMPLES":
            console.log("fetch", action)
            return action.payload;
        case "ADD_SAMPLE":
            console.log("add", action.payload)
            return [...state, action.payload];
            // return action.payload
        default:
            return state;
          
    }
}

function userReducer(state = defaultState.user, action){
    switch (action.type) {
        case "CREATE_USER":
            // console.log("Create user", action)
            localStorage.setItem("token",action.payload.jwt)
            return action.payload.user
        case "LOGIN_USER":
        // console.log("Login user", action.payload.user)
        localStorage.setItem("token",action.payload.jwt)
        return action.payload.user
        case "LOGOUT":
            console.log("OUTOUTOUT")
            localStorage.removeItem("token")
            return [state = null]
            // {
            //     user: null,
            //     // collection: [],
            //     }
        default:
            return state;
        }
}

function collectionReducer(state = defaultState.collection, action){
    switch (action.type) {
        case "ADD_TO_COLLECTION":
            console.log("Add to collection", action.payload)
            console.log(state)
            return [...state, action.payload]
        case "FETCH_COLLECTION":
            console.log("FETCHiiiiing COLLECTION", action.payload)
            return [state = action.payload]
        case "DELETE_USERSAMPLE":
            console.log("deleting", action.payload)
            let filtered = state.filter(sample => sample.id !== action.payload.id)
            return {...state, collection: filtered}
        default:
            return state
    }
}


// function mySamplesReducer(state = defaultState.api, action){
//     switch (action.type) {
//         case "MY_SAMPLES":
//             // console.log("MY SAMPLES", action.payload)
//             return [...state, action.payload]
//         default:
//             return state
//     }
// }

        
       



const rootReducer = combineReducers({
    api: apiReducer,
    user: userReducer,
    collection: collectionReducer,
    // mySamples: mySamplesReducer,
})

export default rootReducer;