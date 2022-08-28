import { useContext } from "react";
import { useRouter } from "next/router";
import {
  Box,
  // Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  AgricultureOutlined,
  BusinessOutlined,
  FormatListBulletedOutlined,
  PhotoLibraryOutlined,
  VideoLibraryOutlined,
  FacebookOutlined,
} from "@mui/icons-material";
import { UiContext } from "../../context";
import { Instagram } from "@mui/icons-material";

export const Sidebar = () => {
  const router = useRouter();

  const { isSideBarOpen, toggleSideBar } = useContext(UiContext);

  const navigateTo = (url: string) => {
    router.push(url);
    toggleSideBar();
  };

  return (
    <Drawer
      open={isSideBarOpen}
      anchor="right"
      sx={{ backdropFilter: "blur(5px)", transition: "all 0.5s ease-in-out" }}
      PaperProps={{
        sx: {
          bgcolor: "#4993ba",
          borderTopLeftRadius: 50,
          borderBottomLeftRadius: 50,
          height: 'fit-content',
        },
      }}
      onClose={toggleSideBar}
    >
      <Box sx={{ width: 250, py: 2, color: "white" }}>
        <List>
          <ListItem button onClick={() => navigateTo("/temas")}>
            <ListItemIcon>
              <FormatListBulletedOutlined sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Temas" />
          </ListItem>
          {/* <Divider color="white" /> */}
          <ListItem button onClick={() => navigateTo("/jornada")}>
            <ListItemIcon>
              <AgricultureOutlined sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Jornada" />
          </ListItem>
          {/* <Divider color="white" /> */}
          <ListItem button onClick={() => navigateTo("/referencias")}>
            <ListItemIcon>
              <BusinessOutlined sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Referencias" />
          </ListItem>
          {/* <Divider color="white" /> */}
          <ListItem button onClick={() => navigateTo("/fotos")}>
            <ListItemIcon>
              <PhotoLibraryOutlined sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Fotos" />
          </ListItem>
          {/* <Divider color="white" /> */}
          <ListItem button onClick={() => navigateTo("/videos")}>
            <ListItemIcon>
              <VideoLibraryOutlined sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Videos" />
          </ListItem>
          {/* <Divider color="white" /> */}
          <ListItem button onClick={() => navigateTo("#")}>
            <ListItemIcon>
              <FacebookOutlined sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Facebook" />
          </ListItem>
          {/* <Divider color="white" /> */}
          <ListItem button onClick={() => navigateTo("#")}>
            <ListItemIcon>
              <Instagram sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Instagram" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};
