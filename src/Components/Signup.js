import React from 'react'

class Signup extends React.Component{

    state = {
        username: "",
        password_digest: "",
    }

    changeHandler = (e) => {
        
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/api/v1/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(this.state)
        })  
        .then(resp => resp.json())
        .then(user => console.log(user))  
        // need to update the user key in store state with new user
    }
       

    render(){
        return (
            <div>
                <h1>Signup</h1>
                    <form onSubmit={this.submitHandler}>
                        <input type="test" name="username" placeholder="username" onChange={this.changeHandler}/>
                        <input  type="password" name="password_digest" placeholder="password" onChange={this.changeHandler}/>
                        <input type="submit"/>
                    </form>
            </div>
        )
    }
   
}

export default Signup