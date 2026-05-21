import React, { useState } from 'react';
import { Box, Typography, Chip } from '@mui/material';
import ScrollReveal from './ScrollReveal';

const SpeakerCard = ({ speaker, delay = 0 }) => {
  

  const initials = speaker.name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <ScrollReveal direction="up" delay={delay}>
      <Box
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        sx={{
          position: 'relative',
          overflow: 'hidden',
          cursor: 'default',
          '&:hover .speaker-overlay': { opacity: 1, transform: 'translateY(0)' },
          '&:hover .speaker-img-bg': { transform: 'scale(1.06)' },
        }}
      >
        {/* Image / Avatar */}
        <Box
          sx={{
            height: 360,
            overflow: 'hidden',
            background: '#1a1a1a',
            position: 'relative',
          }}
        >
          {speaker.photo ? (
            <Box
              className="speaker-img-bg"
              component="img"
              src={speaker.photo}
              alt={speaker.name}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.6s cubic-bezier(0.22,1,0.36,1)',
                display: 'block',
              }}
            />
          ) : (
            <Box
              className="speaker-img-bg"
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
                transition: 'transform 0.6s cubic-bezier(0.22,1,0.36,1)',
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '6rem',
                  color: 'rgba(229,9,20,0.25)',
                  letterSpacing: '0.05em',
                }}
              >
                {initials}
              </Typography>
            </Box>
          )}

          {/* Red accent top-left */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: 4,
              height: '100%',
              background: '#E50914',
            }}
          />

          {/* Hover overlay */}
          <Box
            className="speaker-overlay"
            sx={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(229,9,20,0.92) 0%, rgba(10,10,10,0.6) 100%)',
              opacity: 0,
              transform: 'translateY(8px)',
              transition: 'opacity 0.4s ease, transform 0.4s ease',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              p: 3,
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: '#fff', lineHeight: 1.65, fontSize: '0.9rem' }}
            >
              {speaker.description}
            </Typography>
            {speaker.topic && (
              <Chip
                label={speaker.topic}
                size="small"
                sx={{
                  mt: 2,
                  alignSelf: 'flex-start',
                  background: 'rgba(255,255,255,0.15)',
                  color: '#fff',
                  border: '1px solid rgba(255,255,255,0.3)',
                  borderRadius: 0,
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '0.65rem',
                  letterSpacing: '0.1em',
                }}
              />
            )}
          </Box>
        </Box>

        {/* Info bar */}
        <Box
          sx={{
            p: 2.5,
            background: '#111',
            borderTop: '2px solid #E50914',
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '1.4rem',
              letterSpacing: '0.04em',
              color: '#f0f0f0',
              lineHeight: 1,
            }}
          >
            {speaker.name}
          </Typography>
          <Typography
            sx={{
              color: '#E50914',
              fontSize: '0.78rem',
              letterSpacing: '0.15em',
              fontFamily: "'DM Mono', monospace",
              mt: 0.5,
              textTransform: 'uppercase',
            }}
          >
            {speaker.role}
          </Typography>
        </Box>
      </Box>
    </ScrollReveal>
  );
};

export default SpeakerCard;
