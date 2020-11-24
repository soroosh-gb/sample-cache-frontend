


export function fetchSamplesAction(){
    // this is where thunk comes handy
    return function(dispatch) {
        fetch("http://localhost:3000/api/v1/samples")
        .then(resp => resp.json())
        .then(payload => dispatch({ type: "FETCH_SAMPLES", payload }))
        .catch(console.log)
    }
    // fetch our samples
}

export function createAction(form){
    console.log("new", form)
    let token = localStorage.getItem("token")
    return function(dispatch) {
    // return function(dispatch, getstate ) {
        fetch("http://localhost:3000/api/v1/samples", {
            method: "POST",
            // headers: {
            //     'Content-Type': 'application/json',
            //     Accept: 'application/json'
            // },
            headers: {
                Authorization:`Bear ${token}`
            },
            body: form
        })
        .then(resp => resp.json())
        // .then(sample => dispatch({ type: "ADD_SAMPLE", payload: sample }))
        .then(payload => dispatch({ type: "ADD_SAMPLE", payload}))

        // .then(sample => dispatch({ type: "ADD_SAMPLE", payload: [...getstate().api, sample] }))
    }

}

export function createUser(newUser, history){
    // console.log("new", form)
    let token = localStorage.getItem("token")
    return function(dispatch) {
        fetch('http://localhost:3000/api/v1/users', {
            method: 'POST',
            headers: {
                Authorization:`Bear ${token}`,
                'Content-Type': 'application/json',
                accepts: 'application/json'
            },
            body: JSON.stringify({user: newUser})
        })  
        .then(resp => resp.json())
        .then(payload => dispatch({ type: "CREATE_USER", payload}, history.push("/home"))) 
        // .then(data => console.log(data))
        // .then(payload => {
        //     (payload => dispatch({ type: "CREATE_USER", payload: payload}))
            // (console.log(payload))
            // localStorage.setItem("token", payload.jwt) 
        
            
        // .then(payload => dispatch({ type: "CREATE_USER", payload: payload})) 
        }

}

export function loginUser(user, history){
   
    return function(dispatch) {
        
        
        fetch('http://localhost:3000/api/v1/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({user: user})
        })  
        .then(resp => resp.json())
        .then(payload => dispatch({ type: "LOGIN_USER", payload }, history.push('/home')))
        
    }
}




export function addToCollectionAction(sampleId, userId){
    console.log("add", sampleId, userId)
    let token = localStorage.getItem("token")
    return function(dispatch) {
    // return function(dispatch, getstate ) {
        fetch("http://localhost:3000/api/v1/usersamples", {
            method: "POST",
            // headers: {
            //     'Content-Type': 'application/json',
            //     Accept: 'application/json'
            // },
            headers: {
                Authorization:`Bear ${token}`,
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify ({user_id:userId ,sample_id:sampleId})
        })
        .then(resp => resp.json()) 
        // .then(data => console.log(data))
        .then(payload => dispatch({ type: "ADD_TO_COLLECTION", payload }))

        // .then(sample => dispatch({ type: "ADD_SAMPLE", payload: [...getstate().api, sample] }))
    }

}

export function logout(history){
    return function(dispatch){
        // console.log("here",history)
        
        dispatch({ type: "LOGOUT" }, history.push("/login"))
    }
}

// export function mySamples(id){
//     return function(dispatch){
//         fetch(`http://localhost:3000/api/v1/users/${id}`)
//         .then(resp => resp.json())
//         // .then(data => console.log(data))
//         .then(payload => dispatch({ type: "MY_SAMPLES", payload: payload.samples }))
//     }
// }




export function fetchCollectionAction(){
    return function(dispatch){
        // console.log("fetching collection!", user)
       fetch("http://localhost:3000/api/v1/usersamples")
       .then(resp => resp.json())
       .then(payload => dispatch({ type: "FETCH_COLLECTION", payload }))
    }
}

export function removeFromCollection(id){
    return function(dispatch){
        // console.log("fetching collection!", user)
        let token = localStorage.getItem("token")
       fetch(`http://localhost:3000/api/v1/usersamples/${id}`,{
           method: "DELETE",
           headers: {
            Authorization:`Bear ${token}`
        },
       })
       .then(resp => resp.json())
       .then(payload => dispatch({ type: "DELETE_USERSAMPLE", payload }))
    }
}
