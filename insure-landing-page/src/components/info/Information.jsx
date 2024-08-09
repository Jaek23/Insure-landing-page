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
              <div style={{width:'35%'}}>
                <Separator/>
                <Title>We're different</Title>
              </div>
                <EmptyDiv/>
            </Wrapper>
            <section style={{display:'flex', marginTop:'20px', marginLeft:'325px'}}>
              <div style={{marginTop:'50px'}}>
                  <img src={snappyIcon} alt="snappy" style={{marginBottom:'20px'}}/>
                  <h2 style={{marginBottom:'20px'}}>Snappy Process</h2>
                  <p style={{width:'75%'}}>Our application process can be completed in minutes, not hours. Don't get stuck filing in tedious forms.</p>
              </div>
              <div style={{marginTop:'50px'}}>
                  <img src={priceIcon} alt="price" style={{marginBottom:'20px'}} />
                  <h2 style={{marginBottom:'20px'}}>Affordable Prices</h2>
                  <p style={{width:'75%'}}>We don't want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.</p>
              </div>
              <div style={{marginTop:'50px'}}>
                  <img src={peopleIcon} alt="person" style={{marginBottom:'20px'}} />
                  <h2 style={{marginBottom:'20px'}}>People First</h2>
                  <p style={{width:'75%'}}>Our plans aren't full of conditions and caluses to prevent payouts. We make sure you're covered when you need it.</p>
              </div>
            </section>
        </ContentWrapper>
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
  // width: 35%;
  // border:2px solid red;
  display:flex;
  justify-content:center;
`
const ContentWrapper = styled.div`
  // display:flex;
  // justify-content:center;
  // align-items: center;
  position:relative;
  padding:100px;
  margin-top:180px;
`
const EmptyDiv = styled.div`
  width: 450px; /* Same width as the HeroImage in Hero component */
  height: 1px;
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
const IconsWrapper = styled.section`
  display: flex;
  // justify-content: center;
  margin-left: calc(30% + 20px); /* Align with ContentWrapper and EmptyDiv */
  // height: auto;
  // gap: 20px;

  div {
    display: flex;
    flex-direction: column;
    // align-items: center;
    // text-align: center;

    img {
      width: 50px;
      height: auto;
      margin-bottom: 20px;
    }

    h2 {
      font-weight: 700;
      font-family: 'DM Serif Display', serif;
      color: hsl(270, 9%, 17%);
      margin-bottom: 10px;
    }

    p {
      font-family: 'Karla', sans-serif;
      font-size: 16px;
      line-height: 1.5;
      color: hsl(270, 9%, 17%);
    }
  }
`
