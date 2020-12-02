import React from 'react'
import { connect } from 'react-redux'
import CommentList from './CommentList'
import CommentForm from '../Components/CommentForm'
import NewCommentForm from '../Components/CommentForm'
import '../styles/CommentBox.css'


class CommentBox extends React.Component{

    state = {
        commentForm: false,
        showComments: false,
    }

    // renderCommentList = () => {
    //     let comments = this.props.comments
    //     return comments.map((el) => <CommentList key={el.ii} comment={el}/>)
    // }

    clickHandler = () => {
        this.setState(prevstate => ({commentForm: !prevstate.commentForm}))
    }

    showCommentsClickHandler = () => {
        this.setState(prevstate => ({showComments: !prevstate.showComments}))
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
            <div>
                {/* <p>Comments</p> */}
                <button className="showCommentsBtn" onClick={this.showCommentsClickHandler} style={{cursor: "pointer"}}>Show Comments</button>
                {this.state.showComments ? 

                this.renderCommentList()
                
                :
                null
                 }
            {this.state.showComments ?     
            <button className="commentBtn" onClick={this.clickHandler} style={{cursor: "pointer"}}>Leave a comment...</button>
            :
            null}
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

