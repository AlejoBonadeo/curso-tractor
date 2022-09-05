import { Box, Typography } from "@mui/material";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    url: "/curso-tractor/images/m34.JPG",
    description:
      "La capacitación fue desarrollada para evitar las roturas en la maquinaria, Aportando a las personas pautas claras para el oficio.",
  },
  {
    url: "/curso-tractor/images/a1.png",
    description:
      "Se trabaja concientizando en un clima ameno con palabras simples, para lograr inmediato cambio de actitud con los equipos.",
  },
  {
    url: "/curso-tractor/images/g9.jpg",
    description:
      "No todas las personas tienen experiencia, pero de todas se espera eficiencia, la capacitación es el camino más económico.",
  },
];

export const SlideShow = () => {
  return (
    <Box px={{ xs: 0, md: "20vw", xl: "10vw" }} mt={{ xs: "10vh", sm: "5vh" }}>
      <Slide arrows={false} pauseOnHover={false}>
        {slideImages.map(({ url, description }, index) => (
          <Box
            key={index}
            position="relative"
            overflow="hidden"
            padding="34.37%"
            maxWidth="100%"
            height="auto"
            borderRadius={5}
            >
            <Box
              component="img"
              display="block"
              maxHeight="81%"
              minWidth="100%"
              maxWidth="100%"
              src={url}
              position="absolute"
              zIndex={-1}
              top={0}
              bottom={0}
              right={0}
              left={0}
              borderRadius={5}
            />
            <Box
              position="absolute"
              left="0%"
              bottom="18.8%"
              height="100%"
              width="100%"
              bgcolor="rgba(0, 0, 0, .4)"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius={5}
            >
              <Typography
                variant="body1"
                component="p"
                color="white"
                fontSize={{ xs: ".75em", sm: "1em", md: "1.2em", lg: "3em" }}
                boxSizing="border-box"
                textAlign="center"
                mt={{xs: 7, md: 14}}
                fontWeight="bold"
                px={10}

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
