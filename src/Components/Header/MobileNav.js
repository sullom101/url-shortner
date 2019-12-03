import React, { Component } from 'react';
import styled from 'styled-components';

class MobileNav extends Component {
    
    render() {
        return (
        <MobileWrapper show={this.props.show}>
            <ul style={{borderBottomWidth:2}}>
                <Item >Features </Item>
                <Item >Pricing  </Item>
                <Item >Resources</Item>
            </ul>
            <Line/>
            <ul>
                <Item >Pricing  </Item>
                <ItemLast >Resources</ItemLast>
            </ul>
        </MobileWrapper>
        )
    }
}
const MobileWrapper = styled.nav`
display: ${props=> props.show? 'flex':'none'};
flex-direction:column;
justify-content:center;
flex: 1 0 100%;
justify-content:center;
background-color:hsl(257, 27%, 26%);
border-radius:10px;
padding:10%;
margin-top:15px
`

const Line = styled.span`
height:2px; 
background-color:#fff
`

const Item = styled.li`
color:#fff;
padding:4% 0;
list-style: none;
`
const ItemLast = styled.li`
    list-style: none;
    background-color:hsl(180, 66%, 49%);
    padding:4% 0;
    border-radius:25px;
`

export default MobileNav;