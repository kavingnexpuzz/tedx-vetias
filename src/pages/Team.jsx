import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Grid, CircularProgress } from '@mui/material';
import TeamCard from '../components/TeamCard';

import SEO from '../components/SEO';
import { getTeam } from '../services/api';

const SAMPLE_TEAM = [
  { _id: '1', name: 'Paripoorna', position: 'Event Coordinator', department: 'Team Management', photo: ' https://vetiasportal.vetias.ac.in/Impreserp/Resx/StudImages/2CE494EE-0309-4449-B579-E00858A02BF4.jpg' },
  { _id: '2', name: 'Karthika', position: 'Creative Director', department: 'Team Management', photo: 'https://vetiasportal.vetias.ac.in/Impreserp/Resx/StudImages/F142300E-F67A-4F51-8E60-407A371629D7.jpg' },
  { _id: '3', name: 'Mythreye', position: 'Strategic Planning', department: 'Team Management', photo: 'https://vetiasportal.vetias.ac.in/Impreserp/Resx/StudImages/E3380C5A-814C-4873-9E74-46143A518354.jpg' },
  { _id: '4', name: 'Mouriya', position: 'Delegation & Workflow', department: 'Team Management', photo: 'https://vetiasportal.vetias.ac.in/Impreserp/Resx/StudImages/8F2BBF48-829D-4CB2-9051-2A4306D67CAE.jpg' },
  { _id: '5', name: 'Ezhilarasi', position: 'Conflict Resolution', department: 'Team Management', photo: 'https://vetiasportal.vetias.ac.in/Impreserp/Resx/StudImages/60D6B513-515C-43F1-BFBA-B9073EB0AF2F.jpg' },
  { _id: '6', name: 'Mukilan', position: 'Facility Maintenance', department: 'Venue/Space', photo: 'https://vetiasportal.vetias.ac.in/Impreserp/Resx/StudImages/B3C916CC-E6F1-4D6C-A656-8E45D8A0FBB7.jpg' },
  { _id: '7', name: 'Hariharan', position: 'In-House Assets', department: 'Venue/Space', photo: 'https://vetiasportal.vetias.ac.in/Impreserp/Resx/StudImages/3FFA9E03-42BB-4361-9F7B-2E2F59E14D84.jpg' },
  { _id: '8', name: 'Pranesh G', position: 'Safety & Compliancer', department: 'Venue/Space', photo: 'https://vetiasportal.vetias.ac.in/Impreserp/Resx/StudImages/1A492BB3-26D8-4E4D-A8EC-B8586B406730.jpg' },
  { _id: '9', name: 'Logeshwaran', position: 'Booking & Administration', department: 'Venue/Space', photo: 'https://vetiasportal.vetias.ac.in/Impreserp/Resx/StudImages/9114E916-9489-4E62-94EC-C62F9DD2F535.jpg' },
  { _id: '11', name: 'Mithun Athith', position: 'Staffing', department: 'Venue/Space', photo: 'https://vetiasportal.vetias.ac.in/Impreserp/Resx/StudImages/2442D573-FCA7-46E9-9C9B-CD7C4F010B77.jpg' },
  { _id: '12', name: 'Bhuvaneshwari', position: 'Curate the Agenda', department: 'Speakers', photo: 'https://vetiasportal.vetias.ac.in/Impreserp/Resx/StudImages/AD31DF9D-3336-4E2D-86BE-2B51653708C5.jpg' },
  { _id: '13', name: 'Anuprabha', position: 'Speaker Sourcing', department: 'Speakers', photo: 'https://vetiasportal.vetias.ac.in/Impreserp/Resx/StudImages/01BA6D06-05CA-4A9D-AF39-FEA1B458A7D7.jpg' },
  { _id: '10', name: 'Dharshini M S', position: 'Speaker Booking', department: 'Speakers', photo: '' },
  { _id: '14', name: 'Rishab', position: 'Tech Management', department: 'Speakers', photo: 'https://vetiasportal.vetias.ac.in/Impreserp/Resx/StudImages/6B3F5D37-6070-4D3C-B0CA-32240A190A75.jpg '},
  { _id: '15', name: 'Piraneshvaran', position: 'Logistics', department: 'Speakers', photo: 'https://vetiasportal.vetias.ac.in/Impreserp/Resx/StudImages/7C928A1D-AFC6-49ED-BDF3-0636895FAF09.jpg' },
  { _id: '16', name: 'Abdual Rahuman', position: 'Promotions', department: 'Branding/Promotions', photo: 'https://vetiasportal.vetias.ac.in/Impreserp/Resx/StudImages/4A1795C5-70B4-4395-9A12-82FA559897C4.jpg' },
  { _id: '17', name: 'Lingesh Raja', position: 'Branding', department: 'Branding/Promotions', photo: '' },
  { _id: '18', name: 'Kishore', position: 'Promotions', department: 'Branding/Promotions', photo: 'https://vetiasportal.vetias.ac.in/Impreserp/Resx/StudImages/EE30BA2D-E655-4DBE-AE94-672C15FC629E.jpg' },
  { _id: '19', name: 'Vigneshwara', position: 'Event Design', department: 'Audience/Experience', photo: 'https://vetiasportal.vetias.ac.in/Impreserp/Resx/StudImages/07FC074A-D014-4AB0-932C-B880147AAFB6.jpg' },
  { _id: '20', name: 'Thanusri', position: 'Audience Strategy', department: 'Audience/Experience', photo: 'https://vetiasportal.vetias.ac.in/Impreserp/Resx/StudImages/27CCCD1C-2146-47C7-91B2-D2CB3F58A43D.jpg' },
  { _id: '21', name: 'Dharshni l', position: 'Program Curation', department: 'Audience/Experience', photo: 'https://vetiasportal.vetias.ac.in/Impreserp/Resx/StudImages/57309608-4C19-4FC1-A173-7C76101D3AAE.jpg' },
  { _id: '22', name: 'Divya', position: 'On-Site Execution', department: 'Audience/Experience', photo: 'https://vetiasportal.vetias.ac.in/Impreserp/Resx/StudImages/D982F24D-646B-4270-A483-D43CACC77CEB.jpg' },
  { _id: '23', name: 'Kavin G', position: 'Asset Management', department: 'Video/Photography', photo: 'https://vetiasportal.vetias.ac.in/Impreserp/Resx/StudImages/E945C360-0F63-4082-8794-04DB45233C15.jpg' },
  { _id: '24', name: 'Naveen', position: 'Photo/Video Organizer', department: 'Video/Photography', photo: 'https://vetiasportal.vetias.ac.in/Impreserp/Resx/StudImages/0D6821D2-DD76-4633-BC00-6B2F8E3D8A24.jpg' },
  { _id: '25', name: 'Lakshmi Prabha', position: 'Storage & Backups', department: 'Video/Photography', photo: 'https://vetiasportal.vetias.ac.in/Impreserp/Resx/StudImages/3E52B930-7944-4CEF-902E-67AA29ABBCFC.jpg' },
  { _id: '26', name: 'Abinaya', position: 'Videography', department: 'Video/Photography', photo: 'https://vetiasportal.vetias.ac.in/Impreserp/Resx/StudImages/79DA438D-BF53-495B-AA97-B059BE436E79.jpg' },
  { _id: '27', name: 'Abdual Rahuman', position: 'Editor', department: 'Video/Photography', photo: 'https://vetiasportal.vetias.ac.in/Impreserp/Resx/StudImages/4A1795C5-70B4-4395-9A12-82FA559897C4.jpg' },
  { _id: '28', name: 'Rithanya', position: 'Financial Reconciliation', department: 'PostEvent/Renewal', photo: 'https://vetiasportal.vetias.ac.in/Impreserp/Resx/StudImages/BC4DD809-B6ED-467E-A3C3-C2C8E226F5A9.jpg' },
  { _id: '29', name: 'Vakshana', position: 'Data and Analytics', department: 'PostEvent/Renewal', photo: 'https://vetiasportal.vetias.ac.in/Impreserp/Resx/StudImages/2DD26BBD-B21F-42FF-91C6-F6676D8FF8A6.jpg' },
  { _id: '30', name: 'kaviksha', position: 'Feedback Collection', department: 'PostEvent/Renewal', photo: 'https://vetiasportal.vetias.ac.in/Impreserp/Resx/StudImages/404971A5-EBE6-4D5D-BC8F-331DF86B9954.jpg' },
  { _id: '31', name: 'paripoorna', position: 'Debriefing', department: 'PostEvent/Renewal', photo: 'https://vetiasportal.vetias.ac.in/Impreserp/Resx/StudImages/2CE494EE-0309-4449-B579-E00858A02BF4.jpg' },
  { _id: '32', name: 'Rishab', position: 'Sponsor Outreach', department: 'Sponsers/Finances', photo: 'https://vetiasportal.vetias.ac.in/Impreserp/Resx/StudImages/6B3F5D37-6070-4D3C-B0CA-32240A190A75.jpg' },
  { _id: '33', name: 'Piraneshvaran', position: 'Expense Tracking', department: 'Sponsers/Finances', photo: 'https://vetiasportal.vetias.ac.in/Impreserp/Resx/StudImages/7C928A1D-AFC6-49ED-BDF3-0636895FAF09.jpg' },
  { _id: '34', name: 'Jishnu', position: 'Financial Reporting', department: 'Sponsers/Finances', photo: 'https://vetiasportal.vetias.ac.in/Impreserp/Resx/StudImages/0A0F956A-3B1D-4F35-BE55-6488C2079B99.jpg' },
  { _id: '35', name: 'sri Saravanan', position: 'Negotiation', department: 'Sponsers/Finances', photo: 'https://vetiasportal.vetias.ac.in/Impreserp/Resx/StudImages/D969F70B-8537-4450-BDBE-44814713021B.jpg' },
 
  
  
];

const DEPARTMENTS = ['All', 'Team Management', 'Venue/Space', 'Speakers', 'Branding/Promotions', 'Audience/Experience', 'Video/Photography', 'PostEvent/Renewal', 'Sponsers/Finances'];

const Team = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    getTeam()
      .then((res) => setTeam(Array.isArray(res.data) && res.data.length ? res.data : SAMPLE_TEAM))
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
