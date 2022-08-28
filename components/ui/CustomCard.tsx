import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { FC } from "react";

interface Props {
  image: string;
  title: string;
  description: string;
}

export const CustomCard: FC<Props> = ({ image, title, description }) => {
  return (
    <Card sx={{ borderRadius: 8, bgcolor: "primary.light" }}>
      <CardMedia component="div" sx={{ width: "100%" }}>
        <Box
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
            src={image}
            position="absolute"
            top={0}
            bottom={0}
            right={0}
            left={0}
          />
        </Box>
      </CardMedia>
      <CardContent sx={{ position: "relative", bottom: {xs: 30, sm: 50} }}>
        <Typography gutterBottom variant="h5" component="h5">
          {title}
        </Typography>
        <Typography variant="body2" whiteSpace="pre-line" color="#808080">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};
