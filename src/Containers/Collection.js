import React from 'react'
import { connect } from 'react-redux'
import CollectionSample from '../Components/CollectionSample'
import '../styles/Collection.css'



class Collection extends React.Component{

 
        renderCollection = () => {
            let collection = this.props.collection
            
                let filtered = collection.filter(el => el.user.id === this.props.user.id)
                
             if(filtered.length > 0){  
                return filtered.map((el) => <CollectionSample key={el.in} sample={el.sample} creator={el.user} id={el.id}/>)
            }else {
                return(
                    <>
                    <h3 style={{textAlign: "center"}}>No sample is added to collection!</h3>
                    </>
                )
            }

        }
    
    render(){
       
        return(
            <>
                {this.props.collection === 0 ?  
                    <>
                        <h1 style={{textAlign: "center"}}>Loading collection...</h1>
                    </>
                :
                    <>
                        {this.renderCollection()}
                    </>
             }
            </>

        )
    }
}


function mdp(dispatch){
    return { 
        // fetchCollection: () => dispatch(fetchCollectionAction())    
    }
  }
  
function msp(state){
    return { 
        api: state.api,
        user: state.user,
        collection: state.collection,
        }
  }

export default connect(msp,mdp)(Collection)

