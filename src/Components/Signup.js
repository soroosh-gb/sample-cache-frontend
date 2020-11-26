import React from 'react'
import { connect } from 'react-redux'
import { createUser } from '../redux/actions.js'
// import { signupToHome } from '../redux/actions.js'

class Signup extends React.Component{

    state = {
        username: "",
        password: "",
    }

    changeHandler = (e) => {
        
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    localSubmitHandler = (e) => {
        e.preventDefault()
        // this.props.toHome(this.props.history)
        // console.log(this.state)
        // this.props.submitHandler(this.state, this.props.history)
        let token = localStorage.getItem("token")
        fetch('http://localhost:3000/api/v1/users', {
            method: 'POST',
            headers: {
                Authorization:`Bear ${token}`,
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({user: this.state})
        })  
        .then(resp => resp.json())
        // .then(user => console.log(user))  
        .then(signupResponse => {
            if(signupResponse.user){
                this.props.submitHandler(signupResponse, this.props.history)
        // need to update the user key in store state with new user
        }
        else{
            console.log("nope")
        }
    })
}

    render(){
    // console.log(this.props.history)
        return (
            <div>
                <h1>Signup</h1>
                    <form onSubmit={this.localSubmitHandler}>
                        <input type="test" name="username" placeholder="username" onChange={this.changeHandler}/>
                        <input  type="password" name="password" placeholder="password" onChange={this.changeHandler}/>
                        <input type="submit"/>
                    </form>
                     
            </div>
        )
    }
   
}

function mdp(dispatch){
    return {
            submitHandler: (signupResponse, history)=>dispatch(createUser(signupResponse, history))
            // toHome: (history) => dispatch(signupToHome(history))
    }

}

function msp(state){
    return { user: state.user}
  }

export default connect(msp, mdp)(Signup)