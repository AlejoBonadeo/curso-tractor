import NextLink from "next/link";
import { Box, Button, Grid, Typography } from "@mui/material";
import { ChevronRightOutlined } from "@mui/icons-material";
import { Layout, CustomCard, WhatsAppBtn } from "../components";
import { Image } from "../interfaces";

const images: Image[] = [
  {
    title: "Seguridad",
    description:
      "Diferenciar un accidente de una falta de prevención (incidente)\nLa causas de estos siempre son el apuro o subestimar los riesgos (canchereada o negligencia pocas veces) se trabaja con eso.\nLa prevención son solo unos minutos, pero esenciales.",
    image: "/curso-tractor/images/a2.png",
  },
  {
    title: "Uso y Manejo",
    description:
      "Instrumentos: que indican y su importancia\nComandos: cuando y como se usan, trabajos eficientes cuidando los componentes que se le puede pedir a un tractor y cuales son sus limites\nNociones de fuerza del motor, lastrado y patinaje para la diaria, evitando los tecnicismos.",
    image: "/curso-tractor/images/m13.png",
  },
  {
    title: "Mantenimiento",
    description:
      "Funcionamiento de los sistemas de tractor para entender su conservación\nComo realizar el mantenimiento de los componentes, promoviendo el conocimiento de cada uno sobre su máquina para no dejar temas sin resolver una vez encaminado el servicio.\nAjustes y regulaciones para prevenir desgastes.",
    image: "/curso-tractor/images/m31.jpg",
  },
];

const Temas = () => {
  return (
    <Layout
      title="Curso Tractor - Temas"
      description="Temas a tratar en la jornada del curso"
    >
      <Typography variant="h3" component="h1">
        Temas
      </Typography>
      <Grid container mt={3} spacing={2}>
        {images.map((image) => (
          <Grid item key={image.image} xs={12} md={4}>
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
        mt={{ xs: "5vh", md: "15vh" }}
      >
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
          >
            Ir a Jornada
          </Button>
        </NextLink>
        <WhatsAppBtn/>
      </Box>
    </Layout>
  );
};

export default Temas;
