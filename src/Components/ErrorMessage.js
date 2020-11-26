import React from 'react'

function ErrorMessage(props) {
    console.log(props.message)
    return(
        <div>
            <h3>{props.message}</h3>
            <h3>asdasd</h3>
        </div>
    )
}

export default ErrorMessage