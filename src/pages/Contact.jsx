import React, { useState } from 'react';
import {
  Box, Container, Typography, Grid, TextField, Button,
  Snackbar, Alert, CircularProgress,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ScrollReveal';
import { submitContact } from '../services/api';

const CONTACT_INFO = [
  { icon: <EmailIcon />, label: 'Email', value: 'tedxvetias@college.edu', href: 'mailto:tedxvetias@college.edu' },
  { icon: <PhoneIcon />, label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' },
  { icon: <PlaceIcon />, label: 'Location', value: 'VETIAS College of Engineering, Anna Nagar, Chennai – 600 040', href: 'https://maps.google.com' },
];

const SOCIALS = [
  { icon: <InstagramIcon />, label: 'Instagram', href: 'https://instagram.com' },
  { icon: <TwitterIcon />, label: 'Twitter', href: 'https://twitter.com' },
  { icon: <LinkedInIcon />, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: <YouTubeIcon />, label: 'YouTube', href: 'https://youtube.com' },
];

const inputSx = {
  '& .MuiOutlinedInput-root': {
    borderRadius: 0,
    background: '#111',
    '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' },
    '&:hover fieldset': { borderColor: 'rgba(229,9,20,0.4)' },
    '&.Mui-focused fieldset': { borderColor: '#E50914', borderWidth: 1 },
  },
  '& .MuiInputLabel-root': { color: '#555' },
  '& .MuiInputLabel-root.Mui-focused': { color: '#E50914' },
  '& .MuiOutlinedInput-input': { color: '#f0f0f0' },
};

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [snack, setSnack] = useState({ open: false, type: 'success', msg: '' });

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setSnack({ open: true, type: 'error', msg: 'Please fill all required fields.' });
      return;
    }
    setLoading(true);
    try {
      await submitContact(form);
      setSnack({ open: true, type: 'success', msg: 'Message sent! We\'ll get back to you soon.' });
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setSnack({ open: true, type: 'error', msg: 'Something went wrong. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      {/* Hero */}
      <Box sx={{ pt: 20, pb: 12, background: '#0f0f0f', position: 'relative', overflow: 'hidden' }}>
        <Typography sx={{ position: 'absolute', top: '5%', right: '-3%', fontFamily: "'Bebas Neue', sans-serif", fontSize: '15vw', color: 'rgba(229,9,20,0.03)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>
          CONTACT
        </Typography>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="overline" sx={{ color: '#E50914', fontFamily: "'DM Mono', monospace", letterSpacing: '0.25em', fontSize: '0.72rem' }}>
            Reach Out
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: '3.5rem', md: '7rem' }, lineHeight: 0.88, mt: 1 }}>
            Get in <Box component="span" sx={{ color: '#E50914' }}>Touch</Box>
          </Typography>
        </Container>
      </Box>

      {/* Content */}
      <Box sx={{ py: 14 }}>
        <Container maxWidth="lg">
          <Grid container spacing={10}>
            {/* Contact info */}
            <Grid item xs={12} md={4}>
              <SectionTitle overline="Contact Details" title="Let's Talk" align="left" />

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, mb: 6 }}>
                {CONTACT_INFO.map((info, i) => (
                  <ScrollReveal key={i} direction="left" delay={i * 0.1}>
                    <Box
                      component="a"
                      href={info.href}
                      target={info.label === 'Location' ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      sx={{ display: 'flex', gap: 2.5, alignItems: 'flex-start', textDecoration: 'none', '&:hover .info-icon': { color: '#E50914' } }}
                    >
                      <Box
                        className="info-icon"
                        sx={{ color: '#555', mt: 0.2, transition: 'color 0.25s', flexShrink: 0 }}
                      >
                        {info.icon}
                      </Box>
                      <Box>
                        <Typography sx={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', color: '#E50914', letterSpacing: '0.15em', mb: 0.5, textTransform: 'uppercase' }}>
                          {info.label}
                        </Typography>
                        <Typography sx={{ color: '#888', fontSize: '0.9rem', lineHeight: 1.6 }}>
                          {info.value}
                        </Typography>
                      </Box>
                    </Box>
                  </ScrollReveal>
                ))}
              </Box>

              {/* Socials */}
              <ScrollReveal direction="up" delay={0.3}>
                <Typography sx={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', color: '#555', letterSpacing: '0.15em', mb: 2, textTransform: 'uppercase' }}>
                  Follow Us
                </Typography>
                <Box sx={{ display: 'flex', gap: 1.5 }}>
                  {SOCIALS.map((s) => (
                    <Box
                      key={s.label}
                      component="a"
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        width: 40,
                        height: 40,
                        border: '1px solid rgba(255,255,255,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#555',
                        textDecoration: 'none',
                        transition: 'all 0.25s ease',
                        '&:hover': { color: '#E50914', borderColor: '#E50914', background: 'rgba(229,9,20,0.06)' },
                      }}
                    >
                      {s.icon}
                    </Box>
                  ))}
                </Box>
              </ScrollReveal>
            </Grid>

            {/* Contact form */}
            <Grid item xs={12} md={8}>
              <ScrollReveal direction="right" delay={0.1}>
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
                >
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Your Name *"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        sx={inputSx}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email Address *"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        sx={inputSx}
                      />
                    </Grid>
                  </Grid>

                  <TextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    sx={inputSx}
                  />

                  <TextField
                    fullWidth
                    label="Your Message *"
                    name="message"
                    multiline
                    rows={7}
                    value={form.message}
                    onChange={handleChange}
                    sx={inputSx}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    disabled={loading}
                    sx={{ alignSelf: 'flex-start', px: 5, py: 1.5, fontSize: '0.8rem' }}
                  >
                    {loading ? <CircularProgress size={20} color="inherit" /> : 'Send Message'}
                  </Button>
                </Box>
              </ScrollReveal>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Snackbar
        open={snack.open}
        autoHideDuration={5000}
        onClose={() => setSnack((s) => ({ ...s, open: false }))}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity={snack.type} onClose={() => setSnack((s) => ({ ...s, open: false }))} sx={{ borderRadius: 0 }}>
          {snack.msg}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
