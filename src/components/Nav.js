import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg ">
            <a className="navbar-brand" href="#">Would You?</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink to='/' exact className='nav-link' activeClassName='active'>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/new' className='nav-link' activeClassName='active'>
                            New Poll
                        </NavLink>
                    </li>
                </ul>
                <span className="navbar-text">
                    Login
                </span>
            </div>
        </nav>
    )
}

export default Nav