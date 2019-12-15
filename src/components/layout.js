import React from 'react'
import '../assets/scss/base.scss'
import Container from './container'
import Navigation from './navigation'

export default ({children}) => (
  <Container>
    <Navigation />
      {children}
  </Container>
)
   
