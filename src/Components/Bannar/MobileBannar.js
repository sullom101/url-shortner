import React, { Component } from 'react'
import styled from 'styled-components';
import { Button } from '../StyledComponents'

class MobileBannar extends Component {
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
                    <img width="500px" src={require('../../assets/illustration-working.svg')} alt="url-shortner illustration work"/>
                </ImageContainer>
                
            </Section>
        )
    }
}
const Section = styled.section`
    display: flex;
    flex-direction:column-reverse;
    flex-wrap: wrap;
    justify-content:space-between;
    margin-bottom: 30px;
`
const CtaContainer= styled.div`
    justify-content:center;
    padding: 10% 20px;
    width: 100%;
    display: flex;
    text-align: center;
    flex-direction:row;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    align-content:space-around;
`
const ImageContainer= styled.div`
    width:100%;
    padding:0 20px;
    overflow: hidden;
`
const Text = styled.div`
    display: flex;
    flex-direction:row;
    flex-wrap:wrap;
    padding: 30px 0;
`
const TextBannar = styled.h1`
font-size: 2rem;
font-weight: 700;
align-self:center;
padding-bottom:5%;
`

const ParagraphBannar = styled.p`
font-size:1.2rem;
color:grey;

`

export default  MobileBannar;