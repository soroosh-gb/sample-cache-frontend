import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
import { connect } from 'react-redux'
import { removeFromCollection, removingAction } from '../redux/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CommentBox from '../Containers/CommentBox'
import '../styles/Sample.css'

class CollectionSample extends React.Component{


    localClickHandler = () => {
        // console.log(this.props.id)
        this.props.remove(this.props.id)

        this.props.removing(this.props.sample.id)
    }
    render(){
        // console.log(this.props)
        
        return(
            <div className="card">
                
                {/* <h1>Sample</h1> */}
                <h3 className="info">{this.props.sample.name}</h3>
                {/* <h3>Artist: {this.props.creator.username}</h3> */}
                <h3 className="info">Genre: {this.props.sample.genre}</h3>
                <img src={this.props.sample.image_file} className="image"/>
                {/* <audio  src={this.props.sample.audio_file} autoPlay />  */}
                <p>
                <ReactAudioPlayer className="player" 
                    src={this.props.sample.audio_file}
                    controls
                    
                    />
                        <button className="icons" onClick={this.localClickHandler}><FontAwesomeIcon icon="trash" size="lg" /></button>

                    {/* add button should add the sample to Collection
                        change colection value to true when add is clicked */}
                </p>   
                    {/* <button className="icons" onClick={this.localClickHandler}><FontAwesomeIcon icon="trash" size="lg" /></button> */}
            
                <p>
                    <CommentBox sampleId={this.props.sample.id} />
                </p>        
            </div>
        )
    }
}

function mdp(dispatch){
    return { remove: (id) => dispatch(removeFromCollection(id)),
             removing: (id) => dispatch(removingAction(id))        
    }
}


export default connect(null, mdp)(CollectionSample)