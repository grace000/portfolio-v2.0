import React from 'react'
import { Link } from 'gatsby'

export default () => (
  <nav role="navigation">
    <ul className="navigation">
      <li className="navigation-item">
        <Link to="/">Home</Link>
      </li>
      <li className="navigation-item">
        <Link to="/blog">Blog</Link>
      </li>
      <li className="navigation-item">
        <Link to="/art">Art</Link>
      </li>
      <li className="navigation-item">
        <Link to="/me">Me</Link>
      </li>
    </ul>
  </nav>
)
