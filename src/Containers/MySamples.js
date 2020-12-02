import React from 'react'
import NewSampleForm from '../Components/NewSampleForm'
import { connect } from 'react-redux'
import Sample from '../Components/Sample'
import '../styles/MySamples.css'


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
        // console.log(this.props.api)
        // console.log(this.props.user.id)
        // console.log(this.props.user.user.id)
        return (
            <>
                {/* {this.props.api.length === 0 ? 
                    <h1>Loading samples...</h1>
                :
                <>                    */}
                    <h1 className= "header">Create sample!</h1>
                    <p>
                    <button className="newSampleBtn" onClick={this.clickHandler} style={{cursor: "pointer"}}> Create New sample</button>
                    </p>
                    {this.state.showForm ? <NewSampleForm /> : null}
                    {/* {this.fetchMySamples()} */}
                    {this.renderMySamples()}
               {/* </>  */}
            {/* } */}
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
            collection: state.collection,
            // mySamples: state.mySamples,  
        }
}
export default connect(msp,null)(MySamples)