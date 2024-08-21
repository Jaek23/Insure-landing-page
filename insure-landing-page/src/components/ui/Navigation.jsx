import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import styled from "styled-components";
import logo from '/logo.svg';

const Navigation = () => {
  return (
    <StyledNavbar>
        <LogoWrapper>
            <img src={logo} alt="logo" />
        </LogoWrapper>
        <Nav style={{  display:'flex'}}>
            <StyledNavLink href='#'>HOW WE WORK</StyledNavLink>
            <StyledNavLink href='#'> BLOG</StyledNavLink>
            <StyledNavLink href='#'> ACCOUNT</StyledNavLink>
            <StyledNavLink href='#'>VIEW PLANS</StyledNavLink>
        </Nav>      
    </StyledNavbar>
  )
}

export default Navigation;

const StyledNavLink = styled(Nav.Link)`
    cursor:pointer;
    color:hsl(273, 4%, 51%);
    font-weight:700;
    font-size:16px;
    font-family:'Karla', sans-serif;
    letter-spacing: 1.5px;
    &:hover {
        border:1px solid black;
        padding: 7px 11px;
        color:black;
    }

     &:link {
     color: hsl(273, 4%, 51%); 
    }

    &:visited {
    color: hsl(273, 4%, 51%);
    }

    @media (max-width: 830px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`
const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  align-items:center;

  @media (max-width: 830px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;
const LogoWrapper = styled.div`
  @media (max-width: 830px) {
    margin-bottom: 10px; /* Adds space between logo and links */
  }
`;