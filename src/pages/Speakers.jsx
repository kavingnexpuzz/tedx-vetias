import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Grid, CircularProgress } from '@mui/material';
import SpeakerCard from '../components/SpeakerCard';

import SEO from '../components/SEO';
import { getSpeakers } from '../services/api';

const SAMPLE_SPEAKERS = [
  {
    _id: "1",
    name: "Dr. Jayaprakash Jagadeesan",
    role: "Psychiatrist & Founder, Manathin Maiyam",
    description:
      "Dr. Jayaprakash Jagadeesan is a psychiatrist and the founder-director of Manathin Maiyam, a psychological wellness and mental health care centre located in Erode, Tamil Nadu.",
    topic: "Mental Health & Wellbeing",
    photo: "images/JayaprakashJegadeesan.png",
  },
  {
    _id: "2",
    name: "Dr. R. Santhanam",
    role: "Senior Scientist ''F''",
    description:
      "I am an Adjunct Professor in the Aerospace Department, Defence Institute of Advanced Technology (DIAT), Deemed University under Ministry of Defence, Pune in addition to my regular official responsibilities since 2024...",
    topic: "Aerospace Engineering & Research",
    photo: "images/santhanam.jpeg",
  },
  {
    _id: "3",
    name: "Senthilkumar",
    role: "Director, Sakthi masala",
    description:
      "Senthilkumar is the Director of Sakthi masala, a company dedicated to promoting sustainable and ethical business practices.",
    topic: "Sustainable Business Practices",
    photo: "images/senthilkumar.png",
  },
  {
    _id: "4",
    name: "Dr. Sudhakar Kandaswamy",
    role: "Cardiologist",
    description:
      "Established in 1985 by Dr. D. Kandasamy, Sudha Multispeciality Hospital was born out of a vision to bring world-class healthcare to his homeland.",
    topic: "Cardiology & Healthcare",
    photo: "images/sudhagar.png",
  },
  {
    _id: "5",
    name: "Dr.C. Palanivelu",
    role: "Chairman of GEM Hospital",
    description:
      "Dr C Palanivelu pioneer in laparoscopic cancer operation and advanced laparoscopic operation has innovated many new operations first time in the world. ",
    topic: "Laparoscopic Surgery & Medical Innovation",
    photo: "images/Palanivel.png",
  },
  {
    _id: "6",
    name: "MS SOWMYA BALASUBRAMANIAM",
    role: "Founder, HOOGA SEED",
    description:
      "Sowmya Balasubramaniam is the founder of Hooga Seed, a company that focuses on innovative solutions in the healthcare sector, aiming to improve patient care and medical outcomes.",
    topic: "Innovations in Healthcare",
    photo: "images/Sowmya.jpeg",
  },
  {
    _id: "7",
    name: "​M S Aishwarya",
    role: "Tamil Nadu State Cricketer",
    description:
      "​M S Aishwarya is a Tamil Nadu state cricketer, top-order batter, and India’s 4th fastest bowler.",
    topic: "Cricket & Sports Excellence",
    photo: "images/aiswarya.jpeg",
  },

  {
    _id: "9",
    name: "Sonu Satheesh Kumar",
    role: "Kuchipudi Dancer & TV Artist",
    description:
      "Sonu Satheesh Kumar is a versatile Kuchipudi dancer and a popular TV artist ,well known for her dance performances in India & abroad.",
    topic: "Kuchipudi Dance & Cultural Heritage",
    photo: "images/SonaSathees.png",
  },
  {
    _id: "10",
    name: "Nandha Kumar",
    role: "Indian Revenue Service (IRS) Officer & Motivational Speaker",
    description:
      "V. Nandakumar is a prominent Indian Revenue Service (IRS) officer, Income Tax Commissioner, and motivational speaker known for overcoming severe childhood hardships.",
    topic: "Motivational Speaking & Public Service",
    photo: "images/Nanthakumar.png",
  },
  {
    _id: "11",
    name: "M. YUVARAJA",
    role: "Entrepreneur",
    description:
      "A prominent political figure from Erode, M. Yuvaraja has a multi-decade career in public service, having transitioned from leading the Tamil Maanila Congress (TMC) youth wing to contesting elections with the BJP.",
    topic: "Grassroots Political Leadership and Regional Governance",
    photo: "images/yuvaraj.png",
  },
  {
    _id: "12",
    name: "Sai Vignesh",
    role: "Playback Singer, and Musician",
    description:
      "Sai Vignesh is a talented playback singer and musician, known for his melodious voice and contributions to the music industry.",
    topic: "Music & Arts",
    photo: "images/saivignesh.png",
  },
  {
    _id: "13",
    name: "Arvinda Bharathi",
    role: "Senior Director at Everstage & Author",
    description:
      "Arvinda Bharathi is a business leader at Everstage and the acclaimed author of the campus fiction novel 'When the Gates Closed'.",
    topic: "Literature & Identity",
    photo: "images/AB.png",
  },
  {
    _id: "14",
    name: "S. Vignesh",
    role: "Manager - HR & Admin (Heading Perundurai Plant), Britannia Industries",
    description:
      "To handle a challenging role in an organization, where I can learn and contribute, build strong relations with my team, work towards the team’s goals and thereby help the organization to achieve its goals and ensure they exceed customer’s expectations.",
    topic: "HR & Plant Management",
    photo: "images/HR.jpeg",
  },
];

const Speakers = () => {
  const [speakers, setSpeakers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSpeakers()
      .then((res) => setSpeakers(Array.isArray(res.data) && res.data.length ? res.data : SAMPLE_SPEAKERS))
      .catch(() => setSpeakers(SAMPLE_SPEAKERS))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Box>
      <SEO 
        title="Speakers" 
        description="Meet the remarkable speakers of TEDxVETIAS 2026. Discover the thought leaders and innovators who will challenge and inspire your perspective."
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
          SPEAK
        </Typography>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="overline" sx={{ color: '#E50914', fontFamily: "'DM Mono', monospace", letterSpacing: '0.25em', fontSize: '0.72rem' }}>
            Voices 2026
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: '3.5rem', md: '7rem' }, lineHeight: 0.88, mt: 1 }}>
            Our<br /><Box component="span" sx={{ color: '#E50914' }}>Speakers</Box>
          </Typography>
          <Typography sx={{ color: '#666', maxWidth: 520, lineHeight: 1.85, mt: 3, fontSize: '1rem' }}>
            Twelve remarkable individuals from vastly different worlds, united by the power of one
            idea ready to change everything.
          </Typography>
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
            <Grid container spacing={3}>
              {speakers.map((s, i) => (
                <Grid item xs={12} sm={6} md={3} key={s._id}>
                  <SpeakerCard speaker={s} delay={(i % 4) * 0.1} />
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
      </Box>

      {/* Speaker CTA */}
      <Box sx={{ background: '#0a0a0a', borderTop: '1px solid rgba(229,9,20,0.1)', py: 12, textAlign: 'center' }}>
        <Container maxWidth="sm">
          <Typography variant="h3" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, mb: 2 }}>
            Want to <Box component="span" sx={{ color: '#E50914' }}>Speak?</Box>
          </Typography>
          <Typography sx={{ color: '#666', lineHeight: 1.8, mb: 4 }}>
            We're always looking for bold voices with fresh perspectives. Applications for future editions open throughout the year.
          </Typography>
          <Typography
            component="a"
            href="mailto:tedxvetias@college.edu"
            sx={{ color: '#E50914', fontFamily: "'DM Mono', monospace", fontSize: '0.85rem', letterSpacing: '0.1em', textDecoration: 'none', borderBottom: '1px solid #E50914', pb: 0.5 }}
          >
            tedx@vetias.ac.in
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Speakers;
