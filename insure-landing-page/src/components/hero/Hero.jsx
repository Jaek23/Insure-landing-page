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
            <WrapperContent>
            <SeparatorWrapper>
              <Separator/>
            </SeparatorWrapper>
              <Title>Humanizing your insurance.</Title>
              <Description>Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that's right for you. Ensure you and your loved ones are protected.</Description>
              <ActionButton>VIEW PLANS</ActionButton> 
            </WrapperContent>
            <HeroImage src={heroImage} alt='hero'/>
          </TextWrapper>
          <PatternRightImage src={patternRight} alt='pattern'/>
        </ContentWrapper>
    </StyledSection>
  )
}

export default Hero

const StyledSection = styled.section`
  background-color: hsl(256, 26%, 20%);
  postion:relative;

   @media (max-width: 830px) {
    padding: 30px 15px;
  }
`
const ContentWrapper = styled.div`
  position:relative;
  padding:100px;

    @media (max-width: 830px) {
    padding: 50px 0;
  }
`
const TextWrapper = styled.div`
  display:flex;
  justify-content:center;

   @media (max-width: 830px) {
    align-content:center;
    text-align:center;
  }
`
const Separator = styled.div`
  border:0;
  border-top:1px solid #fff;
  margin-bottom:50px;
  width:30%
`
const SeparatorWrapper = styled.div`
  @media (max-width: 830px) {
    width: 100%; /* Ensures it takes up full width of the parent */
    display:flex;
    justify-content:center;
  }
`
const Title = styled.h1`
  line-height:1.2;
  font-weight:700;
  color:#fff;
  font-family: 'DM Serif Display', serif;
  max-width:55%;

  @media (max-width: 830px) {
    max-width: 100%;
    font-size: 28px;
  }
`
const Description = styled.p`
  line-height:1.5;
  margin:20px 0;
  color: hsl(0, 0%, 98%);
  font-family: 'Karla', sans-serif;
  font-size:16px;

  @media (max-width: 830px) {
    max-width: 100%;
    font-size: 14px;
  }
`
const HeroImage = styled.img`
  margin-left:20px;
  width:500px;
  height:auto;
  margin-bottom:-250px;

  @media (max-width: 830px) {
   display:none;
  }
`
const PatternRightImage = styled.img`
  position:absolute;
  top:0;
  right:0;
  width:600px;
  height:auto;
  max-width:100%;
  max-height:100%;
  padding-bottom:50px;

   @media (max-width: 1600px) {
    display: none; /* You can choose to hide this on smaller screens */
  }
`
const ActionButton = styled.button`
  font-family:'Karla', sans-serif;
  font-weight:400;
  background-color:transparent;
  border:2px solid #fff;
  color:#fff;
  padding: 5px 20px;
  margin-top:10px;

  @media (max-width: 830px) {
    padding: 10px 30px;
    font-size: 14px;
  }
`
const WrapperContent = styled.div`
  width:530px;
`