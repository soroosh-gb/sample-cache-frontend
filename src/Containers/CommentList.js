import React from 'react'
import { connect } from 'react-redux'
import Comment from '../Components/Comment'
import '../styles/CommentList.css'



class CommentList extends React.Component{

    render(){
        // console.log(this.props.comment)
        return(
            <div className="commentList">
                {/* <h1>CommentList</h1> */}
                <Comment comment={this.props.comment} author={this.props.comment.user} text={this.props.comment.text} sample={this.props.comment.sample}/>
            </div>
        )
    }
}


export default CommentList

