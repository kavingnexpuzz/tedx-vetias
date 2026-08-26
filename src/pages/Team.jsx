import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  CircularProgress,
} from "@mui/material";
import TeamCard from "../components/TeamCard";

import SEO from "../components/SEO";
import { getTeam } from "../services/api";

const SAMPLE_TEAM = [
  {
    _id: "10",
    name: "Dr. Karthika D",
    position: "Organizer",
    department: "",
    photo: "/images/kartika.png",
  },
  {
    _id: "9",
    name: "Dr. Radhika C",
    position: "Co-Organizer",
    department: "",
    photo: "/images/Rathika.png",
  },
  {
    _id: "1",
    name: "Mr. Panjatcharam V G",
    position: "Faculty Advisor",
    department: "",
    photo: "/images/panj.jpeg",
  },
  {
    _id: "2",
    name: "Mr. Rajkumaran T",
    position: "Advisory Member",
    department: "",
    photo: "/images/Rajkumar.png",
  },
  {
    _id: "30",
    name: "Mr. Vignesh Chandrasekhar",
    position: "Experience Curator",
    department: "",
    photo: "/images/vignesh.jpeg",
  },

  {
    _id: "3",
    name: "Paripoorna",
    position: "Event Coordinator",
    department: "Team Management",
    photo: "/images/paripoorana.jpeg",
  },
  {
    _id: "4",
    name: "Bhuvaneshwari",
    position: "Curate the Agenda",
    department: "Team Management",
    photo: "/images/Bhuvaneshwari.jpeg",
  },
  {
    _id: "5",
    name: "Anuprabha",
    position: "Event Coordinator",
    department: "Venue/Space",
    photo: "/images/Anuprabha.jpeg",
  },
  {
    _id: "6",
    name: "Piraneshvaran",
    position: "Event Promotions",
    department: "Branding/Promotions",
    photo: "/images/pirneshwaren.jpeg",
  },
  {
    _id: "7",
    name: "Rithanya",
    position: "Financial Reconciliation",
    department: "PostEvent/Renewal",
    photo: "/images/rithanya.jpeg",
  },
  {
    _id: "8",
    name: "Logeshwaren",
    position: "Social Media",
    department: "Branding/Promotions",
    photo: "/images/logesh.png",
  },
  {
    _id: "11",
    name: "Rithanya",
    position: "Volunteer",
    department: "Venue/Space",
    photo: "/images/prenetha.jpeg",
  },
  {
    _id: "12",
    name: "Balamurugan",
    position: "Volunteer",
    department: "Branding/Promotions",
    photo: "/images/balamurugan.jpeg",
  },
  {
    _id: "13",
    name: "Praneetha",
    position: "Volunteer",
    department: "Team Management",
    photo: "/images/rithanyaa.jpeg",
  },
  {
    _id: "14",
    name: "Madhumitha",
    position: "Volunteer",
    department: "PostEvent/Renewal",
    photo: "/images/mathu.jpg",
  },
  {
    _id: "15",
    name: "Dharshini MS",
    position: "Volunteer",
    department: "Venue/Space",
    photo: "/images/dharsini.jpeg",
  },
  {
    _id: "16",
    name: "Vakshana",
    position: "Volunteer",
    department: "Branding/Promotions",
    photo: "/images/vakshana.jpeg",
  },
  {
    _id: "17",
    name: "Lakshmi Prabha",
    position: "Volunteer",
    department: "PostEvent/Renewal",
    photo: "/images/laksmi.jpeg",
  },
  {
    _id: "18",
    name: "Abinaya",
    position: "Volunteer",
    department: "Team Management",
    photo: "/images/abi.jpeg",
  },
  {
    _id: "19",
    name: "Mythreye",
    position: "Volunteer",
    department: "Venue/Space",
    photo: "/images/mythre.jpeg",
  },
  {
    _id: "20",
    name: "Mouriya",
    position: "Volunteer",
    department: "Branding/Promotions",
    photo: "/images/mouriya.jpeg",
  },
  {
    _id: "21",
    name: "Ezhilarasi",
    position: "Volunteer",
    department: "PostEvent/Renewal",
    photo: "/images/ezli.jpeg",
  },
  {
    _id: "22",
    name: "Dharshini L",
    position: "Volunteer",
    department: "Venue/Space",
    photo: "/images/dharsinil.jpeg",
  },
  {
    _id: "23",
    name: "Kaviksha",
    position: "Volunteer",
    department: "Branding/Promotions",
    photo: "/images/kavi.jpeg",
  },
  {
    _id: "24",
    name: "Divya",
    position: "Volunteer",
    department: "PostEvent/Renewal",
    photo: "/images/diviya.jpeg",
  },
  {
    _id: "25",
    name: "Thanushree",
    position: "Volunteer",
    department: "Team Management",
    photo: "/images/thanu.png",
  },
  {
    _id: "26",
    name: "Janani VM",
    position: "Operations Head",
    department: "Venue/Space",
    photo: "/images/janani.jpeg",
  },
  {
    _id: "27",
    name: "Lathika A",
    position: "Operations Coordinator",
    department: "Team Management",
    photo: "/images/lathika.jpeg",
  },
  {
    _id: "28",
    name: "Kavin G",
    position: "Operations Manager",
    department: "Team Management",
    photo: "/images/kaving.png",
  },
  {
    _id: "29",
    name: "Mithunathith R",
    position: "Operations Support",
    department: "PostEvent/Renewal",
    photo: "/images/mithun.png",
  },
];

