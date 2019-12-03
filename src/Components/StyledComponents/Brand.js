import styled from 'styled-components';

const Brand = styled.div`
    display:flex;
    flex-direction:row;
    flex-grow:${props=> props.width < 768? '3': ''};
    
`;
export default Brand;