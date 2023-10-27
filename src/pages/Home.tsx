import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Wrapper from '@styles/common/Wrapper';

const Home = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState('0');
  const menu = ['Shape', 'bounce', 'wave'];

  const ClickHandler = (e: React.MouseEvent<HTMLLIElement>) => {
    const target = e.currentTarget.id;
    setActive(target);
    setTimeout(() => {
      navigate(`/${menu[Number(target)]}`);
    }, 200);
  }

  return (
    <Wrapper $bg={'blue'}>
      <Container>
        {menu.map((menu, i) => (
          <li key={`menu-${i}`} id={`${i}`} onClick={(e) => ClickHandler(e)}>{menu}</li>
        ))}
        <Focus $active={active}/>
      </Container>
    </Wrapper>
  );
};

export default Home;

const Container = styled.ul`
  position: relative;
  width: 350px;
  height: 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-radius: 35px;
  background: rgba(255, 255, 255, 0.65);
  box-shadow:
      0 12.5px 10px rgba(0, 0, 0, 0.08),
      0 100px 80px rgba(0, 0, 0, 0.03);
  overflow: hidden;
  > li {
    list-style: none;
    display: grid;
    place-items: center;
    color: ${({ theme }) => theme.color.blue};
    z-index: 10;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    font-weight: 500;
  }
`;

const Focus = styled.div<{$active : string}>`
  position: absolute;
  left: ${({ $active }) => $active === '0' ? 0 : $active === '1' ? '115px' : '235px' };
  top: 0;
  width: calc(100% / 3);
  height: 100%;
  border-radius: 35px;
  background: ${({ theme }) => theme.color.white};
  box-shadow:
  0 12.5px 10px rgba(0, 0, 0, 0.015),
  0 100px 80px rgba(0, 0, 0, 0.03);
`;