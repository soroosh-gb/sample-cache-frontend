import React from 'react'
import { connect } from 'react-redux'
import { createCommentAction } from '../redux/actions'

class CommentForm extends React.Component{

    state = {
        text: "",
        sample_id: this.props.sampleId,
        user_id: this.props.user.id
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    localSubmitHandler = () => {
        this.props.submitHandler(this.state)
    }

    render(){
        // console.log(this.state)
        return(
            <div>
                <form className="commentForm" onSubmit={this.localSubmitHandler}>
                   <input className="commentText" type="text" name="text" onChange={this.changeHandler}/>
                   <input type="submit"/>
                </form>
            </div>
        )
    }
}

function mdp(dispatch){
    return {submitHandler: (comment)=>dispatch(createCommentAction(comment))}
}

function msp(state){
    return { user: state.user
            }

    // console.log(state)
  }

export default connect(msp, mdp)(CommentForm)