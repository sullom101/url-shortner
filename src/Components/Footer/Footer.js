import React from 'react';
import styled from'styled-components';
import {Brand} from '../StyledComponents/index'

const Ul = styled.ul`
flex-direction: column;
list-style:none;
`;
const MainFooter = styled.footer`
background: #232127;
display:flex;
justify-content:space-between;
padding:2em;

`
const LinksWrapper = styled.div`
    text-align: start;
    color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`
const SocialLinks = styled.div`
    width: 20%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
}
`


const Footer = () => {
    return(
        <MainFooter>
        
        <Brand style={{color:'#fff'}}> 
        <h4 style={{fontSize:36}}>Shortly</h4> 
        </Brand>
        <LinksWrapper>
            <h5 > Features </h5>
            <Ul> 
            <li> Link Shortening  </li>
            <li> Branded Links </li>
            <li> Analytics </li>
            </Ul>
         </LinksWrapper>
         <LinksWrapper>
            <h5> Resources </h5>
            <Ul> 
            <li> Blog  </li>
            <li> Developers</li>
            <li> Support  </li>
            </Ul>
         </LinksWrapper>
         <LinksWrapper>
            <h5 style={{paddingBottom:10}}> Company </h5>
            <Ul> 
            <li> About </li>
            <li> Our Team</li>
            <li> Careers</li>
            <li> Contact </li>
            </Ul>
         </LinksWrapper>
         <SocialLinks>
         <img src={require('../../assets/icon-facebook.svg')} alt="shortly links"/>
        <img src={require('../../assets/icon-twitter.svg')} alt="shortly links"/>
        <img src={require('../../assets/icon-pinterest.svg')} alt="shortly links"/>
         <img src={require('../../assets/icon-instagram.svg')} alt="shortly links"/>
         </SocialLinks>
            
     </MainFooter>
    )
}

export default Footer;