import React from 'react'

import { Container } from '../styles/components/navbar'

import logo from '../images/logo.png'

export default function Navbar() {
  return (
    <Container>
      <div className="navbar-default">
        <img src={logo} alt="sunshineapp" />
      </div>
    </Container>
  )
}
