import React from 'react';
import styled from'styled-components';

const Ul = styled.ul`
flex-direction: row;
list-style:none;
color:#9e9aa7;
`;
const MainFooter = styled.footer`
background: #232127;
display:flex;
justify-content:space-between;
padding:2em;
flex-direction:column;
align-items:center;
`
const LinksWrapper = styled.div`
    text-align: start;
    color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-evenly;
    padding:15px 0 ;
`
const SocialLinks = styled.div`
width:80%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
    padding:15px 0;
}
`
const Brand = styled.div`
display:flex;
flex-direction:column;
padding: 15px 0 ;
`
const Texteading = styled.h5`
font-weight: larger;
font-size:larger;
padding:10px 0 ;
`
const Footer = () => {
    return(
        <MainFooter>
        
        <Brand style={{color:'#fff'}}> 
        <h4 style={{fontSize:36}}>Shortly</h4> 
        </Brand>
        <LinksWrapper>
            <Texteading > Features </Texteading>
            <Ul> 
            <li> Link Shortening  </li>
            <li> Branded Links </li>
            <li> Analytics </li>
            </Ul>
         </LinksWrapper>
         <LinksWrapper>
            <Texteading> Resources </Texteading>
            <Ul> 
            <li> Blog  </li>
            <li> Developers</li>
            <li> Support  </li>
            </Ul>
         </LinksWrapper>
         <LinksWrapper>
            <Texteading > Company </Texteading>
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