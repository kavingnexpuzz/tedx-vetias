import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import SectionTitle from "../components/SectionTitle";
import ScrollReveal from "../components/ScrollReveal";
import SEO from "../components/SEO";
import DNAAnimation from "../components/DNAAnimation";

const About = () => {
  return (
    <Box sx={{ position: "relative", minHeight: "100vh", background: "#0a0a0a", overflow: "hidden" }}>
      <Box
        component="video"
        autoPlay
        loop
        muted
        playsInline
        src="/backgroundvideo.mp4"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          opacity: 0.15,
          pointerEvents: "none",
        }}
      />
      <SEO
        title="About Us"
        description="Learn more about TEDxVETIAS, our history, and the passionate team dedicated to bringing ideas worth spreading to our community."
      />
      {/* Hero */}
      <Box
        sx={{
          pt: 20,
          pb: 14,
          position: "relative",
          background: "transparent",
          zIndex: 1,
        }}
      >
        <Typography
          sx={{
            position: "absolute",
            top: "10%",
            right: "-5%",
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "20vw",
            color: "rgba(229,9,20,0.03)",
            lineHeight: 1,
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          ABOUT
        </Typography>
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Typography
            variant="overline"
            sx={{
              color: "#E50914",
              fontFamily: "'DM Mono', monospace",
              letterSpacing: "0.25em",
              fontSize: "0.72rem",
            }}
          >
            Our Story
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "3.5rem", md: "7rem" },
              lineHeight: 0.88,
              mt: 1,
              mb: 4,
            }}
          >
            About
            <br />
            <Box component="span" sx={{ color: "#E50914" }}>
              TED<Box component="span" sx={{ fontFamily: "'DM Sans', sans-serif", textTransform: "lowercase", fontSize: "0.72em", verticalAlign: "0.06em" }}>x</Box>
              VETIAS
            </Box>
          </Typography>
          <Typography
            sx={{
              color: "#777",
              maxWidth: 640,
              lineHeight: 1.9,
              fontSize: "1.05rem",
            }}
          >
            TEDx programs are locally organized events that bring people
            together to share a TED-like experience. At TEDxVETIAS, we create a
            space for big ideas — a platform for thinkers, doers, and dreamers
            from all walks of life to spark meaningful conversations.
          </Typography>
        </Container>
      </Box>

      {/* What is TED */}
      <Box sx={{ py: 14, position: "relative", zIndex: 1 }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <SectionTitle
                overline="The Origin"
                title={
                  <>
                    What is <span>TED?</span>
                  </>
                }
                align="left"
              />
              <Typography sx={{ color: "#777", lineHeight: 1.85, mb: 3 }}>
                TED is a nonprofit organization devoted to spreading ideas,
                usually in the form of short, powerful talks. TED began in 1984
                as a conference where Technology, Entertainment and Design
                converged — today it covers almost all topics in more than 100
                languages.
              </Typography>
              <Typography sx={{ color: "#777", lineHeight: 1.85 }}>
                Meanwhile, independently run TEDx events help share ideas in
                communities around the world.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  border: "1px solid rgba(229,9,20,0.2)",
                  p: { xs: 4, md: 6 },
                  background: "rgba(17, 17, 17, 0.4)",
                  position: "relative",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: 4,
                    height: "100%",
                    background: "#E50914",
                  },
                }}
              >
                <Typography
                  variant="h3"
                  sx={{ color: "#ffffff", mb: 2, fontSize: "2rem" }}
                >
                  "Ideas Worth Spreading"
                </Typography>
                <Typography
                  sx={{ color: "#666", lineHeight: 1.75, fontStyle: "italic" }}
                >
                  This isn't just a tagline — it's a movement that has catalyzed
                  millions of minds, sparked global conversations, and changed
                  how we share knowledge.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  height: { xs: "400px", md: "500px" },
                  width: "100%",
                }}
              >
                <DNAAnimation />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* About TEDxVETIAS */}
      <Box sx={{ py: 14, background: "rgba(8, 8, 8, 0.45)", position: "relative", zIndex: 1 }}>
        <Container maxWidth="lg">
          <SectionTitle
            overline="Our Chapter"
            title={
              <>
                About TED<Box component="span" sx={{ fontFamily: "'DM Sans', sans-serif", textTransform: "lowercase", fontSize: "0.72em", verticalAlign: "0.06em", color: "#E50914" }}>x</Box>VETIAS
              </>
            }
            subtitle="We are students, faculty, and dreamers united by one belief: that ideas have the power to change the world."
          />
          <Grid container spacing={4}>
            {[
              {
                icon: "🎯",
                title: "Our Mission",
                desc: "To create a platform that amplifies diverse voices and ideas from our campus and community, fostering critical thinking and cross-disciplinary dialogue.",
              },
              {
                icon: "👁",
                title: "Our Vision",
                desc: "A world where knowledge flows freely, where every idea — regardless of origin — has the chance to find the audience it deserves.",
              },
              {
                icon: "💡",
                title: "Our Values",
                desc: "Curiosity, Inclusivity, Authenticity, and Impact. We believe the best ideas come from the most unexpected places.",
              },
            ].map((item, i) => (
              <Grid item xs={12} md={4} key={i}>
                <ScrollReveal direction="up" delay={i * 0.12}>
                  <Box
                    sx={{
                      p: 4,
                      height: "100%",
                      border: "1px solid rgba(255,255,255,0.05)",
                      background: "rgba(15, 15, 15, 0.8)",
                      backdropFilter: "blur(8px)",
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: 0,
                        height: 2,
                        background: "#E50914",
                        transition: "width 0.4s ease",
                      },
                      "&:hover::after": { width: "100%" },
                    }}
                  >
                    <Typography sx={{ fontSize: "2.5rem", mb: 2 }}>
                      {item.icon}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: "1.5rem",
                        letterSpacing: "0.04em",
                        mb: 2,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#666",
                        lineHeight: 1.8,
                        fontSize: "0.9rem",
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </Box>
                </ScrollReveal>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
