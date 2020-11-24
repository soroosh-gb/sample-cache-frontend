import React from 'react'
import { NavLink } from 'react-router-dom';


function Navbar(){
    return (
        <div style={{ backgroundColor: 'black', borderBottom: '3px solid black', paddingTop: '20px', paddingLeft: '20px', paddingBottom: '20px', marginBottom: '3px'}}>

            <NavLink style={{ marginRight: '15px', color: 'white' }}  to="/home">Home</NavLink>
        
            <NavLink style={{ marginRight: '15px', color: 'white' }}  to="/collection">Collection</NavLink>

            <NavLink style={{ marginRight: '15px', color: 'white' }}  to="/mysamples">My Samples</NavLink>

            <NavLink style={{ marginRight: '15px', color: 'white' }}  to="/signup">Sign Up</NavLink>

            <NavLink style={{ marginRight: '15px', color: 'white' }}  to="/login">Log In</NavLink>

            <NavLink style={{ marginRight: '15px', color: 'white' }}  to="/logout">Log out</NavLink>


        </div>
    )
}

export default Navbar