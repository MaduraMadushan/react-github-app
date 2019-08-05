import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav class='navbar navbar-expand-sm navbar-light bg-light fixed-top'>
      <div class='container'>
        <Link to='/' class='navbar-brand'>
          <i class='fab fa-github fa-lg' /> Github
        </Link>
        <button
          class='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon' />
        </button>
        <div class='collapse navbar-collapse ' id='navbarNav'>
          <ul class='navbar-nav ml-auto'>
            <li class='nav-item'>
              <Link class='nav-link ' to='/developer'>
                Developers
              </Link>
            </li>
            <li class='nav-item'>
              <Link class='nav-link' to='/about'>
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
