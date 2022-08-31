import NextLink from "next/link";
import { Layout } from "../components";
import { Box, Button, Grid, Link, Typography } from "@mui/material";
import { ChevronRightOutlined} from "@mui/icons-material";
import Home from './index';
import { display } from '@mui/system';
import AgricultureIcon from '@mui/icons-material/Agriculture';


const Error404 = () => {
  return (
    <Layout title="Error 404" description="Parece que la página que buscas no existe">
        <div style={{backgroundColor:'#C5E5F5', 
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      height:"100vh"}}>

        <h2 style={{fontSize:'70px',
      marginTop:"0",
      marginBottom:"10px"}}> Página  no encontrada </h2>
<AgricultureIcon style={{fontSize:'100px',
marginBottom:"10px"}}></AgricultureIcon>
        <p style={{fontWeight:"bold",
      marginBottom:"30px"}}> Parece que la página seleccionada no existe </p>
        <NextLink href="/index" passHref>
          <Button
            endIcon={<ChevronRightOutlined />}
            size="large"
            sx={{
              fontSize: { xs: "1em", sm: "1.5em" },
              mx: { xs: 0, md: 2 },
              my: { xs: 1, md: 0 },
              width: { xs: "100%", md: "fit-content" },
            }}
          >
           Volver al inicio
          </Button>
        </NextLink> 

        </div>


    </Layout>
  );
};

export default Error404;
