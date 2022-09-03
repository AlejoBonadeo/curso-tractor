import { Layout, ResponsiveImage } from "../components";
import { Grid, Typography, Box } from "@mui/material";

const templateImgUrl =
  "https://cnnespanol.cnn.com/wp-content/uploads/2022/01/220107141734-tractor-inteligente-full-169.jpg?quality=100&strip=info";

const Fotos = () => {
  return (
    <Layout title="Curso Tractor - Fotos" description="TODO">
      <Box sx={{ backgroundColor: "#C5E5F5" }}>
        <Typography variant="h3" component="h1" p={2}>
          Fotos
        </Typography>
        <Grid container p={{ xs: 1, md: 2 }} spacing={{ xs: 1, md: 3 }}>
          {[...Array(6)].map(() => (
            <Grid item xs={12} md={4}>
              <ResponsiveImage
                image={templateImgUrl}
                ImageProps={{ borderRadius: 5 }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
};

export default Fotos;
