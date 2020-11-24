import React from 'react'
import NewSampleForm from '../Components/NewSampleForm'
import { connect } from 'react-redux'
import { mySamples } from '../redux/actions.js'
import { Redirect } from 'react-router-dom'
import Sample from '../Components/Sample'


class MySamples extends React.Component{

    state = {
        showForm: false,
    }

   renderMySamples = () => {
       let justMySamples = this.props.api.filter(el => el.creator.id === this.props.user.id)
       return justMySamples.map((el) => <Sample key={el.i} sample={el}/>)
   }

  

    clickHandler = () => {
        this.setState(prevstate => ({showForm: !prevstate.showForm}))
    }

    render(){
        console.log(this.props.api)
        console.log(this.props.user.id)
        // console.log(this.props.user.user.id)
        return (
            <>
                {this.props.user ? 
                    <div>
                        <h1>my samples</h1>
                        {/* {this.fetchMySamples()} */}
                        <button onClick={this.clickHandler}>New sample</button>
                        {this.state.showForm ? <NewSampleForm /> : null}
                        {this.renderMySamples()}
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