import React from 'react'
import { connect } from 'react-redux'
import CommentList from './CommentList'
import CommentForm from '../Components/CommentForm'
import NewCommentForm from '../Components/CommentForm'
import '../styles/Comment.css'


class CommentBox extends React.Component{

    state = {
        commentForm: false
    }

    // renderCommentList = () => {
    //     let comments = this.props.comments
    //     return comments.map((el) => <CommentList key={el.ii} comment={el}/>)
    // }

    clickHandler = () => {
        this.setState(prevstate => ({commentForm: !prevstate.commentForm}))
    }

    renderCommentList = () => {
        let allComments = this.props.comments
        let thisSample = this.props.sampleId
        if(allComments.length > 0){
            let filtered = allComments.filter(el => el.sample.id == thisSample)
                return filtered.map(el => <CommentList key={el.idd} comment={el}/>)
        }else{
            return(
                <>
                <h3 style={{textAlign: "center"}}>No Comment!</h3>
                </>
            )
        }
    }

    render(){
        // console.log(this.state.commentForm)
        // console.log(this.props.sampleId)
        // console.log(this.props.comments[0].sample.id)
        return(
            <div className="commentBox">
                <h4>Comments</h4>
                {this.renderCommentList()}
                <button className="commentBtn" onClick={this.clickHandler}>Leave a comment...</button>
                {this.state.commentForm ? <CommentForm sampleId={this.props.sampleId}/> : null}
            </div>
        )
    }
}



function msp(state){
    return { 
        comments: state.comments
        }
    // console.log(state)
  }
export default connect(msp, null)(CommentBox)

