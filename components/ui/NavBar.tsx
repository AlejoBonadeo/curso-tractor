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
import {
  FacebookOutlined,
  Instagram,
  MenuOutlined,
  YouTube
} from "@mui/icons-material";
import { useContext } from "react";
import { UiContext } from "../../context";

export const NavBar = () => {
  const router = useRouter();

  const { toggleSideBar } = useContext(UiContext);

  return (
    <AppBar>
      <Toolbar sx={{ bgcolor: "primary.main" }}>
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
          <NextLink href="/referencias" passHref prefetch={false}>
            <Link
              fontSize="1.2em"
              color={
                router.asPath !== "/referencias" ? "info.main" : "primary.dark"
              }
            >
              Referencias
            </Link>
          </NextLink>
          <NextLink href="/fotos" passHref prefetch={false}>
            <Link
              fontSize="1.2em"
              color={router.asPath !== "/fotos" ? "info.main" : "primary.dark"}
            >
              Fotos
            </Link>
          </NextLink>
        </Box>
        <Box flex={1} />
        <IconButton
          sx={{ display: { xs: "block", md: "none" } }}
          size="large"
          onClick={toggleSideBar}
          aria-label="Menu"
        >
          <MenuOutlined sx={{ color: "#fff" }} />
        </IconButton>
        <NextLink
          href="https://es-la.facebook.com/cursotractor/"
          passHref
          target="_blank"
        >
          <Link sx={{ display: { xs: "none", md: "block" } }} target="_blank">
            <IconButton size="large" aria-label="Facebook">
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
            <IconButton size="large" aria-label="Instagram">
              <Instagram sx={{ color: "#fff" }} />
            </IconButton>
          </Link>
        </NextLink>
        <NextLink
          href="https://www.youtube.com/channel/UCvATXdypCD9Jg2yvPJNJw-g"
          passHref
          target="_blank"
        >
          <Link sx={{ display: { xs: "none", md: "block" } }} target="_blank">
            <IconButton size="large" aria-label="Instagram">
              <YouTube sx={{ color: "#fff" }}/>
            </IconButton>
          </Link>
        </NextLink>
      </Toolbar>
    </AppBar>
  );
};
