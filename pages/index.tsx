import NextLink from "next/link";
import { Box, Button, Typography } from "@mui/material";
import { ChevronRightOutlined } from "@mui/icons-material";
import { SlideShow, Layout, WhatsAppBtn } from "../components";

const Home = () => {
  return (
    <Layout
      title="Curso Tractor"
      description="La capacitación fue desarrollada para evitar las roturas en la maquinaria, Aportando a las personas pautas claras para el oficio."
    >
      <Typography variant="h3" component="h1" mt={{ xs: "5vh", md: 0 }}>
        Curso Tractor
      </Typography>
      <SlideShow />
      <Box
        width="100%"
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
        mt={{ xs: "5vh", md: "5vh" }}
      >
        <NextLink href="/temas" passHref>
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
        </NextLink>
        <NextLink href="/jornada" passHref>
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
        </NextLink>
        <WhatsAppBtn />
      </Box>
    </Layout>
  );
};

export default Home;
