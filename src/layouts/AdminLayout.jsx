import React, { useState } from 'react';
import { Outlet, Link, useLocation, Navigate } from 'react-router-dom';
import {
  Box, Drawer, List, ListItem, ListItemIcon, ListItemText,
  Toolbar, AppBar, Typography, IconButton, Tooltip, Divider,
} from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import GroupIcon from '@mui/icons-material/Group';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import StarIcon from '@mui/icons-material/Star';
import MailIcon from '@mui/icons-material/Mail';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import { useAuth } from '../context/AuthContext';
import TEDxLogo from '../assets/logo';

const DRAWER_WIDTH = 240;

const MENU = [
  { label: 'Dashboard', path: '/admin', icon: <DashboardIcon fontSize="small" /> },
  { label: 'Speakers', path: '/admin/speakers', icon: <MicIcon fontSize="small" /> },
  { label: 'Team', path: '/admin/team', icon: <GroupIcon fontSize="small" /> },
  { label: 'Gallery', path: '/admin/gallery', icon: <PhotoLibraryIcon fontSize="small" /> },
  { label: 'Sponsors', path: '/admin/sponsors', icon: <StarIcon fontSize="small" /> },
  { label: 'Messages', path: '/admin/contact', icon: <MailIcon fontSize="small" /> },
];

const AdminLayout = () => {
  const { admin, logout } = useAuth();
  const location = useLocation();

  if (!admin) return <Navigate to="/admin/login" replace />;

  const isActive = (path) =>
    path === '/admin' ? location.pathname === '/admin' : location.pathname.startsWith(path);

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', background: '#0a0a0a' }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: DRAWER_WIDTH,
            background: '#0d0d0d',
            borderRight: '1px solid rgba(229,9,20,0.12)',
            boxSizing: 'border-box',
          },
        }}
      >
        <Box sx={{ p: 3, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <TEDxLogo size={22} />
          <Typography
            variant="caption"
            sx={{ color: '#555', fontFamily: "'DM Mono', monospace", letterSpacing: '0.15em', display: 'block', mt: 1 }}
          >
            ADMIN PANEL
          </Typography>
        </Box>

        <List sx={{ pt: 2, px: 1 }}>
          {MENU.map((item) => (
            <ListItem
              key={item.path}
              component={Link}
              to={item.path}
              disablePadding
              sx={{
                display: 'block',
                mb: 0.5,
                borderRadius: 0,
                background: isActive(item.path) ? 'rgba(229,9,20,0.1)' : 'transparent',
                borderLeft: isActive(item.path) ? '3px solid #E50914' : '3px solid transparent',
                color: isActive(item.path) ? '#fff' : '#666',
                textDecoration: 'none',
                transition: 'all 0.25s ease',
                '&:hover': { background: 'rgba(229,9,20,0.06)', color: '#ccc' },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, px: 2, py: 1.5 }}>
                <Box sx={{ color: isActive(item.path) ? '#E50914' : 'inherit' }}>{item.icon}</Box>
                <Typography sx={{ fontSize: '0.82rem', letterSpacing: '0.08em', fontWeight: isActive(item.path) ? 600 : 400 }}>
                  {item.label}
                </Typography>
              </Box>
            </ListItem>
          ))}
        </List>

        <Box sx={{ mt: 'auto', p: 2, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <ListItem
            component={Link}
            to="/"
            disablePadding
            sx={{ textDecoration: 'none', color: '#555', mb: 1, '&:hover': { color: '#ccc' } }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, px: 1, py: 1 }}>
              <HomeIcon fontSize="small" />
              <Typography sx={{ fontSize: '0.8rem' }}>View Site</Typography>
            </Box>
          </ListItem>
          <ListItem
            button
            onClick={logout}
            sx={{ color: '#E50914', cursor: 'pointer', '&:hover': { background: 'rgba(229,9,20,0.08)' } }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, px: 1, py: 1 }}>
              <LogoutIcon fontSize="small" />
              <Typography sx={{ fontSize: '0.8rem' }}>Logout</Typography>
            </Box>
          </ListItem>
        </Box>
      </Drawer>

      {/* Content */}
      <Box component="main" sx={{ flex: 1, p: 4, overflowY: 'auto' }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default AdminLayout;
