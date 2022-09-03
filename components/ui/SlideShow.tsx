import { Box, Typography } from "@mui/material";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    url: "https://cnnespanol.cnn.com/wp-content/uploads/2022/01/220107141734-tractor-inteligente-full-169.jpg?quality=100&strip=info",
    description:
      "La capacitación fue desarrollada para evitar las roturas en la maquinaria, Aportando a las personas pautas claras para el oficio.",
  },
  {
    url: "https://www.deere.co.in/assets/images/region-1/products/tractors/d-series-tractors/john-deere-india-d-series-tractors.jpg",
    description:
      "Se trabaja concientizando en un clima ameno con palabras simples, para lograr inmediato cambio de actitud con los equipos.",
  },
  {
    url: "https://www.muycomputerpro.com/wp-content/uploads/2022/01/john-deere-tractor-autonomo.jpg",
    description:
      "No todas las personas tienen experiencia, pero de todas se espera eficiencia, la capacitación es el camino más económico.",
  },
];

export const SlideShow = () => {
  return (
    <Box px={{ xs: 0, md: "20vw", xl: "10vw" }} mt={{ xs: "10vh", sm: "5vh" }}>
      <Slide arrows={false}>
        {slideImages.map(({ url, description }, index) => (
          <Box
            key={index}
            position="relative"
            overflow="hidden"
            padding="34.37%"
            maxWidth="100%"
            height="auto"
          >
            <Box
              component="img"
              display="block"
              maxHeight="100%"
              maxWidth="100%"
              src={url}
              position="absolute"
              zIndex={-1}
              top={0}
              bottom={0}
              right={0}
              left={0}
            />
            <Box
              position="absolute"
              left="0%"
              bottom="18.8%"
              width="100%"
              bgcolor="rgba(0, 0, 0, .25)"
            >
              <Typography
                variant="body1"
                component="p"
                color="white"
                fontSize={{ xs: ".75em", sm: "1em", md: "1.2em", lg: "2em" }}
                ml="2%"
                boxSizing="border-box"
              >
                {description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Slide>
    </Box>
  );
};
