import React from 'react'
import { connect } from 'react-redux'
import { addToCollectionAction } from '../redux/actions.js'
import ReactAudioPlayer from 'react-audio-player';


class Sample extends React.Component{

    localClickHandler = () => {
        // console.log(this.props.user.id)
        this.props.addToCollection(this.props.sample.id, this.props.user.id)
    }
    render(){
        // console.log(this.props.sample.id)
        return(
            <div style={{backgroundColor: "purple"}}>
                
                {/* <h1>Sample</h1> */}
                <h3>Title: {this.props.sample.name}</h3>
                <h3>Artist: {this.props.sample.creator.username}</h3>
                <h3>Genre: {this.props.sample.genre}</h3>
                <img src={this.props.sample.image_file} style={{height: "100px", width: "100px"}}/>
                {/* <audio  src={this.props.sample.audio_file} autoPlay />  */}
                <ReactAudioPlayer style={{backgroundColor: "black"}}
                    src={this.props.sample.audio_file}
                    controls
                    />
                    {/* add button should add the sample to Collection
                        change colection value to true when add is clicked */}
                {this.props.sample.creator.id === this.props.user.id ? 
                null
                :
                    <button onClick={this.localClickHandler}>+</button>
                }
            </div>
        )
    }

}

// clickHandler: (sample)=>dispatch(addToCollection(sample))
// export default Sample
// connect(msp, mdp)(Sample)
function mdp(dispatch){
    return { addToCollection: (sampleId, userId) => dispatch(addToCollectionAction(sampleId, userId))}
}

function msp(state){
    return { 
        api: state.api,
        user: state.user,
        collection: state.collection,
        }
    // console.log(state)
  }
export default connect(msp, mdp)(Sample)