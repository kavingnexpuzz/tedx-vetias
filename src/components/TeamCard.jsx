import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import ScrollReveal from './ScrollReveal';

const TeamCard = ({ member, delay = 0 }) => {
  const [imgError, setImgError] = useState(false);

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
          background: '#1d1d1d',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          borderRadius: '16px',
          padding: '32px 24px 28px 24px',
          textAlign: 'center',
          transition: 'all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '100%',
          '&:hover': {
            transform: 'translateY(-8px)',
            borderColor: 'rgba(255, 255, 255, 0.08)',
            boxShadow: '0 20px 45px 5px rgba(229, 9, 20, 0.85)',
            '& .avatar-container': {
              borderColor: '#E50914',
              transform: 'scale(1.03)',
              boxShadow: '0 0 20px rgba(229, 9, 20, 0.4)',
            }
          },
        }}
      >
        {/* Avatar Image Wrapper */}
        <Box
          className="avatar-container"
          sx={{
            width: 124,
            height: 124,
            borderRadius: '26px',
            border: '2.5px solid #E50914',
            padding: '5px',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 2.5,
            transition: 'all 0.35s ease',
            background: 'rgba(0, 0, 0, 0.2)',
          }}
        >
          {member.photo && !imgError ? (
            <Box
              component="img"
              src={member.photo}
              alt={member.name}
              onError={() => setImgError(true)}
              sx={{ 
                width: '100%', 
                height: '100%', 
                borderRadius: '19px',
                objectFit: 'cover',
              }}
            />
          ) : (
            <Box
              sx={{
                width: '100%',
                height: '100%',
                borderRadius: '19px',
                background: 'linear-gradient(135deg, #181818, #2c2c2c)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '2.8rem',
                  color: 'rgba(229,9,20,0.5)',
                  userSelect: 'none',
                }}
              >
                {initials}
              </Typography>
            </Box>
          )}
        </Box>

        {/* Member Name */}
        <Typography
          sx={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '1.18rem',
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.25,
            mb: 1.2,
          }}
        >
          {member.name}
        </Typography>

        {/* Position / Role */}
        <Typography
          sx={{
            fontFamily: "'DM Sans', sans-serif",
            color: '#cccccc',
            fontSize: '0.85rem',
            fontWeight: 500,
            lineHeight: 1.3,
            mb: 0.5,
          }}
        >
          {member.position}
        </Typography>

        {/* Department / Secondary Tag */}
        {member.department && (
          <Typography 
            sx={{ 
              fontFamily: "'DM Sans', sans-serif",
              color: '#E50914', 
              fontSize: '0.78rem', 
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              lineHeight: 1.2,
            }}
          >
            {member.department}
          </Typography>
        )}
      </Box>
    </ScrollReveal>
  );
};

export default TeamCard;
