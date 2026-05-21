import React from 'react';
import { Box, Typography } from '@mui/material';
import ScrollReveal from './ScrollReveal';

const SectionTitle = ({ overline, title, subtitle, align = 'center', light = false }) => {
  return (
    <Box sx={{ mb: 8, textAlign: align }}>
      <ScrollReveal direction="up" delay={0}>
        {overline && (
          <Typography
            variant="overline"
            sx={{
              color: '#E50914',
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.72rem',
              letterSpacing: '0.25em',
              fontWeight: 500,
              display: 'block',
              mb: 1.5,
            }}
          >
            {overline}
          </Typography>
        )}
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.1}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '3rem', md: '5rem' },
            lineHeight: 0.92,
            color: light ? '#ffffff' : '#f0f0f0',
            mb: 2,
            '& span': { color: '#E50914' },
          }}
        >
          {title}
        </Typography>
      </ScrollReveal>

      {subtitle && (
        <ScrollReveal direction="up" delay={0.2}>
          <Typography
            variant="body1"
            sx={{
              color: '#888',
              maxWidth: 560,
              mx: align === 'center' ? 'auto' : 0,
              fontSize: '1.05rem',
              lineHeight: 1.75,
            }}
          >
            {subtitle}
          </Typography>
        </ScrollReveal>
      )}

      <ScrollReveal direction="up" delay={0.25}>
        <Box
          sx={{
            mt: 3,
            width: 64,
            height: 3,
            background: '#E50914',
            mx: align === 'center' ? 'auto' : 0,
          }}
        />
      </ScrollReveal>
    </Box>
  );
};

export default SectionTitle;
