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
          backgroundColor: "#071b3f",
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
            maxWidth: "1350px",
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
                  xs: scrolled ? 36 : 40,
                  sm: scrolled ? 40 : 45,
                  md: scrolled ? 45 : 55,
                },
                transition: "0.3s ease",
              }}
            />
          </Box>

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

          <IconButton
            sx={{ display: { xs: "flex", md: "none" }, color: "white" }}
            onClick={handleMenuToggle}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <CloseIcon
                sx={{
                  fontSize: { xs: "22px", sm: "26px" },
                  transition: "transform 0.3s ease",
                  transform: "rotate(0deg)",
                }}
              />
            ) : (
              <MenuIcon
                sx={{
                  fontSize: { xs: "22px", sm: "26px" },
                  transition: "transform 0.3s ease",
                }}
              />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleMenuClose}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          "& .MuiDrawer-paper": {
            width: { xs: 220, sm: 260 },
            backgroundColor: "#071b3f",
            color: "white",
            boxShadow: "-4px 0 20px rgba(0,0,0,0.3)",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 3,
            py: 2,
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="SP Engineers India Logo"
            sx={{ height: 36 }}
            loading="eager"
          />
          <IconButton
            onClick={handleMenuClose}
            sx={{ color: "white", p: 0.5 }}
            aria-label="Close menu"
          >
            <CloseIcon sx={{ fontSize: "20px" }} />
          </IconButton>
        </Box>

        <List sx={{ pt: 1 }}>
          {navItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                component={NavLink}
                to={item.path}
                onClick={() => {
                  handleNavClick();
                  handleMenuClose();
                }}
                sx={{
                  px: 3,
                  py: 1.4,
                  transition: "background-color 0.2s ease",
                  "&.active": {
                    backgroundColor: "rgba(255,196,0,0.1)",
                    borderLeft: "3px solid #FFC400",
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
                        fontSize: { xs: "14px", sm: "15px" },
                        color: "white",
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
      </Drawer>
    </>
  );
}

export default Navbar;