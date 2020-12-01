import React from 'react'
import { connect } from 'react-redux'
import EditForm from './EditForm'
import CommentForm from './CommentForm'
import { deleteCommentAction } from '../redux/actions'

class Comment extends React.Component{

    state = {
        edit: false
    }

    clickHandler = () => {
        this.setState(prevstate => ({edit: !prevstate.edit}))
    }


    editLocalHandler = (e) => {
        // console.log(this.props.comment)
    }

    localDeleteHandler = () => {
        this.props.deleteHandler(this.props.comment.id)
    }

    render(){
        // console.log(this.props.author, this.props.text)
        // console.log(this.state)
        return(
            <div className="comment">
                {/* <h1>Comment</h1> */}
                <h3 className="author">{this.props.author.username}</h3>
                <h5 className="text">{this.props.text}</h5>

                {this.props.author.id === this.props.user.id ?                 
                    <button className="btn" onClick={this.clickHandler}>Edit Comment</button> 
                :
                    null
                }
                
                {this.props.sample.user_id === this.props.user.id || this.props.author.id === this.props.user.id ?
                <button className="btn" onClick={this.localDeleteHandler}>Delete Comment</button>
                :
                null
                }
                
                {this.state.edit ? <EditForm comment={this.props.comment}/> : null }
            </div>
        )
    }
}

function mdp(dispatch){
    return { deleteHandler: (commentId) => dispatch(deleteCommentAction(commentId)),
             
            }
}

function msp(state){
    return { 
        user: state.user,
        comments: state.comments,
        }
    
  }
export default connect(msp, mdp)(Comment)