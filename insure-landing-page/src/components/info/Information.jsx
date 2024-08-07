import React from 'react'
import PatternLeft from '/patternLeft.svg';
import styled from 'styled-components';
import snappyIcon from '/snappyIcon.svg';
import priceIcon from '/priceIcon.svg';
import peopleIcon from '/peopleIcon.svg';

const Information = () => {
  return (
    <section>
        <PatternLeftImage src={PatternLeft} alt='pattern' />
        <ContentWrapper>
            <Wrapper>
                <Separator/>
                <Title>We're different</Title>
            </Wrapper>
            {/* <EmptyDiv/> */}
            <section style={{display:'flex'}}>
            <div>
                <img src={snappyIcon} alt="snappy"/>
                <h2 >Snappy Process</h2>
                <p style={{width:'55%',  }}>Our application process can be completed in minutes, not hours. Don't get stuck filing in tedious forms.</p>
            </div>
            <div>
                <img src={priceIcon} alt="price" />
                <h2>Affordable Prices</h2>
                <p style={{width:'55%'}}>We don't want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.</p>
            </div>
            <div>
                <img src={peopleIcon} alt="person" />
                <h2>People First</h2>
                <p style={{width:'55%'}}>Our plans aren't full of conditions and caluses to prevent payouts. We make sure you're covered when you need it.</p>
            </div>
        </section>
        </ContentWrapper>

        {/* <section style={{display:'flex'}}>
            <div>
                <img src={snappyIcon} alt="snappy"/>
                <h2 >Snappy Process</h2>
                <p style={{width:'55%',  }}>Our application process can be completed in minutes, not hours. Don't get stuck filing in tedious forms.</p>
            </div>
            <div>
                <img src={priceIcon} alt="price" />
                <h2>Affordable Prices</h2>
                <p style={{width:'55%'}}>We don't want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.</p>
            </div>
            <div>
                <img src={peopleIcon} alt="person" />
                <h2>People First</h2>
                <p style={{width:'55%'}}>Our plans aren't full of conditions and caluses to prevent payouts. We make sure you're covered when you need it.</p>
            </div>
        </section> */}
    </section>
  )
}

export default Information

const Separator = styled.div`
  border:0;
  border-top:1px solid hsl(270, 9%, 17%);
  margin-bottom:50px;
  width:30%;
`
const Wrapper = styled.div`
  width: 30%;
//   border:2px solid red;
`
const ContentWrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
//   align-items:center;
  position:relative;
  padding:100px;
//   border:2px solid red;
  margin-top:180px;
 
`
const EmptyDiv = styled.div`
  width: 450px; /* Same width as the HeroImage in Hero component */
  height: auto;
  margin-left: 20px;
`
const PatternLeftImage = styled.img`
    position:absolute;
    top:350px;
    width:250px;
`
const Title = styled.h1`
    font-weight:700;
    font-family: 'DM Serif Display', serif;
    color: hsl(270, 9%, 17%);
`

