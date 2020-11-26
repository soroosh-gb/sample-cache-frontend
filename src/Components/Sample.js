import React from 'react'
import { connect } from 'react-redux'
import { addToCollectionAction } from '../redux/actions.js'
import { removeOwnSample } from '../redux/actions.js'
import { addingAction } from '../redux/actions.js'
import ReactAudioPlayer from 'react-audio-player';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


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
                
                {this.props.sample.creator.id === this.props.user.id ? 
                    <button onClick={this.removeMySample}><FontAwesomeIcon icon="trash" size="lg" /></button>
                :
                // <button onClick={this.localClickHandler}>+</button>
                    this.props.addedToCollecttion.includes(this.props.sample.id) ?
                        null   
                    : <button onClick={this.localClickHandler}><FontAwesomeIcon icon="heart" /></button>
                //                 <button onClick={this.localClickHandler}>{this.props.addedToCollecttion.includes(this.props.sample.id)? "nada" : "+"}</button>

                }
            </div>
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