import React from 'react'
import styled from 'styled-components';
import patternRight from '/patternRight.svg';

const Work = () => {
  return (
    <Section>
        <ContentWrapper>
            <h1 style={{width:'40%'}}>Find out more about how we work</h1>
            <button>HOW WE WORK</button>
        </ContentWrapper>
        <Pattern src={patternRight} alt='pattern'/>
    </Section>
  )
}

export default Work

const Section = styled.section`
    margin-left:325px;
    margin-top:100px;
    width:75%;
    background-color: hsl(256, 26%, 20%);
    position:relative;
    overflow:hidden;
    padding:80px;
`
const ContentWrapper = styled.div`
    display:flex;
    justify-content:space-around;
    color:#fff;
`
const Pattern = styled.img`
    position:absolute;
    top:0;
    right:0;
`
