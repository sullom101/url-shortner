import Bannar from './Bannar'
import MobileBannar from './MobileBannar';

import React from 'react'

export default function Index(props) {
    
    if(props.width < 768) {
        return(<MobileBannar width={props.width}/>);
    }else{
        return(<Bannar width={props.width}/>  );
    }
}
