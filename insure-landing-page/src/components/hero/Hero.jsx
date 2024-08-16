import React from 'react'
import heroImage from '/heroImage.jpg'
import patternRight from '/patternRight.svg'
import styled, {createGlobalStyle} from 'styled-components'

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
            <div style={{width:'530px'}}>
            <Separator/>
            <Title>Humanizing your insurance.</Title>
            <Description>Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that's right for you. Ensure you and your loved ones are protected.</Description>
            <ActionButton>VIEW PLANS</ActionButton> 
            </div>
            <HeroImage src={heroImage} alt='hero'/>
          </TextWrapper>
          {/* <HeroImage src={heroImage} alt='hero'/> */}
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
  position:relative;
  padding:100px;
  // display:flex;
  // justify-content:center;
`
const TextWrapper = styled.div`
  display:flex;
  justify-content:center;
  // flex-direction:column;
  // border:2px solid red;
  // width:35%;
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
  // border:2px solid red;
`
const Description = styled.p`
  line-height:1.5;
  margin:20px 0;
  color: hsl(0, 0%, 98%);
  font-family: 'Karla', sans-serif;
  font-size:16px;
  // width:35%;
  // border:2px solid red;
`
const HeroImage = styled.img`
  margin-left:20px;
  width:500px;
  height:auto;
  margin-bottom:-250px;
  // border:2px solid red;
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
  // border:2px solid red;
`