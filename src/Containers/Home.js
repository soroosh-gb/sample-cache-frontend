import React from 'react'
import { connect } from 'react-redux'
import Sample from '../Components/Sample'

import '../styles/Home.css'




class Home extends React.Component{



    renderSamples = () => {
        let allSamples = this.props.api
        if(allSamples.length > 0){
            return allSamples.map((el) => <Sample key={el.id} sample={el}/>)
            
        }
        else{
            <h1>Loading...</h1>
        }
    }
            
    render(){

        return(
            <>
            {this.props.api.length === 0 ? 
                <>
                <h1 style={{textAlign: "center"}}>Loading samples...</h1>
                
                </>
                :
                <div className= "header" >
                <h1>Listen and add to your collection!</h1>
                {this.renderSamples()}
                
                </div>
            }
            </>
            
        )
    }
}



function msp(state){
    return { api: state.api,
            user: state.user,
            addedToCollection: state.addedToCollection,
            collection: state.collection,
            comments: state.comments,
         }
}
export default connect(msp, null)(Home)

// this.props.api