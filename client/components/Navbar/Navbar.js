import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (
  <nav className="navbar navbar-expand-lg bg-white">
    <div className="container">
      <div className="navbar-translate">
        <a className="navbar-brand" href="/">
          YTube
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
          <span className="navbar-toggler-icon" />
          <span className="navbar-toggler-icon" />
        </button>
      </div>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav" />
        <form className="form-inline ml-auto">
          <div className="form-group no-border">
            <input type="text" className="form-control" placeholder="Search" />
          </div>
        </form>
        <ul className="navbar-nav navbar-right">
          <li className="nav-item">
            <Link to={'/auth/login'} className="nav-link">
              Login
            </Link>
            <Link to={'/auth/register'} className="nav-link">
              Register
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Navbar
