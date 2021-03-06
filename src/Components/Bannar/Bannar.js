import React, { Component } from 'react'
import styled from 'styled-components';
import { Button } from '../StyledComponents';

class Bannar extends Component {
    render() {
        return (
            <Section>
                <CtaContainer>
                    <Text>
                        <TextBannar>
                        More than just shorter links
                        </TextBannar>
                        <ParagraphBannar>
                            Build your brand's recognition and get detailed insights on how your links are performing 
                        </ParagraphBannar>
                    </Text>
                    <Button style={{}} onClick={(e)=> e.preventDefault()}> Get Started </Button>
            
                </CtaContainer>
                <ImageContainer>
                    <img src={require('../../assets/illustration-working.svg')} alt="url-shortner illustration work"/>
                </ImageContainer>
                
            </Section>
        )
    }
}
const Section = styled.section`
    display: flex;
    flex-direction:row;
    justify-content:space-between;
    padding-bottom: 10%;
`
const CtaContainer= styled.div`
    width: 45%;
    display: flex;
    text-align: start;
    padding-left: 2rem;
    flex-direction:row;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    align-content:space-around;
`
const ImageContainer= styled.div`
    width:45%;
    overflow: hidden;
`
const Text = styled.div`
    display: flex;
    flex-direction:row;
    flex-wrap:wrap;
`
const TextBannar = styled.h1`
font-size: 5rem;
font-weight: 700;
align-self:center;
`

const ParagraphBannar = styled.p`
font-size:1.5rem;
color:grey;

`

export default  Bannar;