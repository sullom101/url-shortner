
import React, { Component } from 'react'
import styled from 'styled-components'

class Result extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    copyElement=(input)=>{

        console.log("https://rel.ink/" +input);
        // Create new element
        var el = document.createElement('textarea');
        // Set value (string to be copied)
        el.value = "https://rel.ink/" +input;
        // Set non-editable to avoid focus and move outside of view
        el.setAttribute('readonly', '');
        el.style = {position: 'absolute', left: '-9999px'};
        document.body.appendChild(el);
        // Select text inside element
        el.select();
        // Copy text to clipboard
        document.execCommand('copy');
        // Remove temporary element
        document.body.removeChild(el);
        var copied = document.getElementById('copy');
        copied.innerText = 'copied'
    }


    render() {
        return (
            <Wrapper>
            {
                this.props.data.map( (element, index)=>{
                    return (
                    <ShorterLink width={this.props.width} key={index}>
                        <OldUrl> {element.url} </OldUrl>
                        <Url > {"https://rel.ink/" + element.hashid} </Url>
                        <Button id="copy" onClick={()=> {this.copyElement(element.hashid) } }>
                            Copy
                        </Button>
                    </ShorterLink>
                    )
                })
            }
        </Wrapper>
        )
    }
}


const Url = styled.p`
color: hsl(180,66%,49%);
font-size:15px;
`
const OldUrl= styled.p`
font-size:15px;
padding-bottom:100;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction:${(props)=>props.width < 400?'column':'row' };
    flex-wrap:wrap;
    width: 80%;
    border-radius: 12px;
    margin-Top:5%;
    word-break: break-word;
`;

const ShorterLink = styled.div`
    display:flex;
    justify-content:space-between;
    margin-bottom:5%;
    background-color: #fff;
    padding: 10px ;
    align-items: ${(props)=>props.width < 400?'initial':'center'};
    border-radius: 12px;
    flex-direction:${(props)=>props.width < 400?'column':'row' };
    width:100%;
`
  
const Button = styled.button`
background-color: hsl(180,66%,49%);
color: #fff;
padding: 15px 28px;
border: 0;
font-size: 18px;
font-weight: 700;

border-radius:12px;
`



export default Result;