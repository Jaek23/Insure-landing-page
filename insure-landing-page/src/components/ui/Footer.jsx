import React from 'react'
import logo from '/logo.svg';
import footerPattern from '/footerPattern.svg';
import facebook from '/facebook.svg';
import instagram from '/instagram.svg';
import pintrest from '/pintrest.svg';
import twitter from '/twitter.svg';
import styled from 'styled-components';

const Footer = () => {
  return (
   <FooterSection>
    <FooterPattern src={footerPattern} alt="footer-pattern" />
    <FooterContent>
        <IconsWrapper>    
            <img src={logo} alt="logo" />
            <Icons>
                <img src={facebook} alt="facebook-logo" />
                <img src={twitter} alt="twitter-logo" />
                <img src={pintrest} alt="pintrest" />
                <img src={instagram} alt="instragram-logo" />
            </Icons>
        </IconsWrapper> 
        <Separator/>
        <FooterInformation>
            <ListSection>
                <FirstList>OUR COMPANY</FirstList>
                <List>HOW WE WORK</List>
                <List>WHY INSURE?</List>
                <List>VIEW PLANS</List>
                <List>REVIEWS</List>
            </ListSection>
            <ListSection>
                <FirstList>HELP ME</FirstList>
                <List>FAQ</List>
                <List>TERMS OF USE</List>
                <List>PRIVACY POLICY</List>
                <List>COOKIES</List>
            </ListSection>
            <ListSection>
                <FirstList>CONTACT</FirstList>
                <List>SALES</List>
                <List>SUPPORT</List>
                <List>LIVE CHAT</List>
            </ListSection>
            <ListSection>
                <FirstList>OTHERS</FirstList>
                <List>CAREERS</List>
                <List>PRESS</List>
                <List>LICENSES</List>
            </ListSection>
        </FooterInformation>
    </FooterContent>
   </FooterSection>
  )
}

export default Footer;

const Separator = styled.div`
    border-bottom:2px solid hsl(273, 4%, 51%);
    width:100%;
    display:inline-block;
`
const FooterPattern = styled.img`
    position: absolute;
    top: 0;
    left: 0;

     @media (max-width: 1024px) {
    display: none;
  }
`
const FooterSection = styled.section`
    position:relative;
    background-color:hsl(0, 0%, 98%);

     @media (max-width: 1024px) {
    padding: 20px 10px;
  }
`
const FooterContent = styled.div`
    padding-top:50px;
    padding-bottom:50px;
    max-width:1050px;
    width:100%;
    margin:auto;

     @media (max-width: 1024px) {
    padding-top: 30px;
    padding-bottom: 30px;
  }
`
const IconsWrapper = styled.div`
    display:flex;
    justify-content:space-between;

    @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }
`
const Icons = styled.div`
    display:flex;
    gap:20px;
    cursor:pointer;

    @media (max-width: 1024px) {
    margin-top: 15px;
  }
`
const FooterInformation = styled.div`
    display:flex;
    justify-content:space-between;
`
const ListSection = styled.ul`
    list-style-type:none;
    font-family:Karla, serif
`
const FirstList = styled.li`
    margin-top:20px;
    margin-bottom:20px;
    color:hsl(273, 4%, 51%);
    font-weight:bold;
`
const List = styled.li`
    color:hsl(270, 9%, 17%);
    font-weight:bold;
    margin-Bottom:10px;
    cursor:pointer;
`