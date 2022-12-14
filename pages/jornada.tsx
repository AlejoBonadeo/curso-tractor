import NextLink from "next/link";
import { ChevronRightOutlined } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Layout, CustomCard, WhatsAppBtn } from "../components";
import { Image } from "../interfaces";

const images: Image[] = [
  {
    title: "Duración",
    description:
      "Es de día completo con descansos y almuerzo al mediodía, las personas que normalmente no están acostumbradas a estas jornadas largas, lo aprovechan de punta a punta, es su tema y para eso se fomenta la interacción en el comienzo.\n Cuando no es posible para a las personas una jornada completa, se fracciona en un día y medio o se complementa con otra actividad.\n El cierre se realiza con una entrega de certificados, siendo un incentivo para los participantes y útiles para las ART.",
    image: "/images/a6.jpg",
  },
  {
    title: "Modalidad de trabajo",
    description:
      "Una parte es una proyección con imágenes (sin contenidos para leer) y videos de corta duración. Otra parte es parte arriba del tractor para mostrar alguna maniobra y debajo (herramientas en mano), viendo todos los puntos importantes de servicio.",
    image: "/images/g4.png",
  },
];

const Jornada = () => {
  return (
    <Layout
      title="Curso Tractor - Jornada"
      description="Información sobre la jornada del curso"
    >
      <Typography variant="h3" component="h1">
        Desarrollo de la jornada
      </Typography>
      <Grid container mt={3} spacing={4}>
        {images.map((image, index) => (
          <Grid
            item
            key={index}
            xs={12}
            md={6}
            sx={
              index % 2
                ? {
                    position: { xs: "static", md: "relative" },
                    top: { xs: 0, md: "25vh" },
                  }
                : undefined
            }
          >
            <CustomCard {...image} />
          </Grid>
        ))}
      </Grid>
      <Box
        width="100%"
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
        mt={{ xs: "5vh", md: "30vh" }}
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
        <WhatsAppBtn/>
      </Box>
    </Layout>
  );
};

export default Jornada;
