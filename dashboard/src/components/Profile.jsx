import React from "react";
import { Avatar, Box, Typography, Divider, Button, Stack } from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LogoutIcon from "@mui/icons-material/Logout";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

import axios from "axios";

const Profile = ({ userData }) => {
  const handleLogout = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/logout`,
        {},
        { withCredentials: true },
      );
      window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/login`;
    } catch (err) {
      console.error("Logout failed");
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 520,
        mx: "auto",
        mt: 4,
        px: 2,
      }}
    >
      {/* Header */}
      <Stack alignItems="center" spacing={1.5} mb={4}>
        <Avatar
          sx={{
            width: 72,
            height: 72,
            bgcolor: "primary.main",
            fontSize: 28,
          }}
        >
          {userData.firstName?.charAt(0).toUpperCase()}
          {userData.lastName?.charAt(0).toUpperCase()}
        </Avatar>

        <Typography variant="h6"></Typography>
        <Typography variant="body2" color="text.secondary">
          Account details
        </Typography>
      </Stack>

      {/* Info section */}
      <Stack spacing={2.5}>
        <Stack direction="row" spacing={2} alignItems="center">
          <PersonIcon color="action" />
          <Typography variant="body2">
            {userData.firstName} {userData.lastName}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <AlternateEmailIcon color="action" />
          <Typography variant="body2">{userData.username}</Typography>
        </Stack>

        <Stack direction="row" spacing={2} alignItems="center">
          <EmailIcon color="action" />
          <Typography variant="body2">{userData.email}</Typography>
        </Stack>

        <Stack direction="row" spacing={2} alignItems="center">
          <PhoneIcon color="action" />
          <Typography variant="body2">+91 {userData.mobileNum}</Typography>
        </Stack>
      </Stack>

      <Divider sx={{ my: 4 }} />

      {/* Logout */}
      <Button
        variant="text"
        color="error"
        startIcon={<LogoutIcon />}
        onClick={handleLogout}
        sx={{ px: 0 }}
      >
        Logout
      </Button>
    </Box>
  );
};

export default Profile;
