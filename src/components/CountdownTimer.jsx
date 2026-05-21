import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

const EVENT_DATE = new Date('2026-09-12T09:00:00');

const pad = (n) => String(n).padStart(2, '0');

const TimeBox = ({ value, label }) => (
  <Box
    sx={{
      textAlign: 'center',
      minWidth: { xs: 64, md: 96 },
      position: 'relative',
      '&::after': {
        content: '":"',
        position: 'absolute',
        right: -12,
        top: 4,
        color: '#E50914',
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: { xs: '2rem', md: '3.5rem' },
        display: { xs: 'none', sm: 'block' },
      },
      '&:last-child::after': { display: 'none' },
    }}
  >
    <Box
      sx={{
        background: 'rgba(229,9,20,0.08)',
        border: '1px solid rgba(229,9,20,0.25)',
        p: { xs: 1.5, md: 2.5 },
        mb: 1,
      }}
    >
      <Typography
        sx={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: { xs: '2.5rem', md: '4rem' },
          color: '#fff',
          lineHeight: 1,
          letterSpacing: '0.05em',
        }}
      >
        {pad(value)}
      </Typography>
    </Box>
    <Typography
      variant="caption"
      sx={{
        color: '#888',
        fontFamily: "'DM Mono', monospace",
        fontSize: '0.65rem',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
      }}
    >
      {label}
    </Typography>
  </Box>
);

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const calc = () => {
      const diff = EVENT_DATE - new Date();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <Box sx={{ display: 'flex', gap: { xs: 2, md: 4 }, justifyContent: 'center', flexWrap: 'wrap' }}>
      <TimeBox value={timeLeft.days} label="Days" />
      <TimeBox value={timeLeft.hours} label="Hours" />
      <TimeBox value={timeLeft.minutes} label="Minutes" />
      <TimeBox value={timeLeft.seconds} label="Seconds" />
    </Box>
  );
};

export default CountdownTimer;
