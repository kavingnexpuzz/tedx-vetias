import React, { useState } from 'react';
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ScrollReveal';
import SEO from '../components/SEO';

const FAQS = [
  {
    category: 'About the Event',
    items: [
      { q: 'What is TEDx VETIAS?', a: 'TEDx VETIAS is an independently organized TED event licensed by TED. It is hosted annually at VETIAS College of Engineering in Chennai, bringing together speakers, performers, and thinkers to share ideas worth spreading.' },
      { q: 'When and where will the event be held?', a: 'TEDx VETIAS 2025 will be held on March 15, 2025, from 9:00 AM to 6:00 PM at the VETIAS College Auditorium, Chennai - 600 001, Tamil Nadu, India.' },
      { q: 'What is the theme for 2025?', a: '"Beyond Boundaries" — this year\'s theme explores how the most transformative ideas emerge when we dare to cross the borders of discipline, geography, and conventional thinking.' },
    ],
  },
  {
    category: 'Registration & Tickets',
    items: [
      { q: 'How do I register for TEDx VETIAS?', a: 'Registrations open approximately 6 weeks before the event. Follow our social media channels and website for announcements. Seats are limited and fill up quickly.' },
      { q: 'Is the event open to the public?', a: 'Yes! TEDx VETIAS is open to students, professionals, educators, and anyone with a curious mind. We welcome attendees from all backgrounds.' },
      { q: 'Are there any registration fees?', a: 'There is a nominal registration fee to cover event costs. Concessions are available for students. Check our registration page when it opens for current pricing.' },
      { q: 'Can I attend if I am not from VETIAS College?', a: 'Absolutely. TEDx events are open to the public. We encourage attendees from all institutions and organizations to join us.' },
    ],
  },
  {
    category: 'Speakers & Program',
    items: [
      { q: 'How are speakers selected?', a: 'Speakers are selected through a rigorous curation process by our team. We look for individuals with unique ideas, diverse perspectives, and the ability to present them compellingly. Talks are typically 10–18 minutes long.' },
      { q: 'Will the talks be recorded?', a: 'Yes. With permission from speakers, talks will be recorded and uploaded to the TEDx YouTube channel within 8–12 weeks of the event.' },
      { q: 'Can I nominate a speaker?', a: 'We accept speaker nominations year-round. Please reach out to us via email with the nominee\'s details, background, and the idea they would share.' },
    ],
  },
  {
    category: 'Volunteering & Sponsorship',
    items: [
      { q: 'How can I volunteer for TEDx VETIAS?', a: 'Volunteer applications open approximately 2 months before the event. Roles include event coordination, logistics, media, design, and hospitality. Apply through our contact page or email.' },
      { q: 'How can my organization sponsor TEDx VETIAS?', a: 'We offer various sponsorship tiers with different benefits and visibility options. Please contact our team at tedxvetias@college.edu for our sponsorship prospectus.' },
      { q: 'What do sponsors receive in return?', a: 'Sponsors receive branding on all event materials, recognition during the event, access to attendee networking sessions, and logo placement on the TEDx VETIAS website and talk videos.' },
    ],
  },
];

const FAQ = () => {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (id) => (_, isExpanded) => {
    setExpanded(isExpanded ? id : null);
  };

  return (
    <Box>
      <SEO 
        title="FAQ" 
        description="Frequently Asked Questions about TEDx VETIAS. Find information about event dates, registration, tickets, and more."
      />
      {/* Hero */}
      <Box sx={{ pt: 20, pb: 12, background: '#0f0f0f', position: 'relative', overflow: 'hidden' }}>
        <Typography sx={{ position: 'absolute', top: '5%', right: '-3%', fontFamily: "'Bebas Neue', sans-serif", fontSize: '18vw', color: 'rgba(229,9,20,0.03)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>
          FAQ
        </Typography>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="overline" sx={{ color: '#E50914', fontFamily: "'DM Mono', monospace", letterSpacing: '0.25em', fontSize: '0.72rem' }}>
            Got Questions?
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: '3.5rem', md: '7rem' }, lineHeight: 0.88, mt: 1 }}>
            Frequently<br /><Box component="span" sx={{ color: '#E50914' }}>Asked</Box>
          </Typography>
        </Container>
      </Box>

      {/* FAQ Content */}
      <Box sx={{ py: 14 }}>
        <Container maxWidth="md">
          {FAQS.map((section, si) => (
            <Box key={si} sx={{ mb: 8 }}>
              <ScrollReveal direction="up" delay={0.05}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
                  <Box sx={{ width: 32, height: 2, background: '#E50914' }} />
                  <Typography
                    sx={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem', letterSpacing: '0.08em', color: '#E50914' }}
                  >
                    {section.category}
                  </Typography>
                </Box>
              </ScrollReveal>

              {section.items.map((faq, fi) => {
                const id = `${si}-${fi}`;
                return (
                  <ScrollReveal key={fi} direction="up" delay={fi * 0.07}>
                    <Accordion
                      expanded={expanded === id}
                      onChange={handleChange(id)}
                      disableGutters
                      elevation={0}
                      sx={{
                        background: 'transparent',
                        borderBottom: '1px solid rgba(255,255,255,0.06)',
                        '&::before': { display: 'none' },
                        '&.Mui-expanded': { mb: 0 },
                      }}
                    >
                      <AccordionSummary
                        expandIcon={
                          expanded === id
                            ? <RemoveIcon sx={{ color: '#E50914', fontSize: '1rem' }} />
                            : <AddIcon sx={{ color: '#888', fontSize: '1rem' }} />
                        }
                        sx={{
                          py: 2.5,
                          px: 0,
                          '& .MuiAccordionSummary-content': { mr: 2 },
                        }}
                      >
                        <Typography sx={{ fontWeight: 600, fontSize: '1rem', color: expanded === id ? '#fff' : '#ccc', transition: 'color 0.2s', letterSpacing: '0.02em' }}>
                          {faq.q}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails sx={{ px: 0, pb: 3 }}>
                        <Typography sx={{ color: '#666', lineHeight: 1.85, fontSize: '0.92rem' }}>
                          {faq.a}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </ScrollReveal>
                );
              })}
            </Box>
          ))}

          {/* Still have questions */}
          <ScrollReveal direction="up" delay={0.1}>
            <Box
              sx={{
                mt: 8,
                p: 5,
                border: '1px solid rgba(229,9,20,0.2)',
                background: 'rgba(229,9,20,0.03)',
                textAlign: 'center',
              }}
            >
              <Typography sx={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', mb: 1.5 }}>
                Still Have Questions?
              </Typography>
              <Typography sx={{ color: '#666', mb: 3, lineHeight: 1.75 }}>
                We're happy to help. Drop us a message and our team will get back to you within 24 hours.
              </Typography>
              <Typography
                component="a"
                href="mailto:tedxvetias@college.edu"
                sx={{ color: '#E50914', fontFamily: "'DM Mono', monospace", fontSize: '0.85rem', letterSpacing: '0.1em', textDecoration: 'none', borderBottom: '1px solid #E50914', pb: 0.5 }}
              >
                tedxvetias@college.edu
              </Typography>
            </Box>
          </ScrollReveal>
        </Container>
      </Box>
    </Box>
  );
};

export default FAQ;
