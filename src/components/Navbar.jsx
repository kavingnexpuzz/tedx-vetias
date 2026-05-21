import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar, Toolbar, Box, IconButton, Drawer, List,
  ListItem, ListItemText, Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import TEDxLogo from '../assets/logo';

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Speakers', path: '/speakers' },
  { label: 'Team', path: '/team' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Sponsors', path: '/sponsors' }
  
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setDrawerOpen(false);
  }, [location]);

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: scrolled
            ? 'rgba(10,10,10,0.96)'
            : 'linear-gradient(to bottom, rgba(10,10,10,0.85), transparent)',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(229,9,20,0.2)' : 'none',
          transition: 'all 0.4s ease',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', py: 1, px: { xs: 2, md: 4 } }}>
          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <TEDxLogo size={32} />
          </Link>

          {/* Desktop nav */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5, alignItems: 'center' }}>
            {NAV_LINKS.map((link) => (
              <Button
                key={link.path}
                component={Link}
                to={link.path}
                disableRipple
                sx={{
                  color: isActive(link.path) ? '#E50914' : '#ccc',
                  fontSize: '0.72rem',
                  letterSpacing: '0.14em',
                  fontWeight: isActive(link.path) ? 700 : 500,
                  px: 1.5,
                  py: 1,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 4,
                    left: '50%',
                    transform: isActive(link.path) ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
                    width: '80%',
                    height: 1.5,
                    background: '#E50914',
                    transition: 'transform 0.3s ease',
                  },
                  '&:hover': { color: '#fff', background: 'transparent' },
                  '&:hover::after': { transform: 'translateX(-50%) scaleX(1)' },
                }}
              >
                {link.label}
              </Button>
            ))}

            <Button
              component={Link}
              to="https://kaving.vercel.app/"
              target="__blank"
              variant="contained"
              color="primary"
              sx={{ ml: 2, fontSize: '0.72rem', px: 2.5, py: 0.75 }}
            >
              Register
            </Button>
          </Box>

          {/* Mobile hamburger */}
          <IconButton
            sx={{ display: { xs: 'flex', md: 'none' }, color: '#fff' }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            background: '#0d0d0d',
            borderLeft: '1px solid rgba(229,9,20,0.2)',
          },
        }}
      >
        <Box sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <TEDxLogo size={24} />
            <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: '#fff' }}>
              <CloseIcon />
            </IconButton>
          </Box>

          <List disablePadding>
            {NAV_LINKS.map((link, i) => (
              <ListItem
                key={link.path}
                disablePadding
                component={Link}
                to={link.path}
                sx={{
                  mb: 0.5,
                  borderLeft: isActive(link.path) ? '3px solid #E50914' : '3px solid transparent',
                  pl: 1.5,
                  transition: 'border-color 0.2s',
                  textDecoration: 'none',
                  '&:hover': { borderLeftColor: '#E50914' },
                }}
              >
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{
                    sx: {
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: '1.6rem',
                      letterSpacing: '0.06em',
                      color: isActive(link.path) ? '#E50914' : '#ccc',
                      lineHeight: 1.3,
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>

          <Button
            component={Link}
            to="/admin"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 4 }}
          >
            Admin Panel
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
