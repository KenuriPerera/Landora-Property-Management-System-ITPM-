import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <AppBar position="static" sx={{ background: '#131313', boxShadow: 'none' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: '#ff932f', fontWeight: 700 }}>
          LANDORA
        </Typography>
        <Button
          sx={{ color: '#ff932f', fontWeight: 600, mx: 1, '&:hover': { color: '#fff', background: '#ff932f' } }}
          component={Link}
          to="/"
        >
          Home
        </Button>
        <Button
          sx={{ color: '#ff932f', fontWeight: 600, mx: 1, '&:hover': { color: '#fff', background: '#ff932f' } }}
          component={Link}
          to="/properties"
        >
          Property List
        </Button>
        <Button
          sx={{ color: '#ff932f', fontWeight: 600, mx: 1, '&:hover': { color: '#fff', background: '#ff932f' } }}
          component={Link}
          to="/privacy"
        >
          Privacy Policy
        </Button>
        <Button
          sx={{ color: '#ff932f', fontWeight: 600, mx: 1, '&:hover': { color: '#fff', background: '#ff932f' } }}
          component={Link}
          to="/terms"
        >
          Terms of Use
        </Button>
        <Button
          sx={{ color: '#ff932f', fontWeight: 600, mx: 1, '&:hover': { color: '#fff', background: '#ff932f' } }}
          component={Link}
          to="/About"
        >
          About Us
        </Button>
        {location.pathname === "/manager" ? (
          <Button
            sx={{ color: '#cb1616ff', fontWeight: 600, mx: 1, '&:hover': { color: '#fff', background: '#ed1414ff' } }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        ) : (
          <Button
            sx={{ color: '#cb1616ff', fontWeight: 600, mx: 1, '&:hover': { color: '#fff', background: '#ed1414ff' } }}
            component={Link}
            to="/login"
          >
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
