import React from 'react'
import { connect } from 'react-redux'
import CollectionSample from '../Components/CollectionSample'
import '../styles/Sample.css'
// import { fetchCollectionAction } from '../redux/actions.js'


class Collection extends React.Component{

    // componentDidMount(){
    //     this.props.fetchCollection()
    // }

    // getCollection = () => {
    //     this.props.fetchCollection()
    // }

        renderCollection = () => {
            let collection = this.props.collection
            // console.log(collection)
            // if(collection.length > 0){
                // console.log(collection[0][0].user.id)
                let filtered = collection.filter(el => el.user.id === this.props.user.id)
                //this.props.user.id
                // console.log(this.props.user.id)
                // console.log(collection)
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
        // console.log(this.props.collection, this.props.user.user)
        // console.log(this.props.user)
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

