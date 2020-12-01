import React from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Navbar(props){
    // console.log(props.user)
    return (
        <div style={{ backgroundColor: 'black', borderBottom: '3px solid black', paddingTop: '20px', paddingLeft: '20px', paddingBottom: '20px', marginBottom: '3px',height: "40px"}}>

            <FontAwesomeIcon icon="compact-disc" size="3x" spin className="disc"/>
            <p style={{color: "white", float: "left"}}>Sample Cache</p>
            
        {props.user ?  
        <>
            <NavLink style={{ marginRight: '15px', color: 'white',float: "right", marginTop: "15px" }}  to="/logout">Log out</NavLink>

            <NavLink style={{ marginRight: '15px', color: 'white',float: "right", marginTop: "15px" }}  to="/mysamples">My Samples</NavLink>
            
            <NavLink style={{ marginRight: '15px', color: 'white', float: "right", marginTop: "15px" }}  to="/collection">Collection</NavLink>

            <NavLink style={{ marginRight: '15px', color: 'white', float: "right", marginTop: "15px" }}  to="/home">Home</NavLink>


        </>
        :
        <>
            <NavLink style={{ marginRight: '15px', color: 'white' }}  to="/signup">Sign Up</NavLink>

            <NavLink style={{ marginRight: '15px', color: 'white' }}  to="/login">Log In</NavLink>

        </>
        }
        </div>
    )
}

function msp(state){
    return { 
        user: state.user
        }
  }

export default connect(msp,null)(Navbar)
