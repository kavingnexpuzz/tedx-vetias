import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Box } from '@mui/material';

const ScrollReveal = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  threshold = 0.15,
  once = true,
  style = {},
}) => {
  const { ref, inView } = useInView({ threshold, triggerOnce: once });

  const transforms = {
    up: 'translateY(48px)',
    down: 'translateY(-48px)',
    left: 'translateX(-48px)',
    right: 'translateX(48px)',
    none: 'none',
  };

  return (
    <Box
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : transforms[direction],
        transition: `opacity ${duration}s ease ${delay}s, transform ${duration}s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
        ...style,
      }}
    >
      {children}
    </Box>
  );
};

export default ScrollReveal;
