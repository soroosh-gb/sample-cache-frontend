import React from 'react'
import { connect } from 'react-redux'
import CollectionSample from '../Components/CollectionSample'
import { Redirect } from 'react-router-dom'
import { fetchCollectionAction } from '../redux/actions.js'


class Collection extends React.Component{

    componentDidMount(){
        this.props.fetchCollection()
    }

        renderCollection = () => {
            let collection = this.props.collection
            // console.log(collection)
            return collection[0].map((el) => <CollectionSample key={el.id} sample={el.sample} creator={el.user}/>)
            // return collection[0].map((el) => console.log(el.sample))
        }
    
    render(){
        // console.log(this.props.collection, this.props.user.user)
        console.log(this.props.collectiion)
        return(
            <>
                {this.props.user ?  
                <div>
                <h1>Collection</h1>
                {this.renderCollection()}
                </div>
                :
                <Redirect to="/login"/>
             }
            </>

        )
    }
}
// if token! send a fetch to usersamples and  get all the samples which was liked by this user
// function mdp(dispatch){
//     return {
//         fetchCollection: (user) => dispatch(fetchCollection(user))
//             }
// }

function mdp(dispatch){
    return { 
              fetchCollection: () => dispatch(fetchCollectionAction())    
    }
  }
  
function msp(state){
    return { 
        api: state.api,
        user: state.user,
        collection: state.collection}
  }

export default connect(msp, mdp)(Collection)

