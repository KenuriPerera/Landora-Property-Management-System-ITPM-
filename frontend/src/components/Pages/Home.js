import React from "react";
import { Container, Typography, Box, Button, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { keyframes } from "@emotion/react";

// Fade-in animation
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Scale animation for hover effects
const scaleUp = keyframes`
  from { transform: scale(1); }
  to { transform: scale(1.05); }
`;

const Home = () => {
  const features = [
    {
      title: "Effortless Property Management",
      description:
        "Streamline the management of all your properties with our intuitive and user-friendly tools, designed to save you time and effort.",
    },
    {
      title: "Discover Verified Properties",
      description:
        "Explore a wide range of verified property listings, complete with detailed descriptions, high-quality images, and precise location data.",
    },
    {
      title: "Secure & Trustworthy Platform",
      description:
        "Rely on our robust security measures to keep your property information safe, ensuring peace of mind for all transactions.",
    },
  ];

  // Hero Section Component
  const HeroSection = () => (
    <Container
      style={{
        maxWidth: "900px",
        background: "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(240,240,240,0.85))",
        borderRadius: "16px",
        padding: "40px 20px",
        marginTop: "80px",
        animation: `${fadeIn} 1.2s ease-out`,
        boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
        backdropFilter: "blur(6px)",
      }}
    >
      <Box style={{ textAlign: "center" }}>
        <Typography
          variant="h2"
          style={{
            fontWeight: "700",
            color: "#1a237e",
            fontSize: "3rem",
            letterSpacing: "-0.5px",
            marginBottom: "16px",
          }}
        >
          Welcome to Landora 🏡
        </Typography>
        <Typography
          variant="h6"
          style={{
            color: "#4a5568",
            fontSize: "1.25rem",
            lineHeight: "1.6",
            maxWidth: "85%",
            margin: "0 auto 24px",
          }}
        >
          Your trusted platform for seamless property management and exploration.
        </Typography>
        <Button
          component={Link}
          to="/properties"
          style={{
            marginTop: "16px",
            padding: "12px 32px",
            fontSize: "1.1rem",
            fontWeight: "600",
            borderRadius: "8px",
            background: "linear-gradient(45deg, #3b82f6, #60a5fa)",
            color: "#ffffff",
            textTransform: "none",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.background = "linear-gradient(45deg, #2563eb, #3b82f6)")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.background = "linear-gradient(45deg, #3b82f6, #60a5fa)")
          }
        >
          View Properties
        </Button>
      </Box>
    </Container>
  );

  // Features Section Component
  const FeaturesSection = () => (
    <Container
      style={{
        maxWidth: "1200px",
        marginTop: "80px",
        marginBottom: "80px",
        padding: "0 16px",
      }}
    >
      <Typography
        variant="h4"
        style={{
          fontWeight: "700",
          color: "#1a237e",
          marginBottom: "40px",
          fontSize: "2.25rem",
          textAlign: "center",
        }}
      >
        Why Choose Landora?
      </Typography>
      <Grid container spacing={3}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper
              style={{
                padding: "24px",
                textAlign: "center",
                borderRadius: "12px",
                background: "linear-gradient(180deg, #ffffff, #f8fafc)",
                boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
                animation: `${fadeIn} ${1.4 + index * 0.2}s ease-out`,
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.15)";
                e.currentTarget.style.animation = `${scaleUp} 0.3s ease forwards`;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.1)";
              }}
            >
              <Typography
                variant="h5"
                style={{
                  fontWeight: "600",
                  color: "#ff932f",
                  fontSize: "1.5rem",
                  marginBottom: "12px",
                }}
              >
                {feature.title}
              </Typography>
              <Typography
                style={{
                  color: "#4a5568",
                  fontSize: "1rem",
                  lineHeight: "1.7",
                }}
              >
                {feature.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );

  // Call to Action Section Component
  const CallToActionSection = () => (
    <Box
      style={{
        padding: "60px 0",
        background: "linear-gradient(135deg, rgba(0,0,0,0.75), rgba(30,58,138,0.75))",
        color: "#ffffff",
        textAlign: "center",
        animation: `${fadeIn} 1.5s ease-out`,
      }}
    >
      <Typography
        variant="h4"
        style={{
          fontWeight: "700",
          fontSize: "2.25rem",
          letterSpacing: "0.5px",
          marginBottom: "24px",
        }}
      >
        Ready to Transform Your Property Experience?
      </Typography>
      <Button
        component={Link}
        to="/properties"
        style={{
          marginTop: "16px",
          padding: "12px 40px",
          fontSize: "1.1rem",
          fontWeight: "600",
          borderRadius: "8px",
          background: "linear-gradient(45deg, #f97316, #fb923c)",
          color: "#ffffff",
          textTransform: "none",
          transition: "all 0.3s ease",
        }}
        onMouseOver={(e) =>
          (e.currentTarget.style.background = "linear-gradient(45deg, #ea580c, #f97316)")
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.background = "linear-gradient(45deg, #f97316, #fb923c)")
        }
      >
        Explore Now
      </Button>
    </Box>
  );

  return (
    <Box
      style={{
        minHeight: "100vh",
        backgroundImage: "url(/Landora.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <HeroSection />
      <FeaturesSection />
      <CallToActionSection />
    </Box>
  );
};

export default Home;