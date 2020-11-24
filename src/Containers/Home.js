import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Sample from '../Components/Sample'


class Home extends React.Component{

    renderSamples = () => {
        let allSamples = this.props.api
        return allSamples.map((el) => <Sample key={el.index} sample={el}/>)
    }
            
    render(){
        // console.log("home", this.props.user)
        return(
            <>
                {this.props.user ?
                <div>
                <h1>Listen and add to your collection!</h1>
                {this.renderSamples()}
            </div>
            
            :

            <Redirect to="/login"/>
            
            }
            </>
            
        )
    }
}

function msp(state){
    return { api: state.api,
            user: state.user }
}
export default connect(msp)(Home)

// this.props.api