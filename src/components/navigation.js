import React from 'react'
import { Link } from 'gatsby'

export default () => (
  <nav role="navigation">
    <ul className="navigation">
      <li className="navigationItem">
        <Link to="/">Home</Link>
      </li>
      <li className="navigationItem">
        <Link to="/blog/">Blog</Link>
      </li>
      <li className="navigationItem">
        <Link to="/art/">Art</Link>
      </li>
    </ul>
  </nav>
)
