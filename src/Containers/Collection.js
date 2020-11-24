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
            if(collection[0] && collection[0].length > 0){
                let filtered = collection[0].filter(el => el.user.id === this.props.user.id)
                //this.props.user.id
                console.log(this.props.user.id)
                // console.log(collection)
                return filtered.map((el) => <CollectionSample key={el.in} sample={el.sample} creator={el.user} id={el.id}/>)
                // return collection[0].map((el) => console.log(el.sample))
            }
            else{
                // return "No sample added!"
                {<h1>"No sample added!"</h1>}
            }

        }
    
    render(){
        // console.log(this.props.collection, this.props.user.user)
        console.log(this.props.user)
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

export default connect(msp,mdp)(Collection)

