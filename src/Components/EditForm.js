import React from 'react'
import { connect } from 'react-redux'
import { editCommentAction } from '../redux/actions'

class EditForm extends React.Component{

    state = {
        text: this.props.comment.text,
    }

    localSubmitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state.text, this.props.comment.id)
    }

    // localSubmitHandler = (e) => {
        // e.preventDefault()
        // let token = localStorage.getItem("token")
        // fetch(`http://localhost:3000/api/v1/comments/${this.props.comment.id}`, {
        //     method: "PATCH",
        //     headers: {
        //         Authorization:`Bearer ${token}`,
        //         'Content-Type': 'application/json',
        //         Accept: 'application/json',
        //     },
        //     body: JSON.stringify ({text: this.state.text})
        // })
        // .then(resp => resp.json())
        // .then(payload => console.log(payload))
        // this.props.submitHandler()
    // }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        console.log(this.props.comment.id)
        // console.log(this.state)
        return(
            <div>
                <form className="editForm" onSubmit={this.localSubmitHandler}>
                    <input  value={this.state.text} className="commentText" type="text" name="text"  onChange={this.changeHandler}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }

}


function mdp(dispatch){
    return {submitHandler: (comment, id)=>dispatch(editCommentAction(comment, id))}
    // return {submitHandler: ()=>dispatch(editCommentAction())}
}

function msp(state){
    return { user: state.user,
             comments: state.comments
            }

    // console.log(state)
  }

export default connect(msp, mdp)(EditForm)