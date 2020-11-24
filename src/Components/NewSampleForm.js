import React from 'react'
import { connect } from 'react-redux'
import { createAction } from '../redux/actions.js'


class NewSampleForm extends React.Component{

    state = {
        audio_file: {},
        image_file: {},
        name: "",
        genre: "",
        collection: false,
        // creator: this.props.user,
    }

    changeHandler = (e) => {
        
        this.setState({ 
        [e.target.name]: e.target.files[0],
        // audio_file: e.target.files[0],
        // image_file: e.target.files[0],
        // name: e.target.value,
            
         })
        //  console.dir(e.target.value)
    }

    localSubmitHandler = (e) => {
        e.preventDefault()
        const form = new FormData()
        form.append("audio_file", this.state.audio_file)
        form.append("image_file", this.state.image_file)
        form.append("name", this.state.name)
        form.append("genre", this.state.genre)
        form.append("collection", this.state.collection)
        // form.append("creator", this.state.creator.id)

        this.props.submitHandler(form, this.props.user)

        // fetch("http://localhost:3000/api/v1/samples", {
        //     method: "POST",
        //     body: form
        // })
        // .then(resp => resp.json())
        // .then(sample => console.log(sample))
    }

    render(){
        // console.log("IN FORM",this.props.user)
        return(
            <div className='from'>
                <h1>New Sample Form</h1>
                <form onSubmit={this.localSubmitHandler}>
                    
                    <lable>Audio Upload</lable>
                    <input type="file" name="audio_file" onChange={this.changeHandler}/>
                    <br/><br/>
                    <lable>Image Upload</lable>
                    <input type="file" name="image_file" onChange={this.changeHandler}/>
                    <br/><br/>
                    <input type="text" name="name" placeholder="name" onChange={this.changeHandler}/>
                    <br/><br/>
                    <input type="text" name="genre" placeholder="genre" onChange={this.changeHandler}/>
                    <br/><br/>

                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

function mdp(dispatch){
    return {submitHandler: (form)=>dispatch(createAction(form))}
}

function msp(state){
    return { user: state.user}
    // console.log(state)
  }
export default connect(msp, mdp)(NewSampleForm)