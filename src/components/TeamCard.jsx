import React from 'react';
import { Box, Typography } from '@mui/material';
import ScrollReveal from './ScrollReveal';

const TeamCard = ({ member, delay = 0 }) => {
  const initials = member.name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <ScrollReveal direction="up" delay={delay}>
      <Box
        sx={{
          textAlign: 'center',
          '&:hover .team-avatar': { borderColor: '#E50914', transform: 'translateY(-6px)' },
        }}
      >
        {/* Avatar */}
        <Box
          className="team-avatar"
          sx={{
            width: 120,
            height: 120,
            mx: 'auto',
            mb: 2.5,
            overflow: 'hidden',
            border: '2px solid #333',
            transition: 'border-color 0.3s ease, transform 0.4s cubic-bezier(0.22,1,0.36,1)',
            position: 'relative',
            borderRadius: '2px',
          }}
        >
          {member.photo ? (
            <Box
              component="img"
              src={member.photo}
              alt={member.name}
              sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <Box
              sx={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #1e1e1e, #2d2d2d)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '2.2rem',
                  color: 'rgba(229,9,20,0.5)',
                }}
              >
                {initials}
              </Typography>
            </Box>
          )}
        </Box>

        <Typography
          sx={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '1.15rem',
            letterSpacing: '0.06em',
            color: '#f0f0f0',
            lineHeight: 1.1,
          }}
        >
          {member.name}
        </Typography>
        <Typography
          sx={{
            color: '#E50914',
            fontSize: '0.68rem',
            letterSpacing: '0.18em',
            fontFamily: "'DM Mono', monospace",
            mt: 0.5,
            textTransform: 'uppercase',
          }}
        >
          {member.position}
        </Typography>
        {member.department && (
          <Typography sx={{ color: '#666', fontSize: '0.78rem', mt: 0.5 }}>
            {member.department}
          </Typography>
        )}
      </Box>
    </ScrollReveal>
  );
};

export default TeamCard;
