import React from 'react'
import NewSampleForm from '../Components/NewSampleForm'


class MySamples extends React.Component{

    state = {
        showForm: false,
    }

    clickHandler = () => {
        this.setState(prevstate => ({showForm: !prevstate.showForm}))
    }

    render(){
        return (
            <div>
                <button onClick={this.clickHandler}>New sample</button>
                {this.state.showForm ? <NewSampleForm /> : null}
            </div>
        )
    }
  
}

export default MySamples


// state = {
//     selectedFile: null
// }

// fileSelectHandler = (e) => {
//     this.setState({
//         selectedFile: e.target.files[0]
//     }) 
// }

// fileUploadHandler = () =>  {
//     // fetch here
//     fetch("url to create sample")
//     .then(resp => resp.json())
//     .then(data => console.log(data))
// }

// render(){
//     return(
//         <div>
//             <h1>My Samples</h1>
//             <input type="file" onChange={this.fileSelectHandler}/>
//             <button onClick={this.fileUploadHandler}>Upload</button>
//         </div>
//     )
// }