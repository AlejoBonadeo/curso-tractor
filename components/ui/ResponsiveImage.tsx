import { Box, BoxProps } from "@mui/material";
import Image from "next/image";
import { CSSProperties, FC } from "react";

interface Props {
  image: string;
  proportions?: `${number}%`;
  ContainerProps?: BoxProps;
  imageStyles?: CSSProperties;
}

export const ResponsiveImage: FC<Props> = ({
  image,
  proportions = "33.333333%",
  ContainerProps,
  imageStyles,
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
      <Image
        src={image}
        alt="Curso Tractor"
        layout="fill"
        style={imageStyles}
        className="fadeIn"
        placeholder="blur"
        blurDataURL={image}
      />
    </Box>
  );
};
