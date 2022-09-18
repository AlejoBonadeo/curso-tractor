import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { FC } from "react";
import { ResponsiveImage } from ".";

interface Props {
  image: string;
  title: string;
  description: string;
}

export const CustomCard: FC<Props> = ({ image, title, description }) => {
  return (
    <Card sx={{ borderRadius: 8, bgcolor: "primary.light" }}>
      <CardMedia component="div" sx={{ width: "100%" }}>
        <ResponsiveImage
          image={image}
          sizes="(max-width: 900px) 90vw, (max-width: 1536px) 40vw"
        />
      </CardMedia>
      <CardContent>
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
