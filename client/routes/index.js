import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const Router = () => (
  <BrowserRouter>
    <>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Route
        path={'/home'}
        component={() => <h1>THIS IS THE HOME COMPONENT</h1>}
      />
      <Route
        path={'/about'}
        component={() => <h1>THIS IS THE ABOUT COMPONENT</h1>}
      />
      <Route
        path={'/contact'}
        component={() => <h1>THIS IS THE CONTACT COMPONENT</h1>}
      />
    </>
  </BrowserRouter>
)

export default Router
