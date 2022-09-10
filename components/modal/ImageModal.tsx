import { FC } from "react";
import { Dialog, DialogContent } from "@mui/material";
import { ResponsiveImage } from "../ui";

interface Props {
  image: string | null;
  open: boolean;
  close: () => void;
}

export const ImageModal: FC<Props> = ({ image, open, close }) => {
  return (
    <Dialog
      open={open}
      onClose={close}
      fullWidth
      PaperProps={{ sx: { bgcolor: "transparent", boxShadow: "none" } }}
      maxWidth="md"
    >
      <DialogContent sx={{ p: 0, bgcolor: "transparent", overflow: 'hidden' }}>
        <ResponsiveImage image={image!} imageStyles={{ borderRadius: '40px' }} />
      </DialogContent>
    </Dialog>
  );
};
