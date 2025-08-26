import React from "react";
import { Container, Typography, Box, Paper } from "@mui/material";
import Footer from "../Footer/Footer";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "1. Introduction",
      content: `At Landora, a property management system designed to facilitate property listings, transactions, and management, 
      we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, store, and protect your 
      personal information when you use our platform or services.`,
    },
    {
      title: "2. Information We Collect",
      content: (
        <>
          We collect only the data necessary to provide a seamless property management experience. This may include:
          <ul style={{ marginTop: "10px", paddingLeft: "20px" }}>
            <li>Personal Information: Name, email, phone, billing details.</li>
            <li>Property Data: Addresses, descriptions, images.</li>
            <li>Usage Data: IP addresses, browser type, pages visited.</li>
            <li>Communication Data: Messages or inquiries via platform.</li>
          </ul>
        </>
      ),
    },
    {
      title: "3. How We Use Your Information",
      content: (
        <>
          Your data is used to:
          <ul style={{ marginTop: "10px", paddingLeft: "20px" }}>
            <li>Facilitate property listings, transactions, and management.</li>
            <li>Communicate with you regarding accounts, listings, or support.</li>
            <li>Improve our platform via analytics and feedback.</li>
            <li>Comply with legal obligations and prevent fraud.</li>
          </ul>
          We will never sell, rent, or share personal data for marketing without your consent.
        </>
      ),
    },
    {
      title: "4. Data Security",
      content: `We follow industry-standard security practices including encryption, secure servers, and audits. However, no system is completely secure.`,
    },
    {
      title: "5. Data Sharing",
      content: (
        <>
          We may share your information with:
          <ul style={{ marginTop: "10px", paddingLeft: "20px" }}>
            <li>Service Providers under strict confidentiality agreements.</li>
            <li>Legal Authorities when required by law.</li>
            <li>Business Transfers like mergers or acquisitions.</li>
          </ul>
        </>
      ),
    },
    {
      title: "6. Your Rights",
      content: (
        <>
          You have the right to:
          <ul style={{ marginTop: "10px", paddingLeft: "20px" }}>
            <li>Access, correct, or delete personal information.</li>
            <li>Opt out of non-essential communications.</li>
            <li>Request a copy of your data in a portable format.</li>
          </ul>
          Contact us at <strong>privacy@landora.com</strong>.
        </>
      ),
    },
    {
      title: "7. Cookies and Tracking",
      content: `Landora uses cookies and similar technologies to enhance user experience and analyze platform performance. Managing cookies may affect functionality.`,
    },
    {
      title: "8. Data Retention",
      content: `We retain personal information only as necessary or required by law. Inactive accounts may be deleted according to retention policies.`,
    },
    {
      title: "9. Changes to This Policy",
      content: `We may update this Privacy Policy to reflect changes. Significant updates will be communicated via email or platform notice.`,
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
          Landora Privacy Policy
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
              borderLeft: "6px solid #ff932f", // highlight color
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

export default PrivacyPolicy;
