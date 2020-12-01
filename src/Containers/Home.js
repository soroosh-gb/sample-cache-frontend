import React from 'react'
import { connect } from 'react-redux'
import Sample from '../Components/Sample'
// import { fetchSamplesAction } from '../redux/actions';
import CommentBox from './CommentBox.js'



class Home extends React.Component{

//    componentDidMount(){
//        this.props.fetchSamples()
//    }

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
                <>
                <h1 style={{textAlign: "center"}}>Loading samples...</h1>
                
                </>
                :
                <div className= "header" >
                <h1 style={{textAlign: "center"}}>Listen and add to your collection!</h1>
                {this.renderSamples()}
                
                </div>
            }
            </>
            
        )
    }
}

function mdp(dispatch){
    // return { fetchSamples: () => dispatch(fetchSamplesAction())
              // fetchCollection: () => dispatch(fetchCollectionAction())    
    }
  

function msp(state){
    return { api: state.api,
            user: state.user,
            addedToCollection: state.addedToCollection,
            collection: state.collection,
            comments: state.comments,
         }
}
export default connect(msp, mdp)(Home)

// this.props.api