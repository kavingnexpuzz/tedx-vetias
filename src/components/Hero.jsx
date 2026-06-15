import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button, Container } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import LogoLoop from "./LogoLoop";

const seatLoopItems = [{ title: "Seats" }];

const Hero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: `url('/VETBackgrount.jpg') center/cover no-repeat`,
        backgroundAttachment: "fixed",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "68%",
          left: "15%",
          transform: "translateX(-50%)",
          zIndex: 10,
          maxWidth: 360,
          display: "none",
          width: "calc(100% - 32px)",
          background: "rgba(15, 15, 15, 0.8)",
          backdropFilter: "blur(12px)",
          py: 2,
          px: 3,
          borderRadius: "9999px",
          border: "1px solid rgba(229, 9, 20, 0.45)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5), 0 0 15px rgba(229, 9, 20, 0.15)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1.5,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              background: "rgba(229, 9, 20, 0.12)",
              border: "1px solid rgba(229, 9, 20, 0.3)",
              borderRadius: "9999px",
              px: 1.5,
              py: 0.5,
            }}
          >
            <Box
              sx={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "#E50914",
                boxShadow: "0 0 8px #E50914",
                animation: "dotPulse 1.5s infinite ease-in-out",
                "@keyframes dotPulse": {
                  "0%": { transform: "scale(0.8)", opacity: 0.5 },
                  "50%": { transform: "scale(1.3)", opacity: 1 },
                  "100%": { transform: "scale(0.8)", opacity: 0.5 }
                }
              }}
            />
            <EventSeatIcon sx={{ color: "#E50914", fontSize: "1.1rem" }} />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography
              sx={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "1.2rem",
                color: "#E50914",
                letterSpacing: "0.08em",
                lineHeight: 1,
              }}
            >
              HURRY UP
            </Typography>
            <Typography
              sx={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.9rem",
                fontWeight: 600,
                color: "#FFFFFF",
                letterSpacing: "0.02em",
                lineHeight: 1,
                textTransform: "uppercase",
              }}
            >
              Limited Seats Available
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          top: "34%",
          zIndex: 10,
          px: 2,
          pointerEvents: "none",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{ pointerEvents: "auto", top: "340px", position: "relative" }}
        >
          <LogoLoop
            logos={seatLoopItems}
            speed={90}
            direction="left"
            logoHeight={6}
            gap={0}
            mt={900}
            hoverSpeed={0}
            fadeOut
            fadeOutColor="rgba(0,0,0,0)"
            ariaLabel="Remaining seats"
            renderItem={() => (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {/* Elegant Glassmorphic Ticker Pill */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    width: "auto",
                    whiteSpace: "nowrap",
                    minHeight: "46px",
                    px: { xs: 2.5, sm: 3 },
                    py: 1,
                    background: "rgba(10, 10, 10, 0.75)",
                    backdropFilter: "blur(12px)",
                    borderRadius: "9999px",
                    border: "1px solid rgba(229, 9, 20, 0.45)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5), 0 0 15px rgba(229, 9, 20, 0.15)",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    animation: "pulseGlow 3s infinite alternate",
                    "@keyframes pulseGlow": {
                      "0%": {
                        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5), 0 0 10px rgba(229, 9, 20, 0.15)",
                        borderColor: "rgba(229, 9, 20, 0.4)",
                      },
                      "100%": {
                        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5), 0 0 25px rgba(229, 9, 20, 0.45)",
                        borderColor: "rgba(229, 9, 20, 0.8)",
                      },
                    },
                    "&:hover": {
                      transform: "scale(1.03) translateY(-1px)",
                      borderColor: "#E50914",
                      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.6), 0 0 30px rgba(229, 9, 20, 0.5)",
                    },
                    mr: 4
                  }}
                >
                  {/* Status Indicator Badge */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      background: "rgba(229, 9, 20, 0.12)",
                      border: "1px solid rgba(229, 9, 20, 0.3)",
                      borderRadius: "9999px",
                      px: 1.5,
                      py: 0.5,
                    }}
                  >
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        backgroundColor: "#E50914",
                        boxShadow: "0 0 8px #E50914",
                        animation: "dotPulse 1.5s infinite ease-in-out",
                        "@keyframes dotPulse": {
                          "0%": { transform: "scale(0.8)", opacity: 0.5 },
                          "50%": { transform: "scale(1.3)", opacity: 1 },
                          "100%": { transform: "scale(0.8)", opacity: 0.5 }
                        }
                      }}
                    />
                    <EventSeatIcon sx={{ color: "#E50914", fontSize: "1.05rem" }} />
                  </Box>

                  {/* Ticker Text Content */}
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography
                      sx={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: { xs: "1.1rem", sm: "1.3rem" },
                        color: "#E50914",
                        letterSpacing: "0.08em",
                        lineHeight: 1,
                      }}
                    >
                      HURRY UP
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: { xs: "0.8rem", sm: "0.9rem" },
                        fontWeight: 700,
                        color: "#FFFFFF",
                        letterSpacing: "0.03em",
                        lineHeight: 1,
                        textTransform: "uppercase",
                      }}
                    >
                      Limited Seat Available
                    </Typography>
                  </Box>
                </Box>

                {/* Symmetric Separator Dot between pills */}
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "rgba(229, 9, 20, 0.6)",
                    boxShadow: "0 0 8px rgba(229, 9, 20, 0.8)",
                    mr: 4
                  }}
                />
              </Box>
            )}
          />
        </Container>
      </Box>

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          "&::before": {
            content: '""',
            position: "absolute",
            width: "100%",
            height: "100%",
            background: `
              radial-gradient(2px 2px at 20% 30%, rgba(229, 9, 20, 0.8), transparent),
              radial-gradient(2px 2px at 60% 70%, rgba(229, 9, 20, 0.6), transparent),
              radial-gradient(1px 1px at 50% 50%, rgba(229, 9, 20, 0.4), transparent),
              radial-gradient(1px 1px at 80% 10%, rgba(229, 9, 20, 0.5), transparent),
              radial-gradient(2px 2px at 90% 60%, rgba(229, 9, 20, 0.7), transparent),
              radial-gradient(1px 1px at 30% 80%, rgba(229, 9, 20, 0.3), transparent),
              radial-gradient(2px 2px at 10% 20%, rgba(229, 9, 20, 0.6), transparent),
              radial-gradient(1px 1px at 70% 40%, rgba(229, 9, 20, 0.4), transparent)
            `,
            backgroundSize: "200% 200%",
            backgroundPosition: "0% 0%",
            animation: "particleFloat 20s ease-in-out infinite",
            "@keyframes particleFloat": {
              "0%": { backgroundPosition: "0% 0%" },
              "50%": { backgroundPosition: "100% 100%" },
              "100%": { backgroundPosition: "0% 0%" },
            },
          },
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          py: 12,
        }}
      >
        <Box sx={{ maxWidth: 900, mx: "auto" }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1.5,
              mb: 4,
              animation: "fadeInUp 0.8s ease both",
              "@keyframes fadeInUp": {
                from: { opacity: 0, transform: "translateY(24px)" },
                to: { opacity: 1, transform: "translateY(0)" },
              },
            }}
          >
            <Box
              sx={{ width: 32, height: 2, background: "#E50914", mx: "auto" }}
            />
            <Typography
              sx={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.7rem",
                letterSpacing: "0.3em",
                color: "#E50914",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              TEDx VETIAS · 2026
            </Typography>
            <Box
              sx={{ width: 32, height: 2, background: "#E50914", mx: "auto" }}
            />
          </Box>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "3.5rem", sm: "5rem", md: "6.5rem", lg: "8rem" },
              lineHeight: 0.95,
              mb: 3,
              color: "#FFFFFF",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              animation: "fadeInUp 0.9s 0.1s ease both",
              textShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
              "& span": {
                color: "#E50914",
                display: "block",
              },
            }}
          >
            IDEAS
            <br />
            WORTH
            <span>SPREADING</span>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#E8E8E8",
              maxWidth: 600,
              lineHeight: 1.8,
              fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
              mb: 7,
              mx: "auto",
              animation: "fadeInUp 0.9s 0.2s ease both",
              textShadow: "0 2px 10px rgba(0, 0, 0, 0.4)",
            }}
          >
            An independently organized TEDx event at VETIAS College, bringing
            together visionaries, innovators, and changemakers to ignite
            conversations that matter.
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
              flexWrap: "wrap",
              animation: "fadeInUp 0.9s 0.3s ease both",
            }}
          >
            <Button
              component={Link}
              to="/speakers"
              variant="contained"
              color="primary"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                mt:5,
                px: { xs: 3, sm: 4 },
                py: { xs: 1.25, sm: 1.5 },
                fontSize: { xs: "0.75rem", sm: "0.85rem" },
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                background: "#E50914",
                "&:hover": {
                  background: "#B8070F",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 24px rgba(229, 9, 20, 0.4)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Meet the Speakers
            </Button>
            <Button
              component={Link}
              to="/about"
              variant="outlined"
              size="large"
              sx={{
                mt:5,
                px: { xs: 3, sm: 4 },
                py: { xs: 1.25, sm: 1.5 },
                fontSize: { xs: "0.75rem", sm: "0.85rem" },
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                borderColor: "#FFFFFF",
                color: "#FFFFFF",
                border: "2px solid #FFFFFF",
                "&:hover": {
                  borderColor: "#E50914",
                  color: "#E50914",
                  background: "rgba(229, 9, 20, 0.1)",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.3s ease",
              }}
            >
              About TEDx
            </Button>
          </Box>
        </Box>
      </Container>

      <Box
        sx={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
          zIndex: 2,
          animation: "bounceDown 2s ease-in-out infinite",
          "@keyframes bounceDown": {
            "0%, 100%": { transform: "translateX(-50%) translateY(0)" },
            "50%": { transform: "translateX(-50%) translateY(10px)" },
          },
        }}
      >
        <Box
          sx={{
            width: 24,
            height: 32,
            border: "2px solid #E50914",
            borderRadius: "12px",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: 2,
              height: 6,
              background: "#E50914",
              borderRadius: "1px",
              position: "absolute",
              top: 6,
              left: "50%",
              transform: "translateX(-50%)",
              animation: "scrollDot 2s ease-in-out infinite",
              "@keyframes scrollDot": {
                "0%": {
                  opacity: 1,
                  transform: "translateX(-50%) translateY(0)",
                },
                "100%": {
                  opacity: 0,
                  transform: "translateX(-50%) translateY(12px)",
                },
              },
            }}
          />
        </Box>
        <Typography
          sx={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            color: "#FFFFFF",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          Scroll
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
