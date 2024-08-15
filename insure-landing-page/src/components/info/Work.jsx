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
    // margin-left:325px;
    margin-top:100px;
    width:75%;
    background-color: hsl(256, 26%, 20%);
    position:relative;
    overflow:hidden;
    padding:80px;
`
const ContentWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    color:#fff;
    align-items:center;
`
const Pattern = styled.img`
    position:absolute;
    top:0;
    right:0;
`

const WorkTitle = styled.h1`
    font-family:DM Serif Display, serif;
    font-weight:700;
`

const WorkButton = styled.button`
    font-family:Karla, serif;
    font-weight:400;
    background-color:transparent;
    border:2px solid #fff;
    color:#fff;
    padding:5px 20px;
    // margin-right:100px;
`
