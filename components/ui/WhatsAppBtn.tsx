import Link from "next/link";
import { Button } from "@mui/material";
import { WhatsApp } from "@mui/icons-material";

export const WhatsAppBtn = () => {
  return (
    <Link
      href="https://api.whatsapp.com/send?phone=5491168200057"
      passHref
      target="_blank"
    >
      <Button
        endIcon={<WhatsApp />}
        size="large"
        sx={{
          fontSize: { xs: "1em", sm: "1.5em" },
          mx: { xs: 0, md: 2 },
          my: { xs: 1, md: 0 },
          width: { xs: "100%", md: "fit-content" },
          bgcolor: "#25D366",
        }}
        target="_blank"
        href="https://api.whatsapp.com/send?phone=5491168200057"
      >
        Contactanos
      </Button>
    </Link>
  );
};
