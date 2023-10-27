import Wrapper from '@styles/common/Wrapper';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Bounce = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  // const canvas = canvasRef.current;
  const ctx = canvas?.getContext('2d');

  const circle = {
    x: 200,
    y: 200,
    size: 30,
    dx: 5,
    dy: 4,
  };

  const drawCircle = () => {
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, 30, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
  };
  
  const update = () => {
    if (ctx) {
      ctx.clearRect(0, 0, 550, 480); 
      
      drawCircle();
      
      // Change position
      circle.x += circle.dx;
      circle.x += circle.dy;
      
      // 양측 영역을 벗어나면 방향을 전환해준다.
      if (circle.x + circle.size > 550 || circle.x - circle.size < 0) {
        circle.dx *= -1;
      }
      if (circle.y + circle.size > 480 || circle.y - circle.size < 0) {
        circle.dy *= -1;
        // circle.x += circle.dy;
      }
      }
    // Repaint canvas
    requestAnimationFrame(update); 
  }

  update();

  return (
    <Wrapper $bg={'blue'}>
      <Canvas id="canvas" ref={canvasRef} width="550" height="480"></Canvas>
    </Wrapper>
  );
};

export default Bounce;

const Canvas = styled.canvas`
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.color.white};
`;