import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
import { connect } from 'react-redux'
import { removeFromCollection, removingAction } from '../redux/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CommentBox from '../Containers/CommentBox'
import '../styles/CollectionSample.css'
import '../styles/CommentBox.css'

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
                
                <p className="info">
                
                    <p>{this.props.sample.name}</p>
                    
                    {/* <p>Genre: {this.props.sample.genre}</p> */}
            
                </p>
                <img className="image" src={this.props.sample.image_file} />
                
                {/* <h3 className="info">{this.props.sample.name}</h3>
            
                <h3 className="info">Genre: {this.props.sample.genre}</h3>
                <img src={this.props.sample.image_file} className="image"/>
                 */}
                {/* <p> */}
                <ReactAudioPlayer className="player" 
                    src={this.props.sample.audio_file}
                    controls
                    
                    />
                        <button className="icons" onClick={this.localClickHandler} style={{cursor: "pointer"}}><FontAwesomeIcon icon="trash" size="lg" /></button>

                    <p></p>
                    <div className="commentBox">
                    <CommentBox sampleId={this.props.sample.id} />
                    </div> 
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