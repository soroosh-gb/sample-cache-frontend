import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../redux/actions.js'


class Logout extends React.Component{

    localLogoutHandler = () => {
        
        // localStorage.removeItem("token")
    }

    componentDidMount(){
       this.props.logout(this.props.history)
      
    }
    
    render(){
        console.log(this.props.history)
        return(
            <div>
                {this.localLogoutHandler}
            </div>
        )
    }


}

function mdp(dispatch){
    return { logout: (history)=> dispatch(logout(history)) }
    
  }
  
  function msp(state){
    return { user: state.user}
    // console.log(state)
  }

  export default connect(msp,mdp)(Logout)




