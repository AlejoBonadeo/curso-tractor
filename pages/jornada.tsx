import { Box, Grid, Typography } from "@mui/material";
import { Layout, CustomCard } from "../components";

const Jornada = () => {
  return (
    <Layout
      title="Curso Tractor - Jornada"
      description="Aprende de tractores o algo asi"
    >
      <Box
        width="100%"
        height="100%"
        borderRadius={10}
        py={5}
        px={{ xs: 0, md: 4 }}
      >
        <Typography variant="h3" component="h1">
          Desarrollo de la jornada
        </Typography>
        <Grid container mt={3} spacing={4}>
          <Grid item xs={12} md={6}>
            <CustomCard
              title="Duración"
              description={
                "Es de día completo con descansos y almuerzo al mediodía, las personas que normalmente no están acostumbradas a estas jornadas largas, lo aprovechan de punta a punta, es su tema y para eso se fomenta la interacción en el comienzo.\n Cuando no es posible para a las personas una jornada completa, se fracciona en un días y medio o se complementa con otra actividad.\n El cierre se realiza con una entrega de certificados, siendo un incentivo para los participantes y útiles para las ART."
              }
              image="https://cnnespanol.cnn.com/wp-content/uploads/2022/01/220107141734-tractor-inteligente-full-169.jpg?quality=100&strip=info"
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              position: { xs: "static", md: "relative" },
              top: { xs: 0, md: "25vh" },
            }}
          >
            <CustomCard
              title="Modalidad de trabajo"
              description="Una parte es una proyección con imágenes (sin contenidos para leer) y videos de corta duración. Otra parte es parte arriba del tractor para mostrar alguna maniobra y debajo (herramientas en mano), viendo todos los puntos importantes de servicio."
              image="https://www.muycomputerpro.com/wp-content/uploads/2022/01/john-deere-tractor-autonomo.jpg"
            />
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default Jornada;
