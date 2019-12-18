import React from 'react'
import styled from 'styled-components'

export default function Services() {
    return (
        <Section>
            <div style={{padding:'5%'}}>
                <h2>
                Advanced Statistics
                </h2>
                <p>

    Track how your links are performing across the web with our advanced statistics dashboard.
                </p>
            </div>
            <Wrapper >
            <Span/>
            {data.map( 
                (element,index)=>{
                switch (index){
                    case 0:
                        return(
                        <Box key={index}>
                            <Image>
                                <img src={element.image} alt={ element.title}/>
                            </Image>
                            <Content>
                                <Title>
                                    { element.title}
                                </Title>
                                <Paragraph>
                                    { element.paragraph}
                                </Paragraph>
                            </Content>
                        </Box>
                        );
                    case 1:
                        return(
                            <BoxSecond key={index}>
                                <Image>
                                    <img src={element.image} alt={ element.title}/>
                                </Image>
                                <Content>
                                    <Title>
                                        { element.title}
                                    </Title>
                                    <Paragraph>
                                        { element.paragraph}
                                    </Paragraph>
                                </Content>
                            </BoxSecond>
                
                        );
                    case 2:
                        return(
                            <BoxLast key={index}>
                                <Image>
                                    <img src={element.image} alt={ element.title}/>
                                </Image>
                                <Content>
                                    <Title>
                                        { element.title}
                                    </Title>
                                    <Paragraph>
                                        { element.paragraph}
                                    </Paragraph>
                                </Content>
                            </BoxLast>
                        );
                    default:
                        break;
                }
            })}

            </Wrapper>
        </Section>
    )
}

const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`
const Wrapper = styled.div`
    display: flex;
    padding:5% 0;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items:center;
`
const Box = styled.div`
    display: flex;
    background-color: white;
    width: 80%;
    flex-direction:column;
    border-radius:12px;
    height:fit-content;
    word-break:break-word;
    align-items: center;
`
const BoxSecond = styled.div`
    word-break:break-word;
    display: flex;
    background-color: white;
    width: 80%;
    flex-direction:column;
    border-radius:12px;
    position:relative;
    height:fit-content;
    margin:75px 0;
    align-items: center;
`
const BoxLast = styled.div`
    display: flex;
    background-color: white;
    width: 80%;
    flex-direction:column;
    border-radius:12px;
    position:relative;
    height:fit-content;
    align-items: center;
    word-break:break-word;
`
const Span = styled.span`
position: absolute;
background-color: #2acfcf;
width: 10px;
height: 577px;
z-index: -1;
`
const Title = styled.h3`
    padding-bottom:2%;
` 
const Paragraph = styled.p`
    padding:5% 0;   
`
const Content = styled.div`
    padding: 10% 5%;
    text-align: center;
`

const Image = styled.div`
background-color: #3b3054;
width: 70px;
height: 70px;
align-items: center;
border-radius: 50%;
justify-content: center;
align-items:center;
display: flex;
position: relative;
top: -35px;
`
const data = [
    {
        image:require('../../assets/icon-brand-recognition.svg'),
        title:'Brand Recognition',
        paragraph: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
    },
    {
        image:require('../../assets/icon-detailed-records.svg'),
        title: 'Detailed Records',
        paragraph:"Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
    },
    {
        image:require('../../assets/icon-fully-customizable.svg'),
        title:"Fully Custiomizable",
        paragraph:"Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
    },

]
