import React from 'react'
import PatternLeft from '/patternLeft.svg';
import styled from 'styled-components';
import snappyIcon from '/snappyIcon.svg';
import priceIcon from '/priceIcon.svg';
import peopleIcon from '/peopleIcon.svg';
import Work from '../info/Work';

const Information = () => {
  return (
    <section>
        <PatternLeftImage src={PatternLeft} alt='pattern' />
        <ContentWrapper>
            <Wrapper>
              <WrapperContent>
                <Separator/>
                <Title>We're different</Title>
              </WrapperContent>
                <EmptyDiv/>
            </Wrapper>
            <IconsWrapper>
              <IconsDiv>
                  <IconImage src={snappyIcon} alt="snappy"/>
                  <IconTitle>Snappy Process</IconTitle>
                  <IconDescription>Our application process can be completed in minutes, not hours. Don't get stuck filing in tedious forms.</IconDescription>
              </IconsDiv>
              <IconsDiv>
                  <IconImage src={priceIcon} alt="price"/>
                  <IconTitle>Affordable Prices</IconTitle>
                  <IconDescription>We don't want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.</IconDescription>
              </IconsDiv>
              <IconsDiv>
                  <IconImage src={peopleIcon} alt="person"/>
                  <IconTitle>People First</IconTitle>
                  <IconDescription>Our plans aren't full of conditions and caluses to prevent payouts. We make sure you're covered when you need it.</IconDescription>
              </IconsDiv>
            </IconsWrapper>
            <Work/>
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

  @media (max-width: 830px) {
    margin: auto;
    margin-bottom:50px;
  }
`
const Wrapper = styled.div`
  display:flex;
  justify-content:center;

  @media (max-width: 830px) {
    text-align:center;
  }
`
const ContentWrapper = styled.div`
  padding:100px;
  margin-top:180px;

   @media (max-width: 830px) {
  margin-top:50px;
  }
`
const EmptyDiv = styled.div`
  width: 500px;
  height: 1px;
  margin-left: 20px;

  @media (max-width: 830px) {
   display:none;
  }
`
const PatternLeftImage = styled.img`
  position:absolute;
  top:350px;
  width:250px;

  @media (max-width: 1600px) {
    display: none;
  }
`
const Title = styled.h1`
  font-weight:700;
  font-family: 'DM Serif Display', serif;
  color: hsl(270, 9%, 17%);
`
const IconsWrapper = styled.section`
  display:flex;
  margin:0 auto;
  margin-top:20px;
  width:100%;
  max-width:1050px;

  @media (max-width: 830px) {
    flex-direction: column;
    align-items: center;
     text-align: center;
  }
`
const IconsDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 20px; 
`
const IconImage = styled.img`
  margin-bottom:20px;
  width: 80px;
  height: auto; 
  
   @media (max-width: 830px) {
    align-self:center;
  }
`
const IconTitle = styled.h2`
  margin-bottom:20px;
  font-family: 'DM Serif Display', serif;
  font-weight:400;
  color: hsl(270, 9%, 17%);
`
const IconDescription = styled.p`
  font-family: 'Karla', sans-serif;
  font-size:16px;
  color:hsl(273, 4%, 51%);
`
const WrapperContent = styled.div`
  width:530px;
`