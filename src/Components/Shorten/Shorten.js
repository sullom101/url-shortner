import React, { Component } from 'react';
import styled from 'styled-components';
import Result from './Result';
import apiCalls from '../util'

class Cta extends Component {
    constructor(props){
        super(props);
        this.state = {
            url : '',
            data : [] 
        }
    }

    async shorterLink (){
        let result = await apiCalls(this.state.url)
         this.setState({
             data:result
         })
    }

    componentDidMount(){
        this.updateData();
    }

    updateData(){
        let existingData= JSON.parse(localStorage.getItem("allData"));
        if (existingData !== null) {
            console.log('this is updateData', existingData)
            this.setState({ data: existingData});
        }else{
            existingData = []
            console.log('this is updateData', existingData.length)
            localStorage.setItem("allData",JSON.stringify(existingData))
            this.setState({data: existingData})
        }


        // let existingData = JSON.parse(localStorage.getItem("allData"));
        // if (existingData !== null) this.setState({ data: existingData });
    }

    render() {
        return (
            <Section>
                <ShortenDesktopContainer width={this.props.width}>
                    <InputSearch width={this.props.width} type="text" placeholder="Shorten a link here..." onChange={ (value)=> this.setState({url: value.target.value}) } />
                    <Button width={this.props.width} onClick={this.shorterLink.bind(this)}>Shorten</Button>
                </ShortenDesktopContainer>
                <Result data={this.state.data} width={this.props.width} />
            </Section>
        )
    }
}
const img = require('../../assets/bg-shorten-desktop.svg');

const Section = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content:center;
`
const ShortenDesktopContainer = styled.div`
    background-image: url(${img});
    background-size:cover;
    background-color:#3a3053;
    width:80%;
    height:150px;
    display:flex;
    align-items:center;
    justify-content:space-around;
    flex-direction:${(props)=>props.width < 400?'column':'row' };
    flex-wrap:wrap;
    border-radius:12px;
    margin-top:-5%;
`
const InputSearch = styled.input`
padding: 15px 28px;
border-radius: 12px;
font-size: 18px;
width:${(props)=>props.width<400?'90%':'70%'};
border-width:0; 

`
const Button = styled.button`
background-color: hsl(180,66%,49%);
color: #fff;
padding: 15px 28px;
border: 0;
font-size: 18px;
font-weight: 700;
width:${(props)=>props.width<400?'90%':'20%'};
border-radius:12px;
`
export default Cta;