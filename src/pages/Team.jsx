import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Grid, CircularProgress } from '@mui/material';
import TeamCard from '../components/TeamCard';
import SectionTitle from '../components/SectionTitle';
import SEO from '../components/SEO';
import { getTeam } from '../services/api';

const SAMPLE_TEAM = [
  { _id: '1', name: 'Paripoorna', position: 'Event Coordinator', department: 'Core Team', photo: '' },
  { _id: '2', name: 'Karthika', position: 'Creative Director', department: 'Core Team', photo: '' },
  { _id: '3', name: 'Logeshwaran', position: 'Head of Curation', department: 'Core Team', photo: '' },
  { _id: '4', name: 'Piraneshvaran', position: 'Technical Lead', department: 'Core Team', photo: '' },
  { _id: '5', name: 'Jishnu', position: 'Marketing Head', department: 'Core Team', photo: '' },
  { _id: '6', name: 'Bhuvaneshwari', position: 'Logistics Manager', department: 'Core Team', photo: '' },
  { _id: '7', name: 'Rithanya', position: 'Design Lead', department: 'Creative', photo: '' },
  { _id: '8', name: 'Abdul Rahman', position: 'Social Media Manager', department: 'Marketing', photo: '' },
  { _id: '9', name: 'Rishab', position: 'Finance Head', department: 'Operations', photo: '' },
  { _id: '11', name: 'Sri Saravanan', position: 'Sponsorship Manager', department: 'Operations', photo: '' },
  { _id: '12', name: 'Vigneswara', position: 'Volunteer Coordinator', department: 'Operations', photo: '' },
  { _id: '13', name: 'Mythreye', position: 'Team Management', department: 'Core Team', photo: '' },
  { _id: '10', name: 'Naveen', position: 'Videography Lead', department: 'Media', photo: '' },
  { _id: '14', name: 'Kavin G', position: 'Web Development Lead', department: 'Creative', photo: 'https://kaving.vercel.app/images/kaving.jpg' },
  { _id: '15', name: 'Mukilan', position: 'Venue Director', department: 'Operations', photo: '' },
  { _id: '16', name: 'Anuprabha', position: 'Speakers', department: 'Operations', photo: '' },
  { _id: '17', name: 'Lingesh Raja', position: 'Branding', department: 'Creative', photo: '' },
  { _id: '18', name: 'MMouriya', position: 'Logistics', department: 'Operations', photo: '' },
  { _id: '19', name: 'Vakshana', position: 'Social Media', department: 'Marketing', photo: '' },
  { _id: '20', name: 'Lakshmi Prabha', position: 'Videography', department: 'Media', photo: '' },
  { _id: '21', name: 'Divya', position: 'Audience + Experience', department: 'Operations', photo: '' },
  
];

const DEPARTMENTS = ['All', 'Core Team', 'Creative', 'Marketing', 'Operations', 'Media'];

const Team = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    getTeam()
      .then((res) => setTeam(res.data.length ? res.data : SAMPLE_TEAM))
      .catch(() => setTeam(SAMPLE_TEAM))
      .finally(() => setLoading(false));
  }, []);

  const filtered = filter === 'All' ? team : team.filter((m) => m.department === filter);

  return (
    <Box>
      <SEO 
        title="Our Team" 
        description="Meet the passionate student team behind TEDx VETIAS turning a bold idea into an unforgettable experience."
      />
      {/* Hero */}
      <Box sx={{ pt: 20, pb: 12, background: '#0f0f0f', position: 'relative', overflow: 'hidden' }}>
        <Typography
          sx={{
            position: 'absolute', top: '5%', right: '-3%',
            fontFamily: "'Bebas Neue', sans-serif", fontSize: '18vw',
            color: 'rgba(229,9,20,0.03)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
          }}
        >
          TEAM
        </Typography>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="overline" sx={{ color: '#E50914', fontFamily: "'DM Mono', monospace", letterSpacing: '0.25em', fontSize: '0.72rem' }}>
            The People
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: '3.5rem', md: '7rem' }, lineHeight: 0.88, mt: 1 }}>
            Meet the<br /><Box component="span" sx={{ color: '#E50914' }}>Team</Box>
          </Typography>
          <Typography sx={{ color: '#666', maxWidth: 500, lineHeight: 1.85, mt: 3, fontSize: '1rem' }}>
            A passionate group of students turning a bold idea into an unforgettable experience.
          </Typography>
        </Container>
      </Box>

      {/* Filter */}
      <Box sx={{ py: 4, background: '#080808', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            {DEPARTMENTS.map((dept) => (
              <Box
                key={dept}
                onClick={() => setFilter(dept)}
                sx={{
                  px: 3,
                  py: 0.8,
                  border: '1px solid',
                  borderColor: filter === dept ? '#E50914' : 'rgba(255,255,255,0.1)',
                  color: filter === dept ? '#E50914' : '#666',
                  background: filter === dept ? 'rgba(229,9,20,0.08)' : 'transparent',
                  cursor: 'pointer',
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '0.7rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  transition: 'all 0.25s ease',
                  '&:hover': { borderColor: '#E50914', color: '#E50914' },
                }}
              >
                {dept}
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Grid */}
      <Box sx={{ py: 14 }}>
        <Container maxWidth="lg">
          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 12 }}>
              <CircularProgress color="primary" />
            </Box>
          ) : (
            <Grid container spacing={5}>
              {filtered.map((member, i) => (
                <Grid item xs={6} sm={4} md={3} lg={2} key={member._id}>
                  <TeamCard member={member} delay={(i % 6) * 0.07} />
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
      </Box>

      {/* Join the team */}
      <Box sx={{ background: '#080808', borderTop: '1px solid rgba(229,9,20,0.1)', py: 12, textAlign: 'center' }}>
        <Container maxWidth="sm">
          <Typography variant="h3" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, mb: 2 }}>
            Join the <Box component="span" sx={{ color: '#E50914' }}>Crew</Box>
          </Typography>
          <Typography sx={{ color: '#666', lineHeight: 1.8, mb: 4 }}>
            Volunteer applications open two months before the event. Be part of something that sparks minds and changes lives.
          </Typography>
          <Typography
            component="a"
            href="mailto:tedxvetias@college.edu"
            sx={{ color: '#E50914', fontFamily: "'DM Mono', monospace", fontSize: '0.85rem', letterSpacing: '0.1em', textDecoration: 'none', borderBottom: '1px solid #E50914', pb: 0.5 }}
          >
            Apply to Volunteer
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Team;
