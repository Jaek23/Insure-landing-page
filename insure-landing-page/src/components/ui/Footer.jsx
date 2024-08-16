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
    <div style={{paddingTop:'50px', paddingBottom:'50px', maxWidth:'1050px', width:'100%', margin:'auto'}}>
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
    <div style={{display:'flex', justifyContent:'space-between' }}>
        <ul style={{listStyleType:'none', fontFamily:'Karla, serif', fontSize:'16px'}}>
            <li style={{marginTop:'20px', marginBottom:'20px', color:'hsl(273, 4%, 51%)', fontWeight:'bold'}}>OUR COMPANY</li>
            <li style={{color:'hsl(270, 9%, 17%)', fontWeight:'bold', marginBottom:'10px'}}>HOW WE WORK</li>
            <li style={{color:'hsl(270, 9%, 17%)', fontWeight:'bold', marginBottom:'10px'}}>WHY INSURE?</li>
            <li style={{color:'hsl(270, 9%, 17%)', fontWeight:'bold', marginBottom:'10px'}}>VIEW PLANS</li>
            <li style={{color:'hsl(270, 9%, 17%)', fontWeight:'bold'}}>REVIEWS</li>
        </ul>
        <ul style={{listStyleType:'none', fontFamily:'Karla, serif'}}>
            <li style={{marginTop:'20px', marginBottom:'20px', color:'hsl(273, 4%, 51%)', fontWeight:'bold'}}>HELP ME</li>
            <li style={{color:'hsl(270, 9%, 17%)', fontWeight:'bold', marginBottom:'10px'}}>FAQ</li>
            <li style={{color:'hsl(270, 9%, 17%)', fontWeight:'bold', marginBottom:'10px'}}>TERMS OF USE</li>
            <li style={{color:'hsl(270, 9%, 17%)', fontWeight:'bold', marginBottom:'10px'}}>PRIVACY POLICY</li>
            <li style={{color:'hsl(270, 9%, 17%)', fontWeight:'bold'}}>COOKIES</li>
        </ul>
        <ul style={{listStyleType:'none', fontFamily:'Karla, serif'}}>
            <li style={{marginTop:'20px', marginBottom:'20px', color:'hsl(273, 4%, 51%)', fontWeight:'bold'}}>CONTACT</li>
            <li style={{color:'hsl(270, 9%, 17%)', fontWeight:'bold', marginBottom:'10px'}}>SALES</li>
            <li style={{color:'hsl(270, 9%, 17%)', fontWeight:'bold', marginBottom:'10px'}}>SUPPORT</li>
            <li style={{color:'hsl(270, 9%, 17%)', fontWeight:'bold'}}>LIVE CHAT</li>
        </ul>
        <ul style={{listStyleType:'none', fontFamily:'Karla, serif'}}>
            <li style={{marginTop:'20px', marginBottom:'20px', color:'hsl(273, 4%, 51%)', fontWeight:'bold'}}>OTHERS</li>
            <li style={{color:'hsl(270, 9%, 17%)', fontWeight:'bold', marginBottom:'10px'}}>CAREERS</li>
            <li style={{color:'hsl(270, 9%, 17%)', fontWeight:'bold', marginBottom:'10px'}}>PRESS</li>
            <li style={{color:'hsl(270, 9%, 17%)', fontWeight:'bold'}}>LICENSES</li>
        </ul>
    </div>
    </div>
   </section>
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
`;