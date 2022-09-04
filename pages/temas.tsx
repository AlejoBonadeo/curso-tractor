import { display } from "@mui/system";
import { Layout, CustomCard } from "../components";
import { ChevronRightOutlined, WhatsApp } from "@mui/icons-material";
import { Box, Button, Grid, Link, Typography } from "@mui/material";
import NextLink from "next/link";

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
        <Grid item xs={12} md={4}>
          <CustomCard
            title="Tema 1"
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec mauris id felis commodo hendrerit. Pellentesque aliquet magna nec diam cursus consectetur. Nam tellus tortor, fermentum sit amet libero eu, fermentum volutpat nulla. Cras scelerisque varius risus quis volutpat. Praesent et vulputate libero. In vulputate augue et purus cursus ultrices. Duis malesuada risus ipsum, eget pretium mauris fermentum ut. Sed vulputate ipsum nibh, vitae cursus turpis lacinia eget."
            }
            image="https://cnnespanol.cnn.com/wp-content/uploads/2022/01/220107141734-tractor-inteligente-full-169.jpg?quality=100&strip=info"
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <CustomCard
            title="Tema 2"
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec mauris id felis commodo hendrerit. Pellentesque aliquet magna nec diam cursus consectetur. Nam tellus tortor, fermentum sit amet libero eu, fermentum volutpat nulla. Cras scelerisque varius risus quis volutpat. Praesent et vulputate libero. In vulputate augue et purus cursus ultrices. Duis malesuada risus ipsum, eget pretium mauris fermentum ut. Sed vulputate ipsum nibh, vitae cursus turpis lacinia eget."
            }
            image="https://cnnespanol.cnn.com/wp-content/uploads/2022/01/220107141734-tractor-inteligente-full-169.jpg?quality=100&strip=info"
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <CustomCard
            title="Tema 3"
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec mauris id felis commodo hendrerit. Pellentesque aliquet magna nec diam cursus consectetur. Nam tellus tortor, fermentum sit amet libero eu, fermentum volutpat nulla. Cras scelerisque varius risus quis volutpat. Praesent et vulputate libero. In vulputate augue et purus cursus ultrices. Duis malesuada risus ipsum, eget pretium mauris fermentum ut. Sed vulputate ipsum nibh, vitae cursus turpis lacinia eget."
            }
            image="https://cnnespanol.cnn.com/wp-content/uploads/2022/01/220107141734-tractor-inteligente-full-169.jpg?quality=100&strip=info"
          />
        </Grid>
      </Grid>
      <Box
        width="100%"
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
        mt={{ xs: "5vh", md: "15vh" }}
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
            Ir a Jornada
          </Button>
        </NextLink>
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
          Contactanos
        </Button>
      </Box>
    </Layout>
  );
};

export default Temas;
