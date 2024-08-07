import React from 'react'
import heroImage from '/heroImage.jpg'
import patternRight from '/patternRight.svg'
import styled, {createGlobalStyle} from 'styled-components'
import PatternLeft from '/patternLeft.svg';

const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Karla', sans-serif;
  }
`

const Hero = () => {
  return (
    <StyledSection>
        <ContentWrapper>
          <TextWrapper>
            <Separator/>
            <Title>Humanizing your insurance.</Title>
            <Description>Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that's right for you. Ensure you and your loved ones are protected.</Description>
            <ActionButton>VIEW PLANS</ActionButton> 
          </TextWrapper>
            <HeroImage src={heroImage} alt='hero'/>
            <PatternRightImage src={patternRight} alt='pattern'/>
        </ContentWrapper>
    </StyledSection>
  )
}

export default Hero

const StyledSection = styled.section`
  background-color: hsl(256, 26%, 20%);
  postion:relative;
  height:520px;
`
const ContentWrapper = styled.div`
  display:flex;
  justify-content:center;
  position:relative;
  padding:100px;
`
const TextWrapper = styled.div`
  max-width:30%;
  // border:2px solid red;
`
const Separator = styled.div`
  border:0;
  border-top:1px solid #fff;
  margin-bottom:50px;
  width:30%
`
const Title = styled.h1`
  line-height:1.2;
  font-weight:700;
  color:#fff;
  font-family: 'DM Serif Display', serif;
  max-width:55%;
`
const Description = styled.p`
  line-height:1.5;
  margin:20px 0;
  color: hsl(0, 0%, 98%);
  font-family: 'Karla', sans-serif;
  font-size:16px;
`
const HeroImage = styled.img`
  margin-left:20px;
  width:450px;
  height:auto;
  // align-self:flex-end;
  margin-bottom:-250px;
`
const PatternRightImage = styled.img`
  position:absolute;
  top:0;
  right:0;
  width:700px;
  height:auto;
  max-width:100%;
  max-height:100%;
  padding-bottom:50px;
`
const ActionButton = styled.button`
  font-family:'Karla', sans-serif;
  font-weight:400;
  background-color:transparent;
  border:2px solid #fff;
  color:#fff;
  padding: 5px 20px;
  margin-top:10px;
`