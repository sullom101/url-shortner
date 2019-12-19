import Footer from './Footer'
import FooterMobile from './FooterMobile';

import React from 'react'

export default function Index(props) {
    
    if(props.width < 768) {
        return(<FooterMobile width={props.width}/>);
    }else{
        return(<Footer width={props.width}/>  );
    }
}