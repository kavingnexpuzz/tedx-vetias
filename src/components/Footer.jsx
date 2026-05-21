import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Grid, Divider, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

import TEDxLogo from '../assets/logo';

const QUICK_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Speakers', path: '/speakers' },
  { label: 'Team', path: '/team' },
  
  { label: 'FAQ', path: '/faq' },
  { label: 'Sponsors', path: '/sponsors' },
]

const SOCIALS = [
  { icon: <InstagramIcon fontSize="small" />, href: 'https://www.instagram.com/vetiascoed/?hl=en', label: 'Instagram' },
  { icon: <TwitterIcon fontSize="small" />, href: 'https://x.com/vetias4087', label: 'Twitter' },
  { icon: <LinkedInIcon fontSize="small" />, href: 'https://in.linkedin.com/in/vetias-erode-279b24229', label: 'LinkedIn' },
  { icon: <YouTubeIcon fontSize="small" />, href: 'https://www.youtube.com/c/vetias', label: 'YouTube' },
];

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: '#080808',
        borderTop: '1px solid rgba(229,9,20,0.15)',
        pt: 10,
        pb: 4,
        mt: 'auto',
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 3, md: 6 } }}>
        <Grid container spacing={6}>
          {/* Brand */}
          <Grid item xs={12} md={4}>
            <TEDxLogo size={30} />
            <Typography
              variant="body2"
              sx={{ color: '#666', mt: 3, lineHeight: 1.9, maxWidth: 300, fontSize: '0.88rem' }}
            >
              TEDx VETIAS is an independently organized TED event at VETIAS College. We bring together
              brilliant minds to share ideas that matter — locally organized, globally inspired.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mt: 3 }}>
              {SOCIALS.map((s) => (
                <IconButton
                  key={s.label}
                  component="a"
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  size="small"
                  sx={{
                    color: '#555',
                    border: '1px solid #222',
                    borderRadius: 0,
                    width: 36,
                    height: 36,
                    '&:hover': { color: '#E50914', borderColor: '#E50914', background: 'rgba(229,9,20,0.05)' },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {s.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Quick links */}
          <Grid item xs={6} md={2}>
            <Typography
              sx={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '1.1rem',
                letterSpacing: '0.1em',
                color: '#f0f0f0',
                mb: 3,
              }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
              {QUICK_LINKS.slice(0, 4).map((l) => (
                <Link
                  key={l.path}
                  to={l.path}
                  style={{ textDecoration: 'none' }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#666',
                      fontSize: '0.84rem',
                      letterSpacing: '0.05em',
                      transition: 'color 0.2s',
                      '&:hover': { color: '#E50914' },
                    }}
                  >
                    {l.label}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography
              sx={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '1.1rem',
                letterSpacing: '0.1em',
                color: '#f0f0f0',
                mb: 3,
              }}
            >
              More
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
              {QUICK_LINKS.slice(4).map((l) => (
                <Link key={l.path} to={l.path} style={{ textDecoration: 'none' }}>
                  <Typography
                    variant="body2"
                    sx={{ color: '#666', fontSize: '0.84rem', letterSpacing: '0.05em', '&:hover': { color: '#E50914' }, transition: 'color 0.2s' }}
                  >
                    {l.label}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Contact */}
          <Grid item xs={12} md={4}>
            <Typography
              sx={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '1.1rem',
                letterSpacing: '0.1em',
                color: '#f0f0f0',
                mb: 3,
              }}
            >
              Get In Touch
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {[
                { label: 'tedxvetias@college.edu', href: 'mailto:tedxvetias@college.edu' },
                { label: '+91 98765 43210', href: 'tel:+919876543210' },
                { label: 'VET Institute of Arts and Sciences, Erode - 638012', href: '#' },
              ].map((c, i) => (
                <Box key={i} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                  <Box
                    sx={{
                      width: 4,
                      height: 4,
                      borderRadius: '50%',
                      background: '#E50914',
                      mt: 0.8,
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    component="a"
                    href={c.href}
                    variant="body2"
                    sx={{
                      color: '#666',
                      fontSize: '0.84rem',
                      textDecoration: 'none',
                      lineHeight: 1.5,
                      '&:hover': { color: '#E50914' },
                      transition: 'color 0.2s',
                    }}
                  >
                    {c.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ mt: 8, mb: 4, borderColor: 'rgba(255,255,255,0.06)' }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="caption" sx={{ color: '#444', letterSpacing: '0.08em' }}>
            © {new Date().getFullYear()} TEDx VETIAS. All rights reserved.
          </Typography>
          <Typography variant="caption" sx={{ color: '#333', letterSpacing: '0.06em' }}>
            This event is operated under license from TED.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
