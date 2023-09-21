import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import '../assets/style/style.css';

function layout() {
  return (
    <>
      <Navbar sticky='top' className='my-nav'>
        <Container className='my-header'>
          <Navbar.Brand ><Link to = '/'>Logo</Link></Navbar.Brand>
          <Nav>
            <Nav.Link ><Link to ='/'>Home</Link></Nav.Link>
            <Nav.Link ><Link to ='/blogs'>Blogs</Link></Nav.Link>
            <Nav.Link ><Link to ='/contact'>Contact</Link></Nav.Link>
          </Nav>
          <Outlet />
        </Container>
      </Navbar>
    </>
  )
}

export default layout;