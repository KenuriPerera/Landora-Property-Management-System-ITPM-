import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";

import { keyframes } from "@mui/system";

// Fade-in animation
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const About = () => {
  const features = [
    "Effortlessly manage multiple properties with intuitive tools",
    "Explore verified listings with comprehensive details and images",
    "Monitor property availability and status in real-time",
    "Secure platform with encrypted transactions and data protection",
  ];

  return (
    <Box sx={{
      minHeight: "90vh",
      backgroundImage: 'url(/Landora.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundColor: '#f9fafb',
    }}>
      <Container maxWidth="md" sx={{ py: 8 }}>
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 6, animation: `${fadeIn} 1s ease-in` }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "#ff6b3c",
              mb: 1,
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            About Landora
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "#ec2112ff", fontWeight: 500, lineHeight: 1.9, fontSize: { xs: "1rem", md: "1.2rem" } }}
          >
            Your trusted platform for property management and exploration.
          </Typography>
        </Box>

        {/* Our Story */}
        <Box
          sx={{
            mb: 6,
            animation: `${fadeIn} 1.2s ease-in`,
            p: 4,
            borderRadius: 3,
            background: "linear-gradient(90deg, #fff1e6, #ffe8d6)",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 600, color: "#ff6b3c", mb: 2 }}>
            Our Story
          </Typography>
          <Typography variant="body1" sx={{ color: "#4a5568", lineHeight: 1.8 }}>
            Landora was founded with a passion to revolutionize property management. Our platform leverages
            cutting-edge technology to simplify the complexities of managing, buying, and exploring properties.
            Whether you're a property owner, manager, or buyer, Landora offers intuitive tools to make your journey
            seamless and efficient.
          </Typography>
        </Box>

        {/* Mission & Vision */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {[
            {
              title: "Our Mission",
              text: "To empower property owners and buyers with a seamless, reliable, and innovative platform that streamlines property management and decision-making processes.",
              color: "#ff9f43",
            },
            {
              title: "Our Vision",
              text: "To redefine property management by connecting users with their ideal properties through a secure, user-friendly, and innovative platform trusted worldwide.",
              color: "#6a11cb",
            },
          ].map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper
                sx={{
                  p: 4,
                  borderRadius: 3,
                  backgroundColor: "#ffffff",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  animation: `${fadeIn} ${1.4 + index * 0.2}s ease-in`,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease",
                  borderTop: `4px solid ${item.color}`,
                  "&:hover": { transform: "translateY(-10px)", boxShadow: "0 8px 20px rgba(0,0,0,0.15)" },
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1.5, color: item.color }}>
                  {item.title}
                </Typography>
                <Typography variant="body1" sx={{ color: "#4a5568", lineHeight: 1.6 }}>
                  {item.text}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Key Features */}
        <Box sx={{ animation: `${fadeIn} 1.8s ease-in`, mb: 6 }}>
          <Typography variant="h5" sx={{ fontWeight: 600, color: "#ff6b3c", mb: 3 }}>
            Key Features
          </Typography>
          <Grid container spacing={3}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Paper
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    backgroundColor: "#fff8f2",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
                      background: "#ffe5d0",
                    },
                  }}
                >
                  <Typography sx={{ color: "#4a5568", lineHeight: 1.6 }}>{feature}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

    </Box>
  );
};

export default About;
