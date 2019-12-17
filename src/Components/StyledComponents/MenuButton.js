import styled from 'styled-components';

const MenuButton = styled.button`
  width: 45px;
  height: 40px;
  position: relative;
  background-color:#fff;
  border:0;
  display:${props=> (props.width <768)?'flex':'none'}
`

export default MenuButton;