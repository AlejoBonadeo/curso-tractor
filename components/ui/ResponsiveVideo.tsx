import { FC } from "react";
import { Box } from "@mui/material";
import { Video } from "../../interfaces";

interface Props extends Video {}

export const ResponsiveVideo: FC<Props> = ({ code, title }) => {
  return (
    <Box
      position="relative"
      overflow="hidden"
      padding="25.37%"
      maxWidth="100%"
      height="auto"
      mb={2}
    >
      <iframe
        style={{
          display: "block",
          height: "100%",
          width: "100%",
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        }}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        title={title}
        src={`https://www.youtube.com/embed/${code}/`}
      />
    </Box>
  );
};
