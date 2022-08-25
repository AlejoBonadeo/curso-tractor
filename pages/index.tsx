import { Box, Button, Link, Typography } from "@mui/material";
import NextLink from "next/link";
import NavBar from "../components/ui/NavBar";

const Home = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      justifyContent="center"
      flexDirection={{
        xs: "column",
        md: "row",
      }}
      mt={10}
    >
        <NavBar/>

      <Typography variant="h1">Hola mundo</Typography>
      <NextLink href="/about">
        <Link>
          Go to about
        </Link>
      </NextLink>
      <Button variant="contained">Hola mundo</Button>
    </Box>
  );
};

export default Home;
