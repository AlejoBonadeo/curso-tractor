import { FC } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { ResponsiveVideo } from "../ui";
import { Video } from "../../interfaces";

interface Props {
  title: string;
  videos: Video[];
}

export const VideoPage: FC<Props> = ({ videos, title }) => {
  return (
    <Box bgcolor="primary.light" minHeight={{ xs: "80vh", md: "auto" }}>
      <Typography variant="h3" component="h1" p={2} fontSize={{xs: '2em', md: '3em'}}>
        {title}
      </Typography>
      <Grid container width="100%" p={2}>
        {videos.map((video) => (
            <Grid item key={video.code} xs={12}>
                <ResponsiveVideo {...video} />
            </Grid>
        ))}
      </Grid>
    </Box>
  );
};
