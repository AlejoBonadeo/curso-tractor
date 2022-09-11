import { useState } from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import { ImageModal, Layout, ResponsiveImage } from "../components";
import { images } from '../data'

const Fotos = () => {
  const [modalImage, setModalImage] = useState<string>("");
  const [slice, setSlice] = useState(12);

  const close = () => {
    setModalImage("");
  };

  return (
    <Layout
      title="Curso Tractor - Fotos"
      description="Fotos de todo lo relacionado al curso"
    >
      <Box bgcolor="primary.light" display="flex" flexDirection="column">
        <Typography variant="h3" component="h1" p={2}>
          Fotos
        </Typography>
        <Grid container p={{ xs: 1, md: 2 }} spacing={{ xs: 1, md: 3 }}>
          {images.slice(0, slice).map((image) => (
            <Grid
              item
              key={image}
              xs={12}
              sm={6}
              md={4}
              onClick={() => setModalImage(`/curso-tractor/images/${image}`)}
            >
              <ResponsiveImage
                image={`/curso-tractor/images/${image}`}
                imageStyles={{ borderRadius: "20px", cursor: "pointer" }}
              />
            </Grid>
          ))}
        </Grid>
        {slice < images.length && (
          <Button
            sx={{
              width: "fit-content",
              fontSize: "1.2em",
              alignSelf: "center",
              my: 3,
            }}
            onClick={() => setSlice(slice + 12)}
          >
            Mostrar más
          </Button>
        )}
      </Box>
      <ImageModal close={close} open={!!modalImage} image={modalImage} />
    </Layout>
  );
};

export default Fotos;
