import Services from './Services'
import ServicesMobile from './ServicesMobile';

import React from 'react'

export default function Index(props) {
    
    if(props.width < 768) {
        return(<ServicesMobile width={props.width}/>);
    }else{
        return(<Services width={props.width}/>  );
    }
}
