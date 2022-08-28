import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { FacebookOutlined, Instagram, MenuOutlined } from "@mui/icons-material";
import { useContext } from "react";
import { UiContext } from "../../context";

export const NavBar = () => {
  const router = useRouter();

  const { toggleSideBar } = useContext(UiContext);

  return (
    <AppBar>
      <Toolbar sx={{ bgcolor: "#4993ba" }}>
        <Typography color="white" fontWeight="bold" fontSize="1.5em">
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
              color={router.asPath !== 'temas' ? 'info.main' : 'primary.dark'}
            >
              Temas
            </Link>
          </NextLink>
          <NextLink href="/jornada" passHref>
            <Link
              fontSize="1.2em"
              color={router.asPath !== 'jornada' ? 'info.main' : 'primary.dark'}
            >
              Jornada
            </Link>
          </NextLink>
          <NextLink href="/referencias" passHref>
            <Link
              fontSize="1.2em"
              color={router.asPath !== 'referencias' ? 'info.main' : 'primary.dark'}
            >
              Referencias
            </Link>
          </NextLink>
          <NextLink href="/fotos" passHref>
            <Link
              fontSize="1.2em"
              color={router.asPath !== 'fotos' ? 'info.main' : 'primary.dark'}
            >
              Fotos
            </Link>
          </NextLink>
          <NextLink href="/videos" passHref>
            <Link
              fontSize="1.2em"
              color={router.asPath !== 'videos' ? 'info.main' : 'primary.dark'}
            >
              Videos
            </Link>
          </NextLink>
        </Box>
        <Box flex={1} />
        <IconButton
          sx={{ display: { xs: "block", md: "none" } }}
          size="large"
          onClick={toggleSideBar}
        >
          <MenuOutlined sx={{ color: "#fff" }} />
        </IconButton>
        <NextLink href="#" passHref>
          <Link sx={{ display: { xs: "none", md: "block" } }}>
            <IconButton size="large">
              <FacebookOutlined sx={{ color: "#fff" }} />
            </IconButton>
          </Link>
        </NextLink>
        <NextLink href="#" passHref>
          <Link sx={{ display: { xs: "none", md: "block" } }}>
            <IconButton size="large">
              <Instagram sx={{ color: "#fff" }} />
            </IconButton>
          </Link>
        </NextLink>
      </Toolbar>
    </AppBar>
  );
};
