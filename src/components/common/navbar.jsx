import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";

const logo = `${import.meta.env.BASE_URL}logo/logo.webp`;

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Careers", path: "/careers" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleMenuToggle = () => setMobileOpen((prev) => !prev);
  const handleMenuClose = () => setMobileOpen(false);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: scrolled ? "#071b3f" : "rgba(7, 27, 63, 0.95)",
          backdropFilter: scrolled ? "none" : "blur(10px)",
          transition: "0.3s ease",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          zIndex: 1300,
          px: { xs: "16px", sm: "5%" },
          py: {
            xs: scrolled ? 0.5 : 0.8,
            sm: scrolled ? 0.8 : 1,
            md: scrolled ? 1.2 : 1.5,
          },
        }}
      >
        <Toolbar
          sx={{
            maxWidth: "1440px",
            width: "100%",
            mx: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: "0 !important",
          }}
        >
          <Box
            component={NavLink}
            to="/"
            onClick={handleNavClick}
            sx={{ display: "flex", alignItems: "center" }}
            aria-label="SP Engineers India Home"
          >
            <Box
              component="img"
              src={logo}
              alt="SP Engineers India - SPM Machine Manufacturer Logo"
              loading="eager"
              sx={{
                height: {
                  xs: scrolled ? 32 : 36,
                  sm: scrolled ? 40 : 45,
                  md: scrolled ? 45 : 55,
                },
                transition: "0.3s ease",
              }}
            />
          </Box>

          {/* Desktop Menu */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: { md: 2.5, lg: 4 },
              alignItems: "center",
            }}
          >
            {navItems.map((item, index) => (
              <Button
                key={index}
                component={NavLink}
                to={item.path}
                onClick={handleNavClick}
                sx={{
                  color: "white",
                  fontWeight: 600,
                  fontSize: { md: "13px", lg: "15px", xl: "16px" },
                  textTransform: "none",
                  position: "relative",
                  minWidth: "auto",
                  px: 0.5,
                  "&.active": { color: "#FFC400" },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: "0%",
                    height: "2px",
                    bottom: 0,
                    left: 0,
                    backgroundColor: "#FFC400",
                    transition: "0.3s ease",
                  },
                  "&:hover::after": { width: "100%" },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            sx={{ 
              display: { xs: "flex", md: "none" }, 
              color: "white",
              backgroundColor: "rgba(255,255,255,0.05)",
              borderRadius: "8px",
              padding: "8px",
              "&:hover": {
                backgroundColor: "rgba(255,196,0,0.15)",
              },
            }}
            onClick={handleMenuToggle}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <CloseIcon
                sx={{
                  fontSize: { xs: "20px", sm: "22px" },
                  transition: "transform 0.3s ease",
                }}
              />
            ) : (
              <MenuIcon
                sx={{
                  fontSize: { xs: "20px", sm: "22px" },
                  transition: "transform 0.3s ease",
                }}
              />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Menu - Top Drawer (Slides from top) */}
      <Drawer
        anchor="top"
        open={mobileOpen}
        onClose={handleMenuClose}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          "& .MuiDrawer-paper": {
            width: "100%",
            backgroundColor: "#071b3f",
            color: "white",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            top: { xs: "64px", sm: "70px", md: "80px" },
            transition: "transform 0.3s ease-in-out",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "auto",
            maxHeight: "calc(100vh - 80px)",
            overflowY: "auto",
            px: { xs: "16px", sm: "5%" },
            py: 3,
          }}
        >
          <List sx={{ width: "100%", maxWidth: "600px", mx: "auto" }}>
            {navItems.map((item, index) => (
              <ListItem key={index} disablePadding sx={{ mb: 1 }}>
                <ListItemButton
                  component={NavLink}
                  to={item.path}
                  onClick={() => {
                    handleNavClick();
                    handleMenuClose();
                  }}
                  sx={{
                    px: 3,
                    py: 1.8,
                    borderRadius: "12px",
                    transition: "all 0.2s ease",
                    "&.active": {
                      backgroundColor: "rgba(255,196,0,0.12)",
                      "& .MuiTypography-root": {
                        color: "#FFC400",
                        fontWeight: 700,
                      },
                    },
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.06)",
                    },
                  }}
                >
                  <ListItemText
                    primary={
                      <Typography
                        sx={{
                          fontWeight: 600,
                          fontSize: { xs: "18px", sm: "20px" },
                          color: "white",
                          transition: "color 0.2s ease",
                        }}
                      >
                        {item.label}
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider sx={{ backgroundColor: "rgba(255,255,255,0.08)", my: 2, maxWidth: "600px", mx: "auto", width: "100%" }} />

          <Box sx={{ textAlign: "center", py: 2 }}>
            <Typography
              sx={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.5)",
              }}
            >
              SP Engineers India
            </Typography>
            <Typography
              sx={{
                fontSize: "11px",
                color: "rgba(255,255,255,0.3)",
                mt: 0.5,
              }}
            >
              Precision · Innovation · Excellence
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;