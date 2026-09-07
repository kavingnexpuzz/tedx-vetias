import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EmailIcon from '@mui/icons-material/Email';
import HandshakeIcon from '@mui/icons-material/Handshake';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ScrollReveal';
import SEO from '../components/SEO';
import { getSponsors } from '../services/api';

const TIERS = [
  { name: 'Presenting', color: '#E50914', size: 200, description: 'Lead partner with maximum brand integration and stage presence' },
  { name: 'Gold', color: '#FFD700', size: 160, description: 'Premium partners with prominent visibility and key activation zones' },
  { name: 'Silver', color: '#C0C0C0', size: 130, description: 'Core sponsors with strong digital and on-ground presence' },
  { name: 'Bronze', color: '#CD7F32', size: 100, description: 'Community supporters and innovation enablers' },
];

const SponsorLogo = ({ sponsor, size }) => (
  <Box
    component="a"
    href={sponsor.website || '#'}
    target="_blank"
    rel="noopener noreferrer"
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size * 0.55,
      border: '1px solid rgba(255,255,255,0.08)',
      background: '#111',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      mx: 'auto',
      '&:hover': { borderColor: '#E50914', background: 'rgba(229,9,20,0.05)', transform: 'translateY(-3px)' },
    }}
  >
    {sponsor.logo ? (
      <Box
        component="img"
        src={sponsor.logo}
        alt={sponsor.name}
        sx={{
          maxWidth: '75%',
          maxHeight: '70%',
          objectFit: 'contain',
          filter: 'grayscale(1) brightness(2)',
          '&:hover': { filter: 'none' },
          transition: 'filter 0.3s',
        }}
      />
    ) : (
      <Typography
        sx={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: size * 0.1,
          color: '#444',
          letterSpacing: '0.05em',
          textAlign: 'center',
          px: 2,
        }}
      >
        {sponsor.name}
      </Typography>
    )}
  </Box>
);

