import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Heder = () => {
  return (
    <Navbar>
       <Container>
        <Link to='/'>
            <Navbar.Brand>Home</Navbar.Brand>
            </Link>
            <Link to='add'>
            <Navbar.Brand>AddForm</Navbar.Brand>
            </Link>
            <Link to='about'>
            <Navbar.Brand>Aboutus</Navbar.Brand>
            </Link>
            <Link to='contacts'>
            <Navbar.Brand>Contacts</Navbar.Brand>
            </Link>
        
       </Container>
    </Navbar>
  )
}

export default Heder