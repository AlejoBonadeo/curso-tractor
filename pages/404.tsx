import NextLink from "next/link";
import { Box, Button, Typography } from "@mui/material";
import { ChevronRightOutlined, AgricultureOutlined } from "@mui/icons-material";
import { Layout } from "../components";


const Error404 = () => {
  return (
    <Layout
      title="Error 404"
      description="Parece que la página que buscas no existe"
    >
      <Box
        bgcolor="primary.light"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Typography
          variant="h2"
          component="h1"
          fontWeight="bold"
          textAlign="center"
        >
          Página no encontrada
        </Typography>
        <AgricultureOutlined
          sx={{ fontSize: "100px", mb: 3}}
        />
        <Typography fontWeight="bold" mb={3}>
          Parece que la página que buscas no existe
        </Typography>
        <NextLink href="/index" passHref>
          <Button
            endIcon={<ChevronRightOutlined />}
            size="large"
            sx={{
              fontSize: { xs: "1em", sm: "1.5em" },
              mx: { xs: 0, md: 2 },
              my: { xs: 1, md: 0 },
            }}
          >
            Volver al inicio
          </Button>
        </NextLink>
      </Box>
    </Layout>
  );
};

export default Error404;
