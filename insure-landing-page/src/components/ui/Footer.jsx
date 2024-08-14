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
   <section style={{position: 'relative',backgroundColor:'hsl(0, 0%, 98%)'}}>
    <FooterPattern src={footerPattern} alt="footer-pattern" />
    <div style={{width:'75%', marginLeft:'325px', padding:100}}>
    <div style={{display:'flex', justifyContent:'space-between'}}>    
        <img src={logo} alt="logo" />
        <div style={{display:'flex', gap:'20px'}}>
            <img src={facebook} alt="facebook-logo" />
            <img src={twitter} alt="twitter-logo" />
            <img src={pintrest} alt="pintrest" />
            <img src={instagram} alt="instragram-logo" />
        </div>
    </div> 
    <Separator/>
    <div style={{display:'flex', justifyContent:'space-around' }}>
        <ul style={{listStyleType:'none',}}>
            <li>OUR COMPANY</li>
            <li >HOW WE WORK</li>
            <li>WHY INSURE?</li>
            <li>VIEW PLANS</li>
            <li>REVIEWS</li>
        </ul>
        <ul style={{listStyleType:'none'}}>
            <li>HELP ME</li>
            <li>FAQ</li>
            <li>TERMS OF USE</li>
            <li>PRIVACY POLICY</li>
            <li>COOKIES</li>
        </ul>
        <ul style={{listStyleType:'none'}}>
            <li>CONTACT</li>
            <li>SALES</li>
            <li>SUPPORT</li>
            <li>LIVE CHAT</li>
        </ul>
        <ul style={{listStyleType:'none'}}>
            <li>OTHERS</li>
            <li>CAREERS</li>
            <li>PRESS</li>
            <li>LICENSES</li>
        </ul>
    </div>
    </div>
   </section>
  )
}

export default Footer;

const Separator = styled.div`
    border-bottom:2px solid black;
    width:100%;
    display:inline-block;
`
const FooterPattern = styled.img`
  position: absolute;
  top: 0;
  left: 0;
`;