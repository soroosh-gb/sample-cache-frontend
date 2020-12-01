import { combineReducers } from 'redux'



const defaultState = {
    api: [],
    user: null,
    collection: [],
    // mySamples: [],
    addedToCollecttion: [],
    errorMessage: "",
    comments: [],
}


function apiReducer(state = defaultState.api, action){
    switch (action.type) {
        case "FETCH_SAMPLES":
            console.log("fetch", action)
            return action.payload;

        case "ADD_SAMPLE":
            console.log("add", action.payload)
            return [...state, action.payload];
            
        case "REMOVE_OWN_SAMPLE":
            // console.log("add", action.payload)
            console.log(action.payload)
            return state.filter(sample => sample.id !== action.payload.id)
            // console.log(state)
        default:
            return state;
          
    }
}

function userReducer(state = defaultState.user, action){
    switch (action.type) {
        case "CREATE_USER":
            console.log("Create user", action.signupResponse)
            localStorage.setItem("token",action.signupResponse.jwt)
            return action.signupResponse.user

        // case "LOGIN_USER":
        // console.log("Login user", action.payload.user)
        // if(action.payload.jwt){
        //     localStorage.setItem("token",action.payload.jwt)
        //     return action.payload.user
        // }
        case "LOGIN_USER":
            console.log("Login user", action.loginResponse)
            localStorage.setItem("token",action.loginResponse.jwt)
            return action.loginResponse.user

        case "SET_USER":
            return action.user
            
        case "LOGOUT":
            console.log("OUTOUTOUT")
            localStorage.removeItem("token")
            return state = null
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
            // console.log(state)
            return [...state, action.payload]

        case "FETCH_COLLECTION":
            // console.log("FETCHiiiiing COLLECTION", action.payload)
            // console.log(state)
            return action.payload

        case "DELETE_USERSAMPLE":
            // console.log("deleting", action.payload)
            // console.log(state)
            // let filtered = state.filter(sample => sample.id !== action.payload.id)
            // console.log(filtered)
            return state.filter(sample => sample.id !== action.payload.id)
            // {...state, collection: filtered}

        default:
            return state
    }
}


function errorMessageReducer(state = defaultState.errorMessage, action){
    switch (action.type) {

        case "LOGIN_ERROR":
            return state = action.message

        case "SIGNUP_ERROR":
            return state = action.message
        default:
            return state
    }
}

function addedToCollecttionReducer(state = defaultState.addedToCollecttion, action){
    switch (action.type) {
        case "ADDED" :
            console.log(action)
            return [...state, action.sample_id]

            case "REMOVED" :
                console.log(action)
                return state.filter(sample_id => sample_id !== action.sample_id)
        default:
            return state 
    }
}

function commentsReducer(state = defaultState.comments, action){
    switch (action.type) {

        case "FETCH_COMMENTS":
            // console.log(action.payload)
            return action.payload

        case "CREATE_COMMENT":
            return [...state, action.payload]

        case "EDIT_COMMENT":

            let stringifiedState = JSON.stringify(state)
            let copyOfState = JSON.parse(stringifiedState)
            let comment = copyOfState.find(comment => comment.id === action.payload.id)
            comment.text = action.payload.text
           
            return state = copyOfState
            
        case "DELETE_COMMENT":
         
            return state.filter(comment => comment.id !== action.payload.id)
          
        default:
            return state
    }
}
        
       



const rootReducer = combineReducers({
    api: apiReducer,
    user: userReducer,
    collection: collectionReducer,
    addedToCollecttion: addedToCollecttionReducer,
    errorMessage: errorMessageReducer,
    comments: commentsReducer,
})

export default rootReducer;