import React from 'react'


class NewSampleForm extends React.Component{

    state = {
        audio_file: {},
        image_file: {},
        name: "",
        genre: "",
        collection: false,
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

    submitHandler = (e) => {
        e.preventDefault()
        const form = new FormData()
        form.append("audio_file", this.state.audio_file)
        form.append("image_file", this.state.image_file)
        form.append("name", this.state.name)
        form.append("genre", this.state.genre)
        form.append("collection", this.state.collection)

        fetch("http://localhost:3000/api/v1/samples", {
            method: "POST",
            body: form
        })
        .then(resp => resp.json())
        .then(sample => console.log(sample))
    }

    render(){
        console.log(this.state)
        return(
            <div className='from'>
                <h1>New Sample Form</h1>
                <form onSubmit={this.submitHandler}>
                    
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

export default NewSampleForm