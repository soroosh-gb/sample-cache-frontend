import React from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../redux/actions.js'
import { toHome } from '../redux/actions.js'

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
        this.props.toHome(this.props.history)
        this.props.submitHandler(this.state)
        // history.push('/home', { some: 'state' });
     
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
                <br></br>
                {/* <a onClick={this.clickHandler} href="/login/create">Create Account</a> */}
            </div>
        )
    }
}

function mdp(dispatch){
    return {
        submitHandler: (user) => dispatch(loginUser(user)),
        toHome: (history) => dispatch(toHome(history))
            }
}

function msp(state){
    return { user: state.user}
  }

export default connect(msp, mdp)(Login)