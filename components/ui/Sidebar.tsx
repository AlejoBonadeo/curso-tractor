import { useContext, useState } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Collapse,
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
  ExpandMoreOutlined,
  ExpandLessOutlined,
} from "@mui/icons-material";
import { UiContext } from "../../context";
import { Instagram } from "@mui/icons-material";

export const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const { isSideBarOpen, toggleSideBar } = useContext(UiContext);

  const navigateTo = (url: string) => {
    if (url.includes("http")) window.open(url);
    else router.push(url);

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
          height: "fit-content",
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
          <ListItem button onClick={() => navigateTo("/jornada")}>
            <ListItemIcon>
              <AgricultureOutlined sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Jornada" />
          </ListItem>
          <ListItem button onClick={() => navigateTo("/referencias")}>
            <ListItemIcon>
              <BusinessOutlined sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Referencias" />
          </ListItem>
          <ListItem button onClick={() => navigateTo("/fotos")}>
            <ListItemIcon>
              <PhotoLibraryOutlined sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Fotos" />
          </ListItem>
          <ListItem button onClick={() => setOpen(!open)}>
            <ListItemIcon>
              <VideoLibraryOutlined sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Videos" />
            {open ? <ExpandLessOutlined /> : <ExpandMoreOutlined />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button sx={{ pl: 4 }} onClick={() => navigateTo('/videos/capacitaciones')}>
                <ListItemIcon>
                  <AgricultureOutlined sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary="Capacitaciones" />
              </ListItem>
              <ListItem button sx={{ pl: 4 }} onClick={() => navigateTo('/videos/demostraciones')}>
                <ListItemIcon>
                  <AgricultureOutlined sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary="Demostraciones" />
              </ListItem>
              <ListItem button sx={{ pl: 4 }} onClick={() => navigateTo('/videos/tecnicos')}>
                <ListItemIcon>
                  <AgricultureOutlined sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary="Técnicos" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem
            button
            onClick={() =>
              navigateTo("https://es-la.facebook.com/cursotractor/")
            }
          >
            <ListItemIcon>
              <FacebookOutlined sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Facebook" />
          </ListItem>
          <ListItem
            button
            onClick={() =>
              navigateTo("https://www.instagram.com/cursotractor/")
            }
          >
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
