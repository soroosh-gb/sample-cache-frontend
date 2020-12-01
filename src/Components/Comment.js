import React from 'react'
import { connect } from 'react-redux'

class Comment extends React.Component{

    render(){
        // console.log(this.props.author, this.props.text)
        return(
            <div className="comment">
                {/* <h1>Comment</h1> */}
                <h3 className="author">{this.props.author.username}</h3>
                <h5 className="text">{this.props.text}</h5>
                {this.props.author.id === this.props.user.id ?
                    <>                  
                    <button>Edit Comment</button> 

                    {/* <button>Delete Comment</button> */}
                    </>
                :
                    null
                }
                
                {this.props.sample.user_id === this.props.user.id || this.props.author.id === this.props.user.id ?
                <button>Delete Comment</button>
                :
                null
                }  
            </div>
        )
    }
}


function msp(state){
    return { 
        user: state.user
        }
    
  }
export default connect(msp, null)(Comment)