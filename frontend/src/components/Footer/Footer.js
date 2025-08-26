import React from "react";
import { Box, Grid, Typography, Link, Divider } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#131313",
        color: "#ffffff",
        py: 5,
        px: { xs: 2, sm: 5 },
        mt: "auto",
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      <Grid container spacing={3} justifyContent="center" alignItems="flex-start">
        {/* Logo Section */}
        <Grid item xs={12} sm={3} display="flex" justifyContent="center">
          <img
            src="/Landora.png"
            alt="Logo"
            style={{
              height: "80px",
              objectFit: "contain",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            Quick Links
          </Typography>
          <Grid container spacing={1}>
            {[
              { name: "About", to: "/About" },
            
            ].map((link) => (
              <Grid item xs={6} key={link.name}>
                <Link
                  component={RouterLink}
                  to={link.to}
                  variant="body2"
                  sx={{
                    color: "#ff932f",
                    textDecoration: "none",
                    transition: "color 0.3s",
                    "&:hover": { color: "#ffa84d", textDecoration: "underline" },
                  }}
                >
                  {link.name}
                </Link>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Legal Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            Legal
          </Typography>
          <Grid container spacing={1}>
            {[
              { name: "Privacy Policy", to: "/privacy" },
              { name: "Terms of Use", to: "/terms" },
            ].map((link) => (
              <Grid item xs={6} key={link.name}>
                <Link
                  component={RouterLink}
                  to={link.to}
                  variant="body2"
                  sx={{
                    color: "#ff932f",
                    textDecoration: "none",
                    transition: "color 0.3s",
                    "&:hover": { color: "#ffa84d", textDecoration: "underline" },
                  }}
                >
                  {link.name}
                </Link>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      <Divider sx={{ backgroundColor: "#444", my: 4 }} />

      {/* Social Media Links */}
      <Box textAlign="center" mb={2} sx={{ "& a": { mx: 1, transition: "transform 0.2s" } }}>
        {[
          { name: "Instagram", href: "https://instagram.com" },
          { name: "Facebook", href: "https://facebook.com" },
          { name: "Twitter", href: "https://twitter.com" },
        ].map((social) => (
          <React.Fragment key={social.name}>
            <Link
              href={social.href}
              target="_blank"
              variant="body2"
              sx={{
                color: "#ff932f",
                textDecoration: "none",
                "&:hover": { color: "#ffa84d", transform: "scale(1.2)" },
              }}
            >
              {social.name}
            </Link>
            {social.name !== "Twitter" && "|"}
          </React.Fragment>
        ))}
      </Box>

      {/* Copyright */}
      <Box textAlign="center" mt={2}>
        <Typography variant="body2" sx={{ opacity: 0.7 }}>
          © {new Date().getFullYear()} Landora. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
