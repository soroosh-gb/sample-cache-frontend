import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
import { connect } from 'react-redux'
import { removeFromCollection } from '../redux/actions'

class CollectionSample extends React.Component{


    localClickHandler = () => {
        // console.log(this.props.id)
        this.props.remove(this.props.id)
    }
    render(){
        // console.log("this.props")
        
        return(
            <div style={{backgroundColor: "purple"}}>
                
                {/* <h1>Sample</h1> */}
                <h3>Title: {this.props.sample.name}</h3>
                {/* <h3>Artist: {this.props.creator.username}</h3> */}
                <h3>Genre: {this.props.sample.genre}</h3>
                <img src={this.props.sample.image_file} style={{height: "100px", width: "100px"}}/>
                {/* <audio  src={this.props.sample.audio_file} autoPlay />  */}
                <ReactAudioPlayer style={{backgroundColor: "black"}}
                    src={this.props.sample.audio_file}
                    controls
                    />
                    {/* add button should add the sample to Collection
                        change colection value to true when add is clicked */}
                    <button onClick={this.localClickHandler}>-</button>
            </div>
        )
    }
}

function mdp(dispatch){
    return { remove: (id) => dispatch(removeFromCollection(id))}
}


export default connect(null, mdp)(CollectionSample)