import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box, Typography, Button, Grid, Container, Chip,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlaceIcon from '@mui/icons-material/Place';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CountdownTimer from '../components/CountdownTimer';
import SpeakerCard from '../components/SpeakerCard';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ScrollReveal';
import SEO from '../components/SEO';
import { getSpeakers } from '../services/api';

const SAMPLE_SPEAKERS = [
   {
    _id: '1',
    name: 'Anitha',
    role: 'Industry Professional',
    description: 'Associated with MilkyMist, Anitha contributes to innovation and operational excellence in India’s growing dairy industry.',
    topic: 'Innovation in FMCG',
    photo: 'https://media.licdn.com/dms/image/v2/D5603AQFT0V6w306xpQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1678096418234?e=2147483647&v=beta&t=04aVOtacba_50rEzqBThmrWiGHjQJhWP9e_OXG2h7EU'
  },
  {
    _id: '2',
    name: 'Nandha Kumar',
    role: 'Tech YouTuber',
    description: 'Popular creator behind A2D Channel, Nandha Kumar simplifies technology and engineering concepts for millions of learners online.',
    topic: 'Technology for Everyone',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOoMzBItsI2Wc__rbvDYH34hfEWzLSrEi1XA&s'
  },
  {
    _id: '3',
    name: 'Dr. Indrajith',
    role: 'Doctor & Influencer',
    description: 'Known widely as Dr.Don, Dr. Indrajith combines healthcare awareness with engaging social media content to educate young audiences.',
    topic: 'Health Awareness in Digital Media',
    photo: 'data:image/jpeg;base64,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'
  }
];

