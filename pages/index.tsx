import NextLink from "next/link";
import { Box, Button, Link, Typography } from "@mui/material";
import { ChevronRightOutlined, WhatsApp } from "@mui/icons-material";
import { SlideShow, Layout } from "../components";

const Home = () => {
  return (
    <Layout title="Curso Tractor" description="Aprende de tractores o algo asi">
      <Typography variant="h3" component="h1" mt={{xs: '5vh', md: 0}}>
        Curso Tractor
      </Typography>
      <SlideShow />
      <Box
        width="100%"
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
        position="relative"
        top={-10}
        mt={{ xs: "5vh", md: 0 }}
      >
        <Button
          endIcon={<ChevronRightOutlined />}
          size="large"
          sx={{
            fontSize: { xs: "1em", sm: "1.5em" },
            mx: { xs: 0, md: 2 },
            my: { xs: 1, md: 0 },
            width: { xs: "100%", md: "fit-content" },
          }}
        >
          Ver Temas
        </Button>
        <Button
          endIcon={<ChevronRightOutlined />}
          size="large"
          sx={{
            fontSize: { xs: "1em", sm: "1.5em" },
            mx: { xs: 0, md: 2 },
            my: { xs: 1, md: 0 },
            width: { xs: "100%", md: "fit-content" },
          }}
          variant="outlined"
        >
          Ver Jornada
        </Button>
        <Button
          endIcon={<WhatsApp />}
          size="large"
          sx={{
            fontSize: { xs: "1em", sm: "1.5em" },
            mx: { xs: 0, md: 2 },
            my: { xs: 1, md: 0 },
            width: { xs: "100%", md: "fit-content" },
            bgcolor: "#25D366",
          }}
        >
          Inscribite
        </Button>
      </Box>
    </Layout>
  );
};

export default Home;
