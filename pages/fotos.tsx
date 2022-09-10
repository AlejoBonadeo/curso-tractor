import { ImageModal, Layout, ResponsiveImage } from "../components";
import { Grid, Typography, Box, Button } from "@mui/material";
import { useState } from "react";

const templateImgUrl =
  "https://cnnespanol.cnn.com/wp-content/uploads/2022/01/220107141734-tractor-inteligente-full-169.jpg?quality=100&strip=info";

const images: string[] = [
  "a1.png",
  "a2.png",
  "a3.png",
  "a4.jpg",
  "a5.png",
  "a6.jpg",
  "m1.JPG",
  "m2.png",
  "m3.png",
  "m4.png",
  "m5.png",
  "m6.png",
  "m7.png",
  "m8.png",
  "m9.png",
  "m10.png",
  "m11.png",
  "m12.png",
  "m13.png",
  "m14.png",
  "m15.png",
  "m16.png",
  "m17.png",
  "m18.png",
  "m19.png",
  "m20.png",
  "m21.png",
  "m22.png",
  "m23.jpg",
  "m25.jpg",
  "m26.png",
  "m27.jpg",
  "m28.jpg",
  "m29.jpg",
  "m30.jpg",
  "m31.jpg",
  "m32.JPG",
  "m33.JPG",
  "m34.JPG",
  "m35.jpg",
  "m36.png",
  "m37.png",
  "m38.png",
  "m39.JPG",
  "m40.jpg",
  "m41.jpg",
  "m42.jpg",
  "m43.jpg",
  "m44.jpg",
  "m45.jpg",
  "m50.jpg",
  "m51.jpg",
  "g1.png",
  "g2.png",
  "g3.png",
  "g4.png",
  "g5.png",
  "g6.png",
  "g7.jpg",
  "g8.jpg",
  "g9.jpg",
  "g10.jpg",
  "g11.jpg",
  "g12.jpg",
  "g13.jpg",
  "g14.jpg",
  "g15.jpg",
  "t1.png",
  "t2.png",
  "t3.png",
  "t4.png",
  "t5.png",
  "t6.png",
  "t7.png",
  "t8.png",
  "t9.jpg",
  "t10.jpg",
  "t10.png",
  "t11.png",
  "t12.png",
  "t13.png",
  "t14.png",
  "t15.png",
  "t16.jpg",
  "t17.jpg",
];

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
