// src/pages/Login.js
import React, { useState } from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // for navigation

  // Handle input changes
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle frontend-only login
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!formData.username || !formData.password) {
      setError("Both username and password are required!");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      if (formData.username === "name" && formData.password === "123") {
        navigate("/manager"); // redirect to Property Manager page
      } else {
        setError("❌ Invalid username or password");
      }
    }, 1000); // simulate loading
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #131313 60%, #ff932f 100%)",
        padding: 2,
      }}
    >
      <Card
        sx={{
          width: 400,
          maxWidth: "95%",
          boxShadow: "0 12px 25px rgba(0,0,0,0.3)",
          borderRadius: 3,
          overflow: "hidden",
          transition: "transform 0.3s",
          "&:hover": { transform: "translateY(-5px)" },
        }}
      >
        <CardContent sx={{ padding: 4 }}>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#ff932f" }}
          >
            Login
          </Typography>

          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: 20 }}
          >
            <TextField
              label="Username"
              name="username"
              fullWidth
              value={formData.username}
              onChange={handleChange}
              sx={{ background: "#fff", borderRadius: 1 }}
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              fullWidth
              value={formData.password}
              onChange={handleChange}
              sx={{ background: "#fff", borderRadius: 1 }}
            />

            {error && (
              <Typography color="error" variant="body2" align="center">
                {error}
              </Typography>
            )}

            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={loading}
              sx={{
                background: "#ff932f",
                color: "#131313",
                fontWeight: 700,
                "&:hover": { background: "#131313", color: "#ff932f" },
                paddingY: 1.5,
                borderRadius: 2,
              }}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : "Login"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
