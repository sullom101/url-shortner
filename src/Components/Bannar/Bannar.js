import React, { Component } from 'react'
import styled from 'styled-components';

class Bannar extends Component {
    render() {
        return (
            <Section>
                <CtaContainer>
                    <h1>
                        More than Just Shorter Links
                    </h1>
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
`
const CtaContainer= styled.div`
    width:50%;
    
`
const ImageContainer= styled.div`
    width:50%;
    overflow: hidden;
`
export default  Bannar;