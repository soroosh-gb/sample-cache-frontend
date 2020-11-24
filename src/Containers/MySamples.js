import React from 'react'
import NewSampleForm from '../Components/NewSampleForm'
import { connect } from 'react-redux'
import { mySamples } from '../redux/actions.js'
import { Redirect } from 'react-router-dom'


class MySamples extends React.Component{

    state = {
        showForm: false,
    }

    // fetchMySamples = () => {
    //     this.props.mySamples(this.props.user.user.id)
    // }

  

    clickHandler = () => {
        this.setState(prevstate => ({showForm: !prevstate.showForm}))
    }

    render(){
        // console.log(this.props.user.user.id)
        return (
            <>
                {this.props.user ? 
                    <div>
                        <h1>my samples</h1>
                        {/* {this.fetchMySamples()} */}
                        <button onClick={this.clickHandler}>New sample</button>
                        {this.state.showForm ? <NewSampleForm /> : null}
                    </div>
                :
                <Redirect to="/login"/>
            }
            </>

        )
    }
  
}

// function mdp(dispatch){
//     return {mySamples: (id)=>dispatch(mySamples(id))}
// }

function msp(state){
    return { api: state.api,
            user: state.user,
            mySamples: state.mySamples,  
        }
}
export default connect(msp,null)(MySamples)