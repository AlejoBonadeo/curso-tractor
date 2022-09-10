import { Box, Typography } from "@mui/material";
import Image from "next/image";
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
      "Se trabaja con las personas, sus conocimientos y costumbres, para lograr inmediato cambio de actitud con los equipos.",
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
            padding="30%"
            maxWidth="100%"
            borderRadius={5}
          >
            <Image
              src={url}
              alt="Curso Tractor"
              layout="fill"
              style={{ borderRadius: "20px" }}
              className="fadeIn"
              placeholder="blur"
              blurDataURL={url}
            />
            <Box
              position="absolute"
              left="0%"
              bottom="0%"
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
                fontSize={{ xs: "1em", sm: "1.5em", lg: "2.5em", xl: "3em" }}
                boxSizing="border-box"
                textAlign="center"
                fontWeight="bold"
                px={{ xs: 3, md: 10 }}
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