const Sponsors = () => {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    getSponsors()
      .then((res) => {
        if (Array.isArray(res.data) && res.data.length > 0) {
          setSponsors(res.data);
        } else {
          setSponsors([]);
        }
      })
      .catch(() => {
        setSponsors([]);
      });
  }, []);

  const byTier = (tier) => sponsors.filter((s) => s.tier === tier);

  return (
    <Box>
      <SEO
        title="Sponsors"
        description="Official sponsors and partners for TEDxVETIAS 2026. Stay tuned for upcoming sponsor announcements and partnership opportunities."
      />

      {/* Hero */}
      <Box sx={{ pt: 20, pb: 12, background: '#0f0f0f', position: 'relative', overflow: 'hidden' }}>
        <Typography
          sx={{
            position: 'absolute',
            top: '5%',
            right: '-3%',
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '15vw',
            color: 'rgba(229,9,20,0.03)',
            lineHeight: 1,
            userSelect: 'none',
            pointerEvents: 'none',
          }}
        >
          SPONSORS
        </Typography>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography
            variant="overline"
            sx={{ color: '#E50914', fontFamily: "'DM Mono', monospace", letterSpacing: '0.25em', fontSize: '0.72rem' }}
          >
            Partnerships & Alliances
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: '3.5rem', md: '7rem' }, lineHeight: 0.88, mt: 1 }}>
            Our <Box component="span" sx={{ color: '#E50914' }}>Sponsors</Box>
          </Typography>
          <Typography sx={{ color: '#888', maxWidth: 520, lineHeight: 1.85, mt: 3, fontSize: '1.05rem' }}>
            TEDxVETIAS is made possible by visionary organizations that believe in the transformative power of ideas and innovation.
          </Typography>
        </Container>
      </Box>

      {/* Main Content Area */}
      <Box sx={{ py: 14 }}>
        <Container maxWidth="lg">
          {sponsors.length > 0 ? (
            /* Render Confirmed Sponsors when available */
            TIERS.map((tier) => {
              const tierSponsors = byTier(tier.name);
              if (!tierSponsors.length) return null;
              return (
                <Box key={tier.name} sx={{ mb: 12 }}>
                  <ScrollReveal direction="up">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 6 }}>
                      <Box sx={{ width: 12, height: 12, background: tier.color, flexShrink: 0 }} />
                      <Typography sx={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', letterSpacing: '0.06em', color: tier.color }}>
                        {tier.name} Sponsor{tierSponsors.length > 1 ? 's' : ''}
                      </Typography>
                      <Box sx={{ flex: 1, height: 1, background: `${tier.color}22` }} />
                    </Box>
                  </ScrollReveal>

                  <Grid container spacing={3} justifyContent="center">
                    {tierSponsors.map((s, i) => (
                      <Grid item key={s._id}>
                        <ScrollReveal direction="up" delay={i * 0.1}>
                          <SponsorLogo sponsor={s} size={tier.size} />
                        </ScrollReveal>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              );
            })
          ) : (
            /* "Updating Shortly" State when sponsors are not yet confirmed */
            <ScrollReveal direction="up">
              <Box
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '24px',
                  background: 'linear-gradient(180deg, rgba(20,20,20,0.85) 0%, rgba(12,12,12,0.95) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
                  p: { xs: 4, sm: 6, md: 8 },
                  textAlign: 'center',
                }}
              >
                {/* Subtle red background glow */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '-40%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '600px',
                    height: '350px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(229,9,20,0.15) 0%, rgba(229,9,20,0) 70%)',
                    pointerEvents: 'none',
                    filter: 'blur(30px)',
                  }}
                />

                {/* Status Badge */}
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1.5,
                    px: 2.5,
                    py: 1,
                    borderRadius: '9999px',
                    background: 'rgba(229, 9, 20, 0.1)',
                    border: '1px solid rgba(229, 9, 20, 0.35)',
                    mb: 4,
                  }}
                >
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      backgroundColor: '#E50914',
                      boxShadow: '0 0 10px #E50914',
                      animation: 'pulse 1.8s infinite ease-in-out',
                      '@keyframes pulse': {
                        '0%': { transform: 'scale(0.8)', opacity: 0.5 },
                        '50%': { transform: 'scale(1.3)', opacity: 1 },
                        '100%': { transform: 'scale(0.8)', opacity: 0.5 },
                      },
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: { xs: '0.7rem', sm: '0.78rem' },
                      color: '#E50914',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      fontWeight: 600,
                    }}
                  >
                    Partnership Announcement Pending
                  </Typography>
                </Box>

                {/* Main Heading */}
                <Typography
                  sx={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: { xs: '2.5rem', sm: '3.8rem', md: '4.8rem' },
                    lineHeight: 1,
                    letterSpacing: '0.04em',
                    color: '#ffffff',
                    mb: 2,
                  }}
                >
                  Sponsors Will Be{' '}
                  <Box component="span" sx={{ color: '#E50914' }}>
                    Updated Shortly
                  </Box>
                </Typography>

                {/* Description */}
                <Typography
                  sx={{
                    color: '#999',
                    fontSize: { xs: '0.95rem', md: '1.1rem' },
                    maxWidth: 680,
                    mx: 'auto',
                    lineHeight: 1.8,
                    mb: 6,
                  }}
                >
                  We are currently confirming and finalizing the official partners and sponsors for TEDxVETIAS.
                  The full roster of visionary organizations and industry partners will be revealed here soon!
                </Typography>

                {/* 3 Highlight Cards */}
                <Grid container spacing={3} sx={{ mb: 6, textAlign: 'left' }}>
                  <Grid item xs={12} md={4}>
                    <Box
                      sx={{
                        p: 3.5,
                        height: '100%',
                        borderRadius: '16px',
                        background: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          borderColor: 'rgba(229, 9, 20, 0.4)',
                          transform: 'translateY(-4px)',
                          background: 'rgba(229, 9, 20, 0.03)',
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: '10px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: 'rgba(229, 9, 20, 0.1)',
                          color: '#E50914',
                          mb: 2,
                        }}
                      >
                        <HandshakeIcon />
                      </Box>
                      <Typography
                        sx={{
                          fontFamily: "'Bebas Neue', sans-serif",
                          fontSize: '1.3rem',
                          color: '#fff',
                          letterSpacing: '0.04em',
                          mb: 1,
                        }}
                      >
                        Strategic Alliances
                      </Typography>
                      <Typography sx={{ color: '#777', fontSize: '0.88rem', lineHeight: 1.6 }}>
                        Collaborating with industry pioneers, academic institutions, and regional innovators to foster groundbreaking discussions.
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <Box
                      sx={{
                        p: 3.5,
                        height: '100%',
                        borderRadius: '16px',
                        background: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          borderColor: 'rgba(229, 9, 20, 0.4)',
                          transform: 'translateY(-4px)',
                          background: 'rgba(229, 9, 20, 0.03)',
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: '10px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: 'rgba(255, 215, 0, 0.1)',
                          color: '#FFD700',
                          mb: 2,
                        }}
                      >
                        <HourglassEmptyIcon />
                      </Box>
                      <Typography
                        sx={{
                          fontFamily: "'Bebas Neue', sans-serif",
                          fontSize: '1.3rem',
                          color: '#fff',
                          letterSpacing: '0.04em',
                          mb: 1,
                        }}
                      >
                        Revealing Soon
                      </Typography>
                      <Typography sx={{ color: '#777', fontSize: '0.88rem', lineHeight: 1.6 }}>
                        Official brand showcases, partner banners, and exclusive tier benefits are currently being configured for launch.
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <Box
                      sx={{
                        p: 3.5,
                        height: '100%',
                        borderRadius: '16px',
                        background: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          borderColor: 'rgba(229, 9, 20, 0.4)',
                          transform: 'translateY(-4px)',
                          background: 'rgba(229, 9, 20, 0.03)',
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: '10px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: 'rgba(229, 9, 20, 0.1)',
                          color: '#E50914',
                          mb: 2,
                        }}
                      >
                        <RocketLaunchIcon />
                      </Box>
                      <Typography
                        sx={{
                          fontFamily: "'Bebas Neue', sans-serif",
                          fontSize: '1.3rem',
                          color: '#fff',
                          letterSpacing: '0.04em',
                          mb: 1,
                        }}
                      >
                        Open Inquiries
                      </Typography>
                      <Typography sx={{ color: '#777', fontSize: '0.88rem', lineHeight: 1.6 }}>
                        A few exclusive sponsorship slots are still accessible for brands wishing to create meaningful impact.
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>

                {/* Call to action buttons */}
                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Button
                    component={Link}
                    to="/contact"
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      background: '#E50914',
                      color: '#ffffff',
                      px: 4,
                      py: 1.5,
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      '&:hover': {
                        background: '#b8070f',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.25s ease',
                    }}
                  >
                    Partner With Us
                  </Button>
                  <Button
                    component="a"
                    href="mailto:tedxvetias@college.edu?subject=TEDxVETIAS%20Sponsorship%20Inquiry"
                    variant="outlined"
                    size="large"
                    startIcon={<EmailIcon />}
                    sx={{
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                      color: '#ffffff',
                      px: 3.5,
                      py: 1.5,
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      '&:hover': {
                        borderColor: '#E50914',
                        color: '#E50914',
                        background: 'rgba(229, 9, 20, 0.05)',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.25s ease',
                    }}
                  >
                    Contact Team
                  </Button>
                </Box>
              </Box>
            </ScrollReveal>
          )}
        </Container>
      </Box>

      {/* Sponsorship CTA & Tiers Overview */}
      <Box sx={{ background: '#080808', borderTop: '1px solid rgba(229,9,20,0.1)', py: 16 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <SectionTitle
            overline="Partner With Us"
            title={<>Become a <span>Sponsor</span></>}
            subtitle="Align your brand with innovation, curiosity, and impact. Connect with 500+ attendees and an expansive online audience."
          />

          <Grid container spacing={3} sx={{ mb: 6 }}>
            {TIERS.map((tier) => (
              <Grid item xs={12} sm={6} md={3} key={tier.name}>
                <ScrollReveal direction="up">
                  <Box
                    sx={{
                      p: 3,
                      height: '100%',
                      border: `1px solid ${tier.color}33`,
                      textAlign: 'center',
                      background: 'rgba(15,15,15,0.6)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: tier.color,
                        transform: 'translateY(-4px)',
                        boxShadow: `0 8px 24px ${tier.color}15`,
                      },
                    }}
                  >
                    <Box sx={{ width: 16, height: 16, background: tier.color, mx: 'auto', mb: 1.5 }} />
                    <Typography sx={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.2rem', color: tier.color, letterSpacing: '0.06em', mb: 0.5 }}>
                      {tier.name}
                    </Typography>
                    <Typography sx={{ color: '#777', fontSize: '0.8rem', lineHeight: 1.6 }}>{tier.description}</Typography>
                  </Box>
                </ScrollReveal>
              </Grid>
            ))}
          </Grid>

          <ScrollReveal direction="up">
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                background: '#E50914',
                color: '#ffffff',
                px: 4.5,
                py: 1.5,
                fontWeight: 700,
                letterSpacing: '0.08em',
                '&:hover': {
                  background: '#b8070f',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.25s ease',
              }}
            >
              Get In Touch To Sponsor
            </Button>
          </ScrollReveal>
        </Container>
      </Box>
    </Box>
  );
};

export default Sponsors;

