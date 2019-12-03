import React, { Component } from 'react'
import styled from'styled-components';
import {Brand, Ul} from '../StyledComponents/index';
import MobileNav from './MobileNav'


class Header extends Component {
  constructor(props){
    super(props);
    this.state={
      navMenu: false
    }
  }

  toggleMenu= ()=>{
    if(this.state.navMenu){
      this.setState({
        navMenu:false,
      })
    }else{
      this.setState({
        navMenu:true,
      })  
    }
  }

  render() {
    // console.log(this.props.width);
  return (
    <Head>
      <Brand width={this.props.width}>
          <h1>Shortly</h1>
      </Brand>
      <Nav width={this.props.width}>
          <Ul>
            <Item>Features       </Item>
            <Item>Pricing        </Item>
            <Item>Resources      </Item>
          </Ul>
          <Ul>
            <Item className="item button">Login</Item>
            <ItemLast>Signup</ItemLast>
          </Ul>
      </Nav>
      <Button width={this.props.width} onClick={()=>{this.toggleMenu()}}>
        <MobileMenuLine style={{top:'30%'}}></MobileMenuLine>
        <MobileMenuLine style={{top:'50%'}}></MobileMenuLine>
        <MobileMenuLine style={{top:'70%'}}></MobileMenuLine>
      </Button>
      <MobileNav show={this.state.navMenu}/>
  </Head>
  );
  }
}
const ItemLast = styled.li`
  background-color:hsl(180, 66%, 49%);
  padding:10px 26px;
  border-radius:25px;
  list-style: none;
`
const Item = styled.li`
  padding:10px;
  list-style: none;
`
const Head = styled.header`
display: flex;
flex-wrap: wrap;
  padding: 2em;
  justify-content: space-between;
  `;

const Nav = styled.nav`
flex-grow: 3;
display: ${props=> (props.width < 768) ? 'none':'flex' };
justify-content: space-between;
margin: 0 30px;
align-items:center;
`;
const MobileMenuLine = styled.span`
  width: 30px;
  height: 3px;
  position: absolute;
  background-color: black;
  left: 17%;
  display: flex;
  margin-bottom: 2px;
`;
const Button = styled.button`
  width: 45px;
  height: 40px;
  position: relative;
  background-color:#fff;
  border:0;
  display:${props=> (props.width <768)?'flex':'none'}
`


export default Header;