import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Sample from '../Components/Sample'


class Home extends React.Component{

    renderSamples = () => {
        let allSamples = this.props.api
        if(allSamples.length > 0){
            return allSamples.map((el) => <Sample key={el.index} sample={el}/>)
        }
        else{
            <h1>Loading...</h1>
        }
    }
            
    render(){
        // console.log("home", this.props.user)
        // console.log(this.props.api)
        return(
            <>
            {this.props.api.length === 0 ? 
                <h1>Loading samples...</h1>
                :
                <>
                <h1>Listen and add to your collection!</h1>
                {this.renderSamples()}
                </>
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