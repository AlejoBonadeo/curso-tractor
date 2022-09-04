import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Link,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Divider,
  ListItemIcon,
} from "@mui/material";
import { useRouter } from "next/router";
import NextLink from "next/link";
import {
  FacebookOutlined,
  Instagram,
  KeyboardArrowDownOutlined,
  Logout,
  MenuOutlined,
  PersonAdd,
  Settings,
  StarBorderOutlined,
} from "@mui/icons-material";
import { useContext, useState } from "react";
import { UiContext } from "../../context";
import { AgricultureOutlined } from '@mui/icons-material';

export const NavBar = () => {
  const router = useRouter();

  const { toggleSideBar } = useContext(UiContext);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <AppBar>
      <Toolbar sx={{ bgcolor: "#4993ba" }}>
        <Typography
          color="white"
          fontWeight="bold"
          fontSize="1.5em"
          sx={{ cursor: "pointer" }}
          onClick={() => router.push("/")}
        >
          Curso Tractor
        </Typography>
        <Box
          ml={3}
          sx={{ "& a": { ml: 6 } }}
          display={{ xs: "none", md: "flex" }}
        >
          <NextLink href="/temas" passHref>
            <Link
              fontSize="1.2em"
              color={router.asPath !== "/temas" ? "info.main" : "primary.dark"}
            >
              Temas
            </Link>
          </NextLink>
          <NextLink href="/jornada" passHref>
            <Link
              fontSize="1.2em"
              color={
                router.asPath !== "/jornada" ? "info.main" : "primary.dark"
              }
            >
              Jornada
            </Link>
          </NextLink>
          <NextLink href="/referencias" passHref>
            <Link
              fontSize="1.2em"
              color={
                router.asPath !== "/referencias" ? "info.main" : "primary.dark"
              }
            >
              Referencias
            </Link>
          </NextLink>
          <NextLink href="/fotos" passHref>
            <Link
              fontSize="1.2em"
              color={router.asPath !== "/fotos" ? "info.main" : "primary.dark"}
            >
              Fotos
            </Link>
          </NextLink>
          <Link
            onClick={handleClick}
            fontSize="1.2em"
            color={
              !router.asPath.includes("videos") ? "info.main" : "primary.dark"
            }
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            Videos
            <KeyboardArrowDownOutlined />
          </Link>
        </Box>
        <Box flex={1} />
        <IconButton
          sx={{ display: { xs: "block", md: "none" } }}
          size="large"
          onClick={toggleSideBar}
        >
          <MenuOutlined sx={{ color: "#fff" }} />
        </IconButton>
        <NextLink
          href="https://es-la.facebook.com/cursotractor/"
          passHref
          target="_blank"
        >
          <Link sx={{ display: { xs: "none", md: "block" } }} target="_blank">
            <IconButton size="large">
              <FacebookOutlined sx={{ color: "#fff" }} />
            </IconButton>
          </Link>
        </NextLink>
        <NextLink
          href="https://www.instagram.com/cursotractor/"
          passHref
          target="_blank"
        >
          <Link sx={{ display: { xs: "none", md: "block" } }} target="_blank">
            <IconButton size="large">
              <Instagram sx={{ color: "#fff" }} />
            </IconButton>
          </Link>
        </NextLink>
        <Menu
          anchorEl={anchorEl}
          open={!!anchorEl}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "&:before": {
                content: '""',
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={() => router.push("/videos/")} sx={{ py: 2 }}>
            <ListItemIcon>
              <AgricultureOutlined fontSize="small" />
            </ListItemIcon>
            Capacitaciones
          </MenuItem>
          <MenuItem onClick={() => router.push("/videos/")} sx={{ py: 2 }}>
            <ListItemIcon>
              <AgricultureOutlined fontSize="small" />
            </ListItemIcon>
            Demostraciones
          </MenuItem>
          <MenuItem onClick={() => router.push("/videos/")} sx={{ py: 2 }}>
            <ListItemIcon>
              <AgricultureOutlined fontSize="small" />
            </ListItemIcon>
            Técnicos
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
