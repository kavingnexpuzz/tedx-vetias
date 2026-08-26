import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button, Grid, Container } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PlaceIcon from "@mui/icons-material/Place";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import CountdownTimer from "../components/CountdownTimer";
import SpeakerCard from "../components/SpeakerCard";
import SectionTitle from "../components/SectionTitle";
import ScrollReveal from "../components/ScrollReveal";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import { getSpeakers } from "../services/api";

const SAMPLE_SPEAKERS = [
  {
    _id: "1",
    name: "Nandha Kumar",
    role: "Indian Revenue Service (IRS) Officer & Motivational Speaker",
    description:
      "V. Nandakumar is a prominent Indian Revenue Service (IRS) officer, Income Tax Commissioner, and motivational speaker known for overcoming severe childhood hardships.",
    topic: "Motivational Speaking & Public Service",
    photo: "images/Nanthakumar.png",
  },
  {
    _id: "2",
    name: "​M S Aishwarya",
    role: "Tamil Nadu State Cricketer",
    description:
      "​M S Aishwarya is a Tamil Nadu state cricketer, top-order batter, and India’s 4th fastest bowler.",
    topic: "Cricket & Sports Excellence",
    photo: "images/aiswarya.jpeg",
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
];

// const SAMPLE_SPONSORS = [
//   { name: "MilkyMist", category: "Title Sponsor" },
//   { name: "A2D Channel", category: "Media Partner" },
//   { name: "VETIAS Institutions", category: "Institutional Sponsor" },
//   { name: "Google Developer Groups", category: "Tech Partner" },
//   { name: "Microsoft Spark", category: "Innovation Partner" },
//   { name: "Red Bull India", category: "Beverage Partner" },
//   { name: "Spotify", category: "Audio Partner" },
// ];

const Home = () => {
  const [speakers, setSpeakers] = useState(SAMPLE_SPEAKERS);

  useEffect(() => {
    getSpeakers()
      .then((res) => {
        if (Array.isArray(res.data) && res.data.length) {
          setSpeakers(res.data.slice(0, 3));
        }
      })
      .catch(() => {});
  }, []);

  return (
    <Box>
      <SEO
        title="Home"
        description="TEDxVETIAS 2026 - Beyond Boundaries. Discover inspiring ideas worth spreading from diverse voices at VETIAS College."
        keywords="TEDx, VETIAS, innovation, ideas worth spreading, Beyond Boundaries"
      />
      {/* ── HERO ─────────────────────────────────────────── */}
      <Hero />

      {/* ── COUNTDOWN ────────────────────────────────────── */}
      <Box
        sx={{
          background: "rgba(8,8,8,0.6)",
          backdropFilter: "blur(10px)",
          py: 12,
          borderTop: "1px solid rgba(229,9,20,0.1)",
          borderBottom: "1px solid rgba(229,9,20,0.1)",
        }}
      >
        <Container maxWidth="lg">
          <SectionTitle
            overline="Mark Your Calendar"
            title={
              <>
                Event <span style={{ color: "#E50914" }}>Countdown</span>
              </>
            }
          />
          <CountdownTimer />

          {/* Event details pills */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 3,
              mt: 6,
              flexWrap: "wrap",
            }}
          >
            {[
              {
                icon: <CalendarMonthIcon fontSize="small" />,
                text: "September 25, 2026",
              },
              {
                icon: <AccessTimeIcon fontSize="small" />,
                text: "9:00 AM — 6:00 PM",
              },
              {
                icon: <PlaceIcon fontSize="small" />,
                text: "VETIAS Auditorium, Erode, Tamil Nadu, India",
              },
              {
                icon: <EventSeatIcon fontSize="small" />,
                text: "Limited Seats Available",
              },
            ].map((item, i) => (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  color: "#777",
                  fontSize: "0.88rem",
                  fontFamily: "'DM Mono', monospace",
                  letterSpacing: "0.05em",
                }}
              >
                <Box sx={{ color: "#E50914" }}>{item.icon}</Box>
                {item.text}
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── THEME ────────────────────────────────────────── */}
      <Box sx={{ py: 14, position: "relative", overflow: "hidden" }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={5}>
              <SectionTitle
                overline="Theme 2026"
                title={
                  <>
                    Beyond <span>Boundaries</span>
                  </>
                }
                align="left"
                subtitle="This year, we explore what happens when ideas transcend limits — of discipline, geography, and imagination."
              />
              <Button
                component="a"
                href="https://docs.google.com/forms/d/e/1FAIpQLSfEMlIOThKps2w19BOhnUXfVOqipyk1fLT_2DpQSdokakUlgQ/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                color="primary"
                size="large"
                sx={{ mt: 3, px: 4, py: 1.5, fontSize: "0.9rem" }}
              >
                Book Ticket
              </Button>
            </Grid>
            <Grid item xs={12} md={7}>
              <Grid container spacing={3}>
                {[
                  {
                    num: "01",
                    title: "Technology & Humanity",
                    desc: "How emerging tech shapes our lived experience and social fabric.",
                  },
                  {
                    num: "02",
                    title: "Sustainability & Future",
                    desc: "Reimagining our relationship with the planet for coming generations.",
                  },
                  {
                    num: "03",
                    title: "Art & Science Collision",
                    desc: "When creative expression meets analytical thinking, magic happens.",
                  },
                  {
                    num: "04",
                    title: "Voices from the Margins",
                    desc: "Amplifying perspectives too often left out of mainstream discourse.",
                  },
                ].map((item, i) => (
                  <Grid item xs={12} sm={6} key={i}>
                    <ScrollReveal direction="up" delay={i * 0.1}>
                      <Box
                        sx={{
                          p: 3,
                          border: "1px solid rgba(229,9,20,0.12)",
                          background: "rgba(229,9,20,0.02)",
                          position: "relative",
                          transition: "border-color 0.3s, background 0.3s",
                          "&:hover": {
                            borderColor: "rgba(229,9,20,0.4)",
                            background: "rgba(229,9,20,0.05)",
                          },
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "'DM Mono', monospace",
                            fontSize: "0.7rem",
                            color: "#E50914",
                            mb: 1.5,
                            letterSpacing: "0.1em",
                          }}
                        >
                          {item.num}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "'Bebas Neue', sans-serif",
                            fontSize: "1.3rem",
                            letterSpacing: "0.04em",
                            mb: 1,
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#666",
                            lineHeight: 1.7,
                            fontSize: "0.85rem",
                          }}
                        >
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
      <Box
        sx={{
          py: 14,
          background: "rgba(8,8,8,0.6)",
          backdropFilter: "blur(10px)",
        }}
      >
        <Container maxWidth="lg">
          <SectionTitle
            overline="Featured Voices"
            title={
              <>
                Our <span>Speakers</span>
              </>
            }
            subtitle="Thought leaders and innovators who will challenge, inspire, and transform your perspective."
          />
          <Grid container spacing={3} sx={{ mb: 6 }}>
            {speakers.map((s, i) => (
              <Grid item xs={12} sm={6} md={4} key={s._id}>
                <SpeakerCard speaker={s} delay={i * 0.12} />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: "center" }}>
            <Button
              component={Link}
              to="/speakers"
              variant="outlined"
              color="primary"
              endIcon={<ArrowForwardIcon />}
              sx={{ px: 5, py: 1.5, fontSize: "0.8rem" }}
            >
              View All Speakers
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ── SPONSORS ─────────────────────────────────────── */}
      {/* <Box
        sx={{
          py: 12,
          background: "rgba(10,10,10,0.4)",
          borderTop: "1px solid rgba(229,9,20,0.1)",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <SectionTitle
            overline="Partners & Supporters"
            title={
              <>
                Our <span>Sponsors</span>
              </>
            }
            subtitle="Leading organizations that support and empower our mission of spreading ideas."
          />
        </Container>

        <Box sx={{ mt: 6, position: "relative", width: "100%" }}>
          <LogoLoop
            logos={SAMPLE_SPONSORS}
            speed={60}
            direction="left"
            logoHeight={6}
            gap={0}
            fadeOut
            fadeOutColor="rgba(10,10,10,1)"
            ariaLabel="Our sponsors"
            renderItem={(sponsor) => (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    minWidth: "220px",
                    minHeight: "80px",
                    px: 3.5,
                    py: 2,
                    background: "rgba(18, 18, 18, 0.7)",
                    backdropFilter: "blur(8px)",
                    borderRadius: "16px",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      borderColor: "rgba(229, 9, 20, 0.5)",
                      boxShadow: "0 8px 32px rgba(229, 9, 20, 0.15)",
                      transform: "translateY(-2px)",
                    },
                    mr: 4
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.65rem",
                      color: "#E50914",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      mb: 0.5,
                      fontWeight: 600,
                    }}
                  >
                    {sponsor.category}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {sponsor.name}
                  </Typography>
                </Box>

                
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "rgba(229, 9, 20, 0.5)",
                    boxShadow: "0 0 8px rgba(229, 9, 20, 0.6)",
                    mr: 4
                  }}
                />
              </Box>
            )}
          />
        </Box>
      </Box> */}

      {/* ── STATS ────────────────────────────────────────── */}
      <Box
        sx={{
          py: 12,
          borderTop: "1px solid rgba(255,255,255,0.04)",
          borderBottom: "1px solid rgba(255,255,255,0.04)",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            {[
              { value: "12+", label: "Inspiring Speakers" },
              { value: "500+", label: "Expected Attendees" },
              { value: "8hrs", label: "Of Ideas" },
              { value: "1", label: "Unforgettable Day" },
            ].map((stat, i) => (
              <Grid item xs={6} md={3} key={i} sx={{ textAlign: "center" }}>
                <ScrollReveal direction="up" delay={i * 0.1}>
                  <Typography
                    sx={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: { xs: "3.5rem", md: "5rem" },
                      color: "#E50914",
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#555",
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.7rem",
                      letterSpacing: "0.15em",
                      mt: 1,
                    }}
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
