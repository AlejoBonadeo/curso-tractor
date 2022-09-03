import { Box, BoxProps } from "@mui/material";
import { FC } from "react";

interface Props {
  image: string;
  proportions?: `${number}%`;
  ContainerProps?: BoxProps;
  ImageProps?: BoxProps;
}

export const ResponsiveImage: FC<Props> = ({
  image,
  proportions = "34.37%",
  ContainerProps,
  ImageProps,
}) => {
  return (
    <Box
      position="relative"
      overflow="hidden"
      padding={proportions}
      maxWidth="100%"
      height="auto"
      {...ContainerProps}
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
        {...ImageProps}
      />
    </Box>
  );
};
