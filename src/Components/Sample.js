import React from 'react'
import { connect } from 'react-redux'
import { addToCollectionAction } from '../redux/actions.js'
import { removeOwnSample } from '../redux/actions.js'
import { addingAction } from '../redux/actions.js'
import ReactAudioPlayer from 'react-audio-player';
import '../styles/Sample.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CommentBox from '../Containers/CommentBox.js'


class Sample extends React.Component{

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
        
        // console.log(this.props.user)

        return(
            <>
            {this.props.user ?
                <>
            <div className="card">
                
                {/* <h1>Sample</h1> */}
            
                <img className="image" src={this.props.sample.image_file} />
                <h3 className="info">{this.props.sample.name}</h3>
                <h3 className="info">By: {this.props.sample.creator.username}</h3>
                <h3 className="info">Genre: {this.props.sample.genre}</h3>
                {/* <audio  src={this.props.sample.audio_file} autoPlay />  */}
                <p>
                <ReactAudioPlayer className="player"
                    src={this.props.sample.audio_file}
                    controls
                    />
                
                {/* </p> */}
                {this.props.sample.creator.id === this.props.user.id ? 
                    <button className="icons" onClick={this.removeMySample}><FontAwesomeIcon icon="trash" size="lg" /></button>
                :
                // <button onClick={this.localClickHandler}>+</button>
                    this.props.addedToCollecttion.includes(this.props.sample.id) ?
                        null   
                    : <button className="icons" onClick={this.localClickHandler}><FontAwesomeIcon icon="heart" /></button>
                //                 <button onClick={this.localClickHandler}>{this.props.addedToCollecttion.includes(this.props.sample.id)? "nada" : "+"}</button>

                }
                </p>
                <p>
                    <CommentBox sampleId={this.props.sample.id} />
                </p>
                
               
                {/* <CommentBox sampleId={this.props.sample.id} /> */}
            </div>
            
               
                {/* <CommentBox comments={this.props.sample.comments}/> */}
                {/* <CommentBox sampleId={this.props.sample.id}/> */}
               
                </>
            :
                <>
                   <h1></h1>
                </>

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
        addedToCollecttion: state.addedToCollecttion
        }
    // console.log(state)
  }
export default connect(msp, mdp)(Sample)