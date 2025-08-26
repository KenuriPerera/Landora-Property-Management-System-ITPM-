import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  CircularProgress,
  Box,
  Chip,
} from "@mui/material";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/property")
      .then((res) => {
        setProperties(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching properties:", err);
        setError("Failed to load properties. Please try again later.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography color="error" variant="h6" sx={{ mt: 5, textAlign: "center" }}>
        {error}
      </Typography>
    );
  }

  if (properties.length === 0) {
    return (
      <Typography variant="h6" sx={{ mt: 5, textAlign: "center" }}>
        No properties found.
      </Typography>
    );
  }

  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: "bold", textAlign: "center", mb: 5 }}
      >
        Available Properties
      </Typography>
      <Grid container spacing={4}>
        {properties.map((property) => (
          <Grid item xs={12} sm={6} md={4} key={property._id}>
            <Card
              sx={{
                maxWidth: 345,
                borderRadius: 3,
                boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 12px 25px rgba(0,0,0,0.3)",
                },
              }}
            >
              {property.images && property.images.length > 0 && (
                <CardMedia
                  component="img"
                  height="180"
                  image={property.images[0]}
                  alt={property.name}
                  sx={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
                />
              )}
              <CardContent
                sx={{
                  background: "linear-gradient(120deg, #f0f0f0, #ffffff)",
                  minHeight: 180,
                }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: "bold", color: "#333" }}
                >
                  {property.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                  <strong>Address:</strong> {property.address}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                  <strong>Size:</strong> {property.size}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  <strong>Price:</strong> {property.price}
                </Typography>
                <Chip
                  label={property.status}
                  color={property.status.toLowerCase() === "available" ? "success" : "default"}
                  sx={{ mt: 1, fontWeight: "bold" }}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PropertyList;
