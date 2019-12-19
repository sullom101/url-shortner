import React from 'react';
import styled from 'styled-components'
import { Button } from '../StyledComponents'

export default function Boost() {
    return (
        <Section>
            <h2 style={{color:'white'}}>
                <strong>
                Boost your links today
                </strong>
            </h2>
            <Button> Get Started </Button>
        </Section>
    )
}

const img = require('../../assets/bg-boost-desktop.svg');
const Section = styled.section`
    background-color:#3b3054;
    background-image:url(${img});
    background-size:cover;
    width:100%;
    height:150px;
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items:center;
`