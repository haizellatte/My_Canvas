import styled from 'styled-components';

const Wrapper = styled.div<{$bg : string}>`
  background-color: ${({ theme, $bg }) =>  `${theme.color[$bg]}`};
  display: flex;
  width: 600px; 
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export default Wrapper;