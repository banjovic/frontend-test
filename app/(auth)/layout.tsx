import React from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Stack,
  Typography,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        bgcolor: "#FFFFFF",
      }}
      p={2}
      width='100%'
      height='100vh'
      gap={4}
    >
      <Box
        sx={{
          width: "30%",
          height: "100%",
          background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url('/login-bg.png') no-repeat center center`,
          backgroundSize: "cover",
          color: "white",
          fontFamily: "var(--font-public-sans)",
        }}
        display={{ xs: "none", md: "flex" }}
        flexDirection='column'
        justifyContent='space-between'
        gap={4}
        borderRadius={3}
        px={4}
        pt={{ xs: 10, md: 16, xl: 24 }}
        pb={{ xs: 4, md: 8 }}
      >
        <Stack>
          <Typography
            variant='h3'
            gutterBottom
            fontWeight={700}
            sx={{
              fontFamily: "var(--font-public-sans)",
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            }}
          >
            Transform your potential today.
          </Typography>
          <Typography
            variant='body2'
            sx={{ fontFamily: "var(--font-public-sans)" }}
          >
            Become the best version of yourself by accessing the perspectives
            and life experiences of others who&apos;ve been there, done that.
          </Typography>
        </Stack>

        <Box alignItems='start' display='flex' flexDirection='column' gap={2}>
          <Stack alignItems='start' gap={1}>
            <AvatarGroup spacing='medium'>
              <Avatar alt='Remy Sharp' src='/avatar.jpeg' />
              <Avatar alt='Travis Howard' src='/avatar.jpeg' />
              <Avatar alt='Cindy Baker' src='/avatar.jpeg' />
            </AvatarGroup>

            <Typography
              variant='body2'
              sx={{ fontFamily: "var(--font-public-sans)" }}
            >
              Join our community of +10,000 members
            </Typography>
          </Stack>

          <List dense>
            <ListItem disablePadding>
              <ListItemIcon sx={{ minWidth: "auto", mr: 1 }}>
                <CheckIcon style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary='Access to mentors anytime' />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon sx={{ minWidth: "auto", mr: 1 }}>
                <CheckIcon style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary='Top rated mentors in their fields' />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon sx={{ minWidth: "auto", mr: 1 }}>
                <CheckIcon style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary='Top rated mentors in their fields' />
            </ListItem>
          </List>
        </Box>
      </Box>

      <Box sx={{ flexGrow: 1 }}>{children}</Box>
    </Box>
  );
};

export default AuthLayout;
