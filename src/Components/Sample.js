import React from 'react'
import { connect } from 'react-redux'
import { addToCollectionAction } from '../redux/actions.js'
import { removeOwnSample } from '../redux/actions.js'
import { addingAction } from '../redux/actions.js'
import ReactAudioPlayer from 'react-audio-player';
import '../styles/Sample.css'
import '../styles/CommentBox.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CommentBox from '../Containers/CommentBox.js'


class Sample extends React.Component{

    state = {
        liked: false,
        loop: false,
    }
    localClickHandler = () => {
        // console.log(this.props.user.id)
        this.props.addToCollection(this.props.sample.id, this.props.user.id)

        this.props.adding(this.props.sample.id)
    }

    removeMySample = () => {
        // console.log(this.props.sample.id)
        this.props.removeMine(this.props.sample.id)
    }
    render(){
        return(
            <>
            {this.props.user ?
            <>
            <div className="card">
                
                {/* <h1>Sample</h1> */}
            <p className="info">
                <p>{this.props.sample.name}</p>
                <p>By: {this.props.sample.creator.username}</p>
                {/* <p>Genre: {this.props.sample.genre}</p> */}
            </p>
                <img className="image" src={this.props.sample.image_file} />
                
                

                  
                {this.props.sample.creator.id === this.props.user.id ? 
                    <button className="icons" onClick={this.removeMySample} style={{cursor: "pointer"}}><FontAwesomeIcon icon="trash" size="lg" /></button>
                :
                
                    this.props.addedToCollecttion.includes(this.props.sample.id) ?
                    <FontAwesomeIcon className="icons" icon="check-square" size="lg"/>  
                    : <button className="icons" onClick={this.localClickHandler} style={{cursor: "pointer"}}><FontAwesomeIcon icon="heart" size="lg"/></button>
                    
                }
                <ReactAudioPlayer className="player"
                    src={this.props.sample.audio_file}
                    controls
                />
                <p></p>
                    <div className="commentBox">
                    <CommentBox sampleId={this.props.sample.id} />
                    </div>             

            </div>

            </>
            :
                   null
            }
            </>

        )
    }

}

// clickHandler: (sample)=>dispatch(addToCollection(sample))
// export default Sample
// connect(msp, mdp)(Sample)
function mdp(dispatch){
    return { addToCollection: (sampleId, userId) => dispatch(addToCollectionAction(sampleId, userId)),
             removeMine: (id) => dispatch(removeOwnSample(id)),
             adding: (id) => dispatch(addingAction(id)) 
            }
}

function msp(state){
    return { 
        api: state.api,
        user: state.user,
        collection: state.collection,
        addedToCollecttion: state.addedToCollecttion,
        comments: state.comments,
        }
    // console.log(state)
  }
export default connect(msp, mdp)(Sample)