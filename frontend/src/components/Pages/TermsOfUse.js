import React from "react";
import { Container, Typography, Box, Paper } from "@mui/material";
import Footer from "../Footer/Footer";

const TermsOfUse = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: `By accessing or using Landora, a property management system designed to streamline property listings, transactions, and management, 
      you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, you must not use our platform.`,
    },
    {
      title: "2. User Responsibilities",
      content: `As a user of Landora, you are responsible for ensuring the accuracy and legality of all property data, including listings, descriptions, pricing, and availability. Misrepresentation may result in account suspension or termination.`,
    },
    {
      title: "3. Content Standards",
      content: `Landora reserves the right to remove property listings or content violating community standards, including fraudulent listings, discriminatory content, or non-compliant properties.`,
    },
    {
      title: "4. Account Usage and Security",
      content: `You are responsible for maintaining confidentiality of your account credentials. Notify Landora immediately if you suspect unauthorized access. Landora is not liable for losses from unauthorized use.`,
    },
    {
      title: "5. Intellectual Property",
      content: `All content, features, and functionality on Landora, including logos, designs, and software, are the property of Landora or its licensors and are protected by intellectual property laws. Reproduction or distribution requires prior written consent.`,
    },
    {
      title: "6. Limitation of Liability",
      content: `Landora provides its services on an "as-is" basis and is not liable for any damages arising from use, including errors in listings, disputes, or service interruptions. Users assume all risks.`,
    },
    {
      title: "7. Termination",
      content: `Landora may suspend or terminate your access at any time, with or without notice, for violations of these Terms or to protect the platform or users. Access rights cease immediately upon termination.`,
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#f1f5f9", minHeight: "100vh" }}>
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#1a3c34",
            textAlign: "center",
            mb: 6,
          }}
        >
          Landora Terms of Use
        </Typography>

        {sections.map((section, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              p: 4,
              mb: 4,
              borderRadius: 3,
              background: "linear-gradient(145deg, #ffffff, #f7fafc)",
              borderLeft: "6px solid #ff932f",
              "&:hover": {
                boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, color: "#2d3748", mb: 2 }}
            >
              {section.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#4a5568", lineHeight: 1.8, fontSize: "16px" }}
            >
              {section.content}
            </Typography>
          </Paper>
        ))}

        <Typography
          sx={{
            color: "#718096",
            fontSize: "14px",
            textAlign: "center",
            mt: 4,
          }}
        >
          Last updated: August 26, 2025
        </Typography>
      </Container>

    </Box>
  );
};

export default TermsOfUse;