const DEPARTMENTS = [
  "All",
  "Team Management",
  "Venue/Space",
  "Branding/Promotions",
  "PostEvent/Renewal",
];

const Team = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    getTeam()
      .then((res) =>
        setTeam(
          Array.isArray(res.data) && res.data.length ? res.data : SAMPLE_TEAM,
        ),
      )
      .catch(() => setTeam(SAMPLE_TEAM))
      .finally(() => setLoading(false));
  }, []);

  const filtered =
    filter === "All" ? team : team.filter((m) => m.department === filter);

  // Grouping logic for Leadership vs Core Team
  const leadership = filtered.filter(
    (m) =>
      m.position.toLowerCase().includes("advisor") ||
      m.position.toLowerCase().includes("advisory") ||
      m.position.toLowerCase().includes("organizer") ||
      m.position.toLowerCase().includes("co-organizer") ||
      m.position.toLowerCase().includes("experience") ||
      m.position.toLowerCase().includes("Innovation") ||
      m.position.toLowerCase().includes("faculty") 
      
      
  );

  const volunteers = filtered.filter((m) =>
    m.position.toLowerCase().includes("volunteer"),
  );

  const operationsTeam = filtered.filter((m) =>
    m.position.toLowerCase().includes("operations"),
  );

  const coreTeam = filtered.filter(
    (m) =>
      !leadership.some((l) => l._id === m._id) &&
      !volunteers.some((v) => v._id === m._id) &&
      !operationsTeam.some((o) => o._id === m._id),
  );

  return (
    <Box sx={{ background: "#0a0a0a", minHeight: "100vh", pb: 10 }}>
      <SEO
        title="Our Team"
        description="Meet the passionate student team behind TEDx VETIAS turning a bold idea into an unforgettable experience."
      />
      {/* Page Header */}
      <Box
        sx={{
          pt: 18,
          pb: 6,
          textAlign: "center",
          background: "#0a0a0a",
          position: "relative",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "3.6rem" },
              fontWeight: 800,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              color: "#ffffff",
              fontFamily: "'DM Sans', sans-serif",
              mb: 1.5,
            }}
          >
            Meet Our Team
          </Typography>
          <Box
            sx={{
              width: 60,
              height: 4,
              background: "#E50914",
              mx: "auto",
              mb: 2,
            }}
          />
        </Container>
      </Box>

      {/* Filter */}
      <Box
        sx={{
          py: 3,
          background: "#0a0a0a",
          borderBottom: "1px solid rgba(255,255,255,0.03)",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              gap: 1.5,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {DEPARTMENTS.map((dept) => (
              <Box
                key={dept}
                onClick={() => setFilter(dept)}
                sx={{
                  px: 2.5,
                  py: 0.8,
                  border: "1px solid",
                  borderColor:
                    filter === dept ? "#E50914" : "rgba(255,255,255,0.08)",
                  color: filter === dept ? "#E50914" : "#888",
                  background:
                    filter === dept ? "rgba(229,9,20,0.06)" : "transparent",
                  cursor: "pointer",
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.72rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  borderRadius: "4px",
                  transition: "all 0.25s ease",
                  "&:hover": { borderColor: "#E50914", color: "#E50914" },
                }}
              >
                {dept}
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Grid Content */}
      <Box sx={{ py: 10 }}>
        <Container maxWidth="lg">
          {loading ? (
            <Box sx={{ display: "flex", justifyContent: "center", py: 12 }}>
              <CircularProgress color="primary" />
            </Box>
          ) : (
            <Box>
              {/* Leadership Section */}
              {leadership.length > 0 && (
                <Box sx={{ mb: 10 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 5,
                      borderLeft: "4.5px solid #E50914",
                      pl: 2,
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 700,
                        fontSize: { xs: "1.6rem", md: "2rem" },
                        color: "#ffffff",
                        fontFamily: "'DM Sans', sans-serif",
                        lineHeight: 1.2,
                      }}
                    >
                      Leadership
                    </Typography>
                  </Box>
                  <Grid container spacing={4}>
                    {leadership.map((member, i) => (
                      <Grid item xs={12} sm={6} md={4} lg={3} key={member._id}>
                        <TeamCard member={member} delay={(i % 4) * 0.08} />
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              )}

              {/* Core Team Section */}
              {coreTeam.length > 0 && (
                <Box sx={{ mb: 10 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 5,
                      borderLeft: "4.5px solid #E50914",
                      pl: 2,
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 700,
                        fontSize: { xs: "1.6rem", md: "2rem" },
                        color: "#ffffff",
                        fontFamily: "'DM Sans', sans-serif",
                        lineHeight: 1.2,
                      }}
                    >
                      Core Team
                    </Typography>
                  </Box>
                  <Grid container spacing={4}>
                    {coreTeam.map((member, i) => (
                      <Grid item xs={12} sm={6} md={4} lg={3} key={member._id}>
                        <TeamCard member={member} delay={(i % 4) * 0.08} />
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              )}

              {/* Operations Section */}
              {operationsTeam.length > 0 && (
                <Box sx={{ mb: 10 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 5,
                      borderLeft: "4.5px solid #E50914",
                      pl: 2,
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 700,
                        fontSize: { xs: "1.6rem", md: "2rem" },
                        color: "#ffffff",
                        fontFamily: "'DM Sans', sans-serif",
                        lineHeight: 1.2,
                      }}
                    >
                      Operations Team
                    </Typography>
                  </Box>
                  <Grid container spacing={4}>
                    {operationsTeam.map((member, i) => (
                      <Grid item xs={12} sm={6} md={4} lg={3} key={member._id}>
                        <TeamCard member={member} delay={(i % 4) * 0.08} />
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              )}

              {/* Volunteers Section */}
              {volunteers.length > 0 && (
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 5,
                      borderLeft: "4.5px solid #E50914",
                      pl: 2,
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 700,
                        fontSize: { xs: "1.6rem", md: "2rem" },
                        color: "#ffffff",
                        fontFamily: "'DM Sans', sans-serif",
                        lineHeight: 1.2,
                      }}
                    >
                      Volunteers
                    </Typography>
                  </Box>
                  <Grid container spacing={4}>
                    {volunteers.map((member, i) => (
                      <Grid item xs={12} sm={6} md={4} lg={3} key={member._id}>
                        <TeamCard member={member} delay={(i % 4) * 0.08} />
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              )}
            </Box>
          )}
        </Container>
      </Box>

      {/* Join the team */}
      <Box
        sx={{
          background: "#0a0a0a",
          borderTop: "1px solid rgba(229,9,20,0.08)",
          py: 12,
          textAlign: "center",
        }}
      >
        <Container maxWidth="sm">
          <Typography
            variant="h3"
            sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" }, mb: 2 }}
          >
            Join the{" "}
            <Box component="span" sx={{ color: "#E50914" }}>
              Crew
            </Box>
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Team;
