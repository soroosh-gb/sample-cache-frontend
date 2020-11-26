import React from 'react'
import { connect } from 'react-redux'
import { loginUser, setError } from '../redux/actions.js'



class Login extends React.Component{

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
                this.setState({
            username: "",
            password: "",
        })


        fetch('http://localhost:3000/api/v1/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({user: this.state})
        })  
        .then(resp => resp.json())
        .then(loginResponse => {
        if(loginResponse.user){
            // this.props.submitHandler(loginResponse, this.props.history)
            this.hasUser(loginResponse, this.props.history)
        }
        else if(loginResponse.message){
            // console.log(loginResponse.message)

            this.noUser(loginResponse.message)  
        }
        // e.preventDefault()
        // this.setState({
        //     username: "",
        //     password: "",
        // })

    })
   
}

    hasUser = (loginResponse, history) => {
        this.props.submitHandler(loginResponse, history)
    }

    noUser = (message, history) => {
        this.props.error(message)

    }
    

    render(){
        // console.log(this.props.history)
        return(
            <div>
                <h1>Login</h1>
                <form onSubmit={this.localSubmitHandler}>
                    <input type="test" name="username" placeholder="username" onChange={this.changeHandler}/>
                    <input  type="password" name="password" placeholder="password" onChange={this.changeHandler}/>
                    <input type="submit"/>
                </form>
                <h2>{this.props.errorMessage}</h2>
            </div>
        )
    }
}

function mdp(dispatch){
    return {
        submitHandler: (loginResponse, history) => dispatch(loginUser(loginResponse, history)),
        error: (message) => dispatch(setError(message))
            }
}

function msp(state){
    return { user: state.user,
             errorMessage: state.errorMessage,
            }
  }

export default connect(msp, mdp)(Login)