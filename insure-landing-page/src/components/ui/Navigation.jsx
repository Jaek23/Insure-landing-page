import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import styled from "styled-components";

const Navigation = () => {
  return (
    <>
    <Navbar style={{display:'flex', justifyContent:'space-around'}} >
        <Navbar.Brand>INSURE</Navbar.Brand>
        <Nav>
            <StyledNavLink href='#'>HOW WE WORK</StyledNavLink>
            <StyledNavLink href='#'> BLOG</StyledNavLink>
            <StyledNavLink href='#'> ACCOUNT</StyledNavLink>
            <StyledNavLink href='#'>VIEW PLANS</StyledNavLink>
        </Nav> 
    </Navbar>
</>
  )
}

export default Navigation;

const StyledNavLink = styled(Nav.Link)`
    font-weight:bold;
    cursor:pointer;
    &:hover {
        border:2px solid black
    }
`