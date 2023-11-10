import React from 'react'
import {NavLink} from 'react-router-dom'
import './Nav.css'

function Nav() {
    return(
        <div className='Nav'>
            <h1 className='Nav-header'>Dog Finder</h1>
            <NavLink className='Nav-link' to='/dogs/duke'>Duke</NavLink>
            <NavLink className='Nav-link' to='/dogs/perry'>Perry</NavLink>
            <NavLink className='Nav-link' to='/dogs/tubby'>Tubby</NavLink>
            <NavLink className='Nav-link' to='/dogs/whiskey'>Whiskey</NavLink>
        </div>
    )
}

export default Nav