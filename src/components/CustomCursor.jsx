import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';

const CustomCursor = () => {
  const cursorDotRef = useRef(null);
  const canvasRef = useRef(null);
  
  const mouse = useRef({ x: -100, y: -100 });
  const isHovering = useRef(false);
  const sparks = useRef([]);

  const [isHoverable, setIsHoverable] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsHoverable(false);
      return;
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const onMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Spawn sparks on every move
      const sparksCount = isHovering.current ? 3 : 1;
      for(let i=0; i<sparksCount; i++) {
        createSpark(e.clientX, e.clientY);
      }
    };

    const createSpark = (x, y) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 3 + 1;
      sparks.current.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        color: Math.random() > 0.3 ? '#E50914' : '#FFA500',
        size: Math.random() * 2 + 1
      });
    };

    const update = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Random sparks when stationary but hovering
      if (isHovering.current && Math.random() < 0.4) {
        createSpark(mouse.current.x, mouse.current.y);
      }

      for (let i = sparks.current.length - 1; i >= 0; i--) {
        let s = sparks.current[i];
        s.x += s.vx;
        s.y += s.vy;
        s.vy += 0.1; // gravity pull down
        s.life -= 0.02;

        if (s.life <= 0) {
          sparks.current.splice(i, 1);
          continue;
        }

        ctx.globalAlpha = s.life;
        ctx.fillStyle = s.color;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.shadowBlur = 4;
        ctx.shadowColor = s.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      ctx.globalAlpha = 1;

      animationFrameId = requestAnimationFrame(update);
    };

    window.addEventListener('mousemove', onMouseMove);
    animationFrameId = requestAnimationFrame(update);
    document.body.style.cursor = 'none';
    
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName?.toLowerCase() === 'a' ||
        target.tagName?.toLowerCase() === 'button' ||
        target.closest?.('a') ||
        target.closest?.('button') ||
        target.closest?.('[role="button"]')
      ) {
        isHovering.current = true;
        if (cursorDotRef.current) {
          cursorDotRef.current.classList.add('hover');
        }
      }
    };
    
    const handleMouseOut = () => {
      isHovering.current = false;
      if (cursorDotRef.current) {
        cursorDotRef.current.classList.remove('hover');
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
      document.body.style.cursor = 'auto';
    };
  }, []);

  if (!isHoverable) return null;

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 9998,
        }}
      />
      <Box
        ref={cursorDotRef}
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          backgroundColor: '#E50914',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          marginLeft: '-4px',
          marginTop: '-4px',
          transition: 'width 0.2s, height 0.2s, background-color 0.2s, margin 0.2s',
          '&.hover': {
            width: '12px',
            height: '12px',
            marginLeft: '-6px',
            marginTop: '-6px',
            backgroundColor: '#FFA500',
            boxShadow: '0 0 12px #FFA500',
          }
        }}
      />
    </>
  );
};

export default CustomCursor;
