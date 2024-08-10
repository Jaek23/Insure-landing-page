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
              <div style={{width:'35%'}}>
                <Separator/>
                <Title>We're different</Title>
              </div>
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
`
const Wrapper = styled.div`
  display:flex;
  justify-content:center;
`
const ContentWrapper = styled.div`
  // position:relative;
  padding:100px;
  margin-top:180px;
  // border:2px solid red;
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
  display:flex;
  margin-top:20px;
  margin-left:325px;
  // border:2px solid red;
`
const IconsDiv = styled.div`
  margin-top:50px;
`
const IconImage = styled.img`
  margin-bottom:20px;
`
const IconTitle = styled.h2`
  margin-bottom:20px;
  font-family: 'DM Serif Display', serif;
  font-weight:400;
  color: hsl(270, 9%, 17%);
`
const IconDescription = styled.p`
  width:75%;
  font-family: 'Karla', sans-serif;
  font-size:16px;
  color:hsl(273, 4%, 51%);
`