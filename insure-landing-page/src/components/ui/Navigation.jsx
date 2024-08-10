import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import styled from "styled-components";
import logo from '/logo.svg';

const Navigation = () => {
  return (
    <Navbar style={{display:'flex', justifyContent:'center', padding:'20px'}}>
        <LogoContainer>
            <img src={logo} alt="logo" />
        </LogoContainer>
        <Nav style={{  display:'flex'}}>
            <StyledNavLink href='#'>HOW WE WORK</StyledNavLink>
            <StyledNavLink href='#'> BLOG</StyledNavLink>
            <StyledNavLink href='#'> ACCOUNT</StyledNavLink>
            <StyledNavLink href='#'>VIEW PLANS</StyledNavLink>
        </Nav>      
    </Navbar>
  )
}

export default Navigation;

const StyledNavLink = styled(Nav.Link)`
    cursor:pointer;
    color:hsl(273, 4%, 51%);
    font-weight:700;
    font-size:16px;
    font-family:'Karla', sans-serif;
    // padding: 8px 12px;
     letter-spacing: 1.5px;
    &:hover {
        border:1px solid black;
         padding: 7px 11px;
    }
`
const LogoContainer = styled.div`
  width: 35%;
`;