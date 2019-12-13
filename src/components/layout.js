import React from 'react'
import { Link } from 'gatsby'
import base from './base.css'
import Container from './container'
import Navigation from './navigation'

export default ({children}) => (
  <Container>
    <Navigation />
      {children}
  </Container>
)
   
