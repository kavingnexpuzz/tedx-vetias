import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ScrollReveal';
import SEO from '../components/SEO';
import { getSponsors } from '../services/api';

const SAMPLE_SPONSORS = [
  { _id: '1', name: 'InnovateTech Corp', tier: 'Presenting', logo: '', website: '#' },
  { _id: '2', name: 'Nexus Ventures', tier: 'Gold', logo: '', website: '#' },
  { _id: '3', name: 'Apex Analytics', tier: 'Gold', logo: '', website: '#' },
  { _id: '4', name: 'CloudSphere', tier: 'Silver', logo: '', website: '#' },
  { _id: '5', name: 'DevBridge Labs', tier: 'Silver', logo: '', website: '#' },
  { _id: '6', name: 'PulseTech', tier: 'Silver', logo: '', website: '#' },
  { _id: '7', name: 'ByteForge', tier: 'Bronze', logo: '', website: '#' },
  { _id: '8', name: 'Catalyze Media', tier: 'Bronze', logo: '', website: '#' },
  { _id: '9', name: 'Spark Studio', tier: 'Bronze', logo: '', website: '#' },
  { _id: '10', name: 'RootBase Inc', tier: 'Bronze', logo: '', website: '#' },
];

const TIERS = [
  { name: 'Presenting', color: '#E50914', size: 200, description: 'Lead partner with maximum brand integration' },
  { name: 'Gold', color: '#FFD700', size: 160, description: 'Premium partners with prominent visibility' },
  { name: 'Silver', color: '#C0C0C0', size: 130, description: 'Core sponsors with strong presence' },
  { name: 'Bronze', color: '#CD7F32', size: 100, description: 'Community supporters' },
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
      <Box component="img" src={sponsor.logo} alt={sponsor.name} sx={{ maxWidth: '75%', maxHeight: '70%', objectFit: 'contain', filter: 'grayscale(1) brightness(2)', '&:hover': { filter: 'none' }, transition: 'filter 0.3s' }} />
    ) : (
      <Typography sx={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: size * 0.1, color: '#444', letterSpacing: '0.05em', textAlign: 'center', px: 2 }}>
        {sponsor.name}
      </Typography>
    )}
  </Box>
);

const Sponsors = () => {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    getSponsors()
      .then((res) => setSponsors(res.data.length ? res.data : SAMPLE_SPONSORS))
      .catch(() => setSponsors(SAMPLE_SPONSORS));
  }, []);

  const byTier = (tier) => sponsors.filter((s) => s.tier === tier);

  return (
    <Box>
      <SEO 
        title="Sponsors" 
        description="TEDx VETIAS is made possible by the generous support of organizations that believe in the power of ideas."
      />
      {/* Hero */}
      <Box sx={{ pt: 20, pb: 12, background: '#0f0f0f', position: 'relative', overflow: 'hidden' }}>
        <Typography sx={{ position: 'absolute', top: '5%', right: '-3%', fontFamily: "'Bebas Neue', sans-serif", fontSize: '15vw', color: 'rgba(229,9,20,0.03)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>
          SPONSORS
        </Typography>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="overline" sx={{ color: '#E50914', fontFamily: "'DM Mono', monospace", letterSpacing: '0.25em', fontSize: '0.72rem' }}>
            Partners
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: '3.5rem', md: '7rem' }, lineHeight: 0.88, mt: 1 }}>
            Our <Box component="span" sx={{ color: '#E50914' }}>Sponsors</Box>
          </Typography>
          <Typography sx={{ color: '#666', maxWidth: 500, lineHeight: 1.85, mt: 3, fontSize: '1rem' }}>
            TEDx VETIAS is made possible by the generous support of organizations that believe in the power of ideas.
          </Typography>
        </Container>
      </Box>

      {/* Sponsor tiers */}
      <Box sx={{ py: 14 }}>
        <Container maxWidth="lg">
          {TIERS.map((tier, ti) => {
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
          })}
        </Container>
      </Box>

      {/* Sponsorship CTA */}
      <Box sx={{ background: '#080808', borderTop: '1px solid rgba(229,9,20,0.1)', py: 16 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <SectionTitle
            overline="Partner With Us"
            title={<>Become a <span>Sponsor</span></>}
            subtitle="Align your brand with innovation, curiosity, and impact. Connect with 500+ attendees and a wider online audience."
          />

          <Grid container spacing={3} sx={{ mb: 8 }}>
            {TIERS.map((tier) => (
              <Grid item xs={12} sm={6} md={3} key={tier.name}>
                <ScrollReveal direction="up">
                  <Box sx={{ p: 3, border: `1px solid ${tier.color}33`, textAlign: 'center' }}>
                    <Box sx={{ width: 16, height: 16, background: tier.color, mx: 'auto', mb: 1.5 }} />
                    <Typography sx={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.2rem', color: tier.color, letterSpacing: '0.06em', mb: 0.5 }}>
                      {tier.name}
                    </Typography>
                    <Typography sx={{ color: '#555', fontSize: '0.78rem', lineHeight: 1.6 }}>{tier.description}</Typography>
                  </Box>
                </ScrollReveal>
              </Grid>
            ))}
          </Grid>

          <Button
            component="a"
            href="mailto:tedxvetias@college.edu"
            variant="contained"
            color="primary"
            size="large"
            sx={{ px: 6, py: 1.75, fontSize: '0.8rem' }}
          >
            Request Sponsorship Prospectus
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Sponsors;
