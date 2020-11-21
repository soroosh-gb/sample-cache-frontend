


export function fetchSamplesAction(){
    // this is where thunk comes handy
    return function() {
        fetch("http://localhost:3000/api/v1/samples")
        .then(resp => resp.json())
        .then(samples => console.log(samples))
        .catch(console.log)
    }
    // fetch our samples
}