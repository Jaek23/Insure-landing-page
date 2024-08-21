import React from 'react'
import styled from 'styled-components';
import patternRight from '/patternRight.svg';

const Work = () => {
  return (
    <Section>
        <ContentWrapper>
            <WorkTitle>Find out more <br/> about how we work</WorkTitle>
            <WorkButton>HOW WE WORK</WorkButton>
        </ContentWrapper>
        <Pattern src={patternRight} alt='pattern'/>
    </Section>
  )
}

export default Work

const Section = styled.section`
    width:100%;
    max-width:1050px;
    background-color: hsl(256, 26%, 20%);
    position:relative;
    overflow:hidden;
    padding:80px;
    margin: 100px auto;

    @media (max-width: 1024px) {
    padding: 40px 20px;
    margin: 50px auto;
  }
`
const ContentWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    color:#fff;
    align-items:center;

    @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`
const Pattern = styled.img`
    position:absolute;
    top:0;
    right:0;

    @media (max-width: 1440px) {
    display: none;
  }
`
const WorkTitle = styled.h1`
    font-family:DM Serif Display, serif;
    font-weight:700;

    @media (max-width: 1024px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
`
const WorkButton = styled.button`
    font-family:Karla, serif;
    font-weight:400;
    background-color:transparent;
    border:2px solid #fff;
    color:#fff;
    padding:5px 20px;
    cursor:pointer;

    @media (max-width: 1024px) {
    padding: 10px 30px;
    font-size: 14px;
  }
`