const Home = () => {
  const [speakers, setSpeakers] = useState(SAMPLE_SPEAKERS);

  useEffect(() => {
    getSpeakers()
      .then((res) => { if (res.data.length) setSpeakers(res.data.slice(0, 3)); })
      .catch(() => {});
  }, []);

  return (
    <Box>
      <SEO 
        title="Home" 
        description="TEDx VETIAS 2026 - Beyond Boundaries. Discover inspiring ideas worth spreading from diverse voices at VETIAS College."
        keywords="TEDx, VETIAS, innovation, ideas worth spreading, Beyond Boundaries"
      />
      {/* ── HERO ─────────────────────────────────────────── */}
      <Box
        sx={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          background: 'transparent',
        }}
      >
        {/* Animated background grid */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(229,9,20,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(229,9,20,0.04) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            animation: 'gridPulse 8s ease-in-out infinite',
            '@keyframes gridPulse': {
              '0%, 100%': { opacity: 0.5 },
              '50%': { opacity: 1 },
            },
          }}
        />

        {/* Red glow orb */}
        <Box
          sx={{
            position: 'absolute',
            top: '20%',
            right: '-10%',
            width: 600,
            height: 600,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(229,9,20,0.15) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* Large background text */}
        <Typography
          sx={{
            position: 'absolute',
            bottom: '-8%',
            left: '-2%',
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: { xs: '15vw', md: '18vw' },
            color: 'rgba(229,9,20,0.04)',
            lineHeight: 1,
            userSelect: 'none',
            pointerEvents: 'none',
            letterSpacing: '0.02em',
          }}
        >
          TED<sup>x</sup>
        </Typography>

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, pt: 16, pb: 8 }}>
          <Box sx={{ maxWidth: 800 }}>
            {/* Overline */}
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1.5,
                mb: 3,
                animation: 'fadeSlideIn 0.8s ease both',
                '@keyframes fadeSlideIn': {
                  from: { opacity: 0, transform: 'translateY(24px)' },
                  to: { opacity: 1, transform: 'none' },
                },
              }}
            >
              <Box sx={{ width: 32, height: 2, background: '#E50914' }} />
              <Typography
                sx={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '0.7rem',
                  letterSpacing: '0.3em',
                  color: '#E50914',
                  textTransform: 'uppercase',
                }}
              >
                TEDx VETIAS · 2026
              </Typography>
            </Box>

            {/* Main headline */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '4.5rem', sm: '6.5rem', md: '9rem' },
                lineHeight: 0.88,
                mb: 4,
                animation: 'fadeSlideIn 0.9s 0.1s ease both',
                '& span': { color: '#E50914' },
              }}
            >
              Ideas
              <br />
              Worth
              <br />
              <span>Spreading</span>
            </Typography>

            {/* Subtext */}
            <Typography
              variant="body1"
              sx={{
                color: '#888',
                maxWidth: 520,
                lineHeight: 1.85,
                fontSize: '1.05rem',
                mb: 5,
                animation: 'fadeSlideIn 0.9s 0.2s ease both',
              }}
            >
              An independently organized TEDx event at VETIAS College, bringing together visionaries,
              innovators, and changemakers to ignite conversations that matter.
            </Typography>

            {/* CTA Buttons */}
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                flexWrap: 'wrap',
                animation: 'fadeSlideIn 0.9s 0.3s ease both',
              }}
            >
              <Button
                component={Link}
                to="/speakers"
                variant="contained"
                color="primary"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{ px: 4, py: 1.5, fontSize: '0.8rem' }}
              >
                Meet the Speakers
              </Button>
              <Button
                component={Link}
                to="/about"
                variant="outlined"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '0.8rem',
                  borderColor: 'rgba(255,255,255,0.2)',
                  color: '#ccc',
                  '&:hover': { borderColor: '#fff', color: '#fff', background: 'transparent' },
                }}
              >
                About TEDx
              </Button>
            </Box>
          </Box>
        </Container>

        {/* Scroll indicator */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 40,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
            animation: 'bounceScroll 2s ease-in-out infinite',
            '@keyframes bounceScroll': {
              '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
              '50%': { transform: 'translateX(-50%) translateY(8px)' },
            },
          }}
        >
          <Box sx={{ width: 1, height: 40, background: 'linear-gradient(to bottom, #E50914, transparent)' }} />
          <Typography sx={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.2em', color: '#444' }}>
            SCROLL
          </Typography>
        </Box>
      </Box>

      {/* ── COUNTDOWN ────────────────────────────────────── */}
      <Box sx={{ background: 'rgba(8,8,8,0.6)', backdropFilter: 'blur(10px)', py: 12, borderTop: '1px solid rgba(229,9,20,0.1)', borderBottom: '1px solid rgba(229,9,20,0.1)' }}>
        <Container maxWidth="lg">
          <SectionTitle
            overline="Mark Your Calendar"
            title={<>Event <span style={{ color: '#E50914' }}>Countdown</ span></>}
          />
          <CountdownTimer />

          {/* Event details pills */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mt: 6, flexWrap: 'wrap' }}>
            {[
              { icon: <CalendarMonthIcon fontSize="small" />, text: 'Sepember 12, 2026' },
              { icon: <AccessTimeIcon fontSize="small" />, text: '9:00 AM — 6:00 PM' },
              { icon: <PlaceIcon fontSize="small" />, text: 'VETIAS Auditorium, Erode, Tamil Nadu, India' },
            ].map((item, i) => (
              <Box
                key={i}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  color: '#777',
                  fontSize: '0.88rem',
                  fontFamily: "'DM Mono', monospace",
                  letterSpacing: '0.05em',
                }}
              >
                <Box sx={{ color: '#E50914' }}>{item.icon}</Box>
                {item.text}
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── THEME ────────────────────────────────────────── */}
      <Box sx={{ py: 14, position: 'relative', overflow: 'hidden' }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={5}>
              <SectionTitle
                overline="Theme 2025"
                title={<>Beyond <span>Boundaries</span></>}
                align="left"
                subtitle="This year, we explore what happens when ideas transcend limits — of discipline, geography, and imagination."
              />
              <Button
                component="a"
                href="https://kaving.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                color="primary"
                size="large"
                sx={{ mt: 3, px: 4, py: 1.5, fontSize: '0.9rem' }}
              >
                Book Ticket
              </Button>
            </Grid>
            <Grid item xs={12} md={7}>
              <Grid container spacing={3}>
                {[
                  { num: '01', title: 'Technology & Humanity', desc: 'How emerging tech shapes our lived experience and social fabric.' },
                  { num: '02', title: 'Sustainability & Future', desc: 'Reimagining our relationship with the planet for coming generations.' },
                  { num: '03', title: 'Art & Science Collision', desc: 'When creative expression meets analytical thinking, magic happens.' },
                  { num: '04', title: 'Voices from the Margins', desc: 'Amplifying perspectives too often left out of mainstream discourse.' },
                ].map((item, i) => (
                  <Grid item xs={12} sm={6} key={i}>
                    <ScrollReveal direction="up" delay={i * 0.1}>
                      <Box
                        sx={{
                          p: 3,
                          border: '1px solid rgba(229,9,20,0.12)',
                          background: 'rgba(229,9,20,0.02)',
                          position: 'relative',
                          transition: 'border-color 0.3s, background 0.3s',
                          '&:hover': { borderColor: 'rgba(229,9,20,0.4)', background: 'rgba(229,9,20,0.05)' },
                        }}
                      >
                        <Typography
                          sx={{ fontFamily: "'DM Mono', monospace", fontSize: '0.7rem', color: '#E50914', mb: 1.5, letterSpacing: '0.1em' }}
                        >
                          {item.num}
                        </Typography>
                        <Typography
                          sx={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.3rem', letterSpacing: '0.04em', mb: 1 }}
                        >
                          {item.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.7, fontSize: '0.85rem' }}>
                          {item.desc}
                        </Typography>
                      </Box>
                    </ScrollReveal>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── SPEAKERS PREVIEW ─────────────────────────────── */}
      <Box sx={{ py: 14, background: 'rgba(8,8,8,0.6)', backdropFilter: 'blur(10px)' }}>
        <Container maxWidth="lg">
          <SectionTitle
            overline="Featured Voices"
            title={<>Our <span>Speakers</span></>}
            subtitle="Thought leaders and innovators who will challenge, inspire, and transform your perspective."
          />
          <Grid container spacing={3} sx={{ mb: 6 }}>
            {speakers.map((s, i) => (
              <Grid item xs={12} sm={6} md={4} key={s._id}>
                <SpeakerCard speaker={s} delay={i * 0.12} />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: 'center' }}>
            <Button
              component={Link}
              to="/speakers"
              variant="outlined"
              color="primary"
              endIcon={<ArrowForwardIcon />}
              sx={{ px: 5, py: 1.5, fontSize: '0.8rem' }}
            >
              View All Speakers
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ── STATS ────────────────────────────────────────── */}
      <Box sx={{ py: 12, borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            {[
              { value: '12+', label: 'Inspiring Speakers' },
              { value: '500+', label: 'Expected Attendees' },
              { value: '8hrs', label: 'Of Ideas' },
              { value: '1', label: 'Unforgettable Day' },
            ].map((stat, i) => (
              <Grid item xs={6} md={3} key={i} sx={{ textAlign: 'center' }}>
                <ScrollReveal direction="up" delay={i * 0.1}>
                  <Typography
                    sx={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: { xs: '3.5rem', md: '5rem' },
                      color: '#E50914',
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    sx={{ color: '#555', fontFamily: "'DM Mono', monospace", fontSize: '0.7rem', letterSpacing: '0.15em', mt: 1 }}
                  >
                    {stat.label.toUpperCase()}
                  </Typography>
                </ScrollReveal>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
