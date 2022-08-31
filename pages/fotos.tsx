import { Layout, CustomCard} from "../components";
import { display } from "@mui/system";
import { Grid, Typography, Box } from "@mui/material";
import { Height } from "@mui/icons-material";



const Fotos = () => {
    return (
        <Layout title="Curso Tractor - Fotos" description="TODO">

  <div style={{ backgroundColor: "#C5E5F5",
    width:'100vw',
    height: '100vh', }}>
 <Typography variant="h3" component="h1">
       Fotos
      </Typography>
      <div style={{
    width:'100vw',
    height: '100vh', 
    display:'flex',
    flexWrap: 'wrap',
    gap: '2rem',
    rowGap: '3rem',
    alignContent: 'flex-start',
    justifyContent:'space-around',
    marginTop:'50px'}}>

<div style={{backgroundColor:'white',
width:'25%',
height:'30%'}}> 

</div>

<div style={{backgroundColor:'white',
width:'25%',
height:'30%'}}> 

</div>

<div style={{backgroundColor:'white',
width:'25%',
height:'30%'}}> 

</div>

<div style={{backgroundColor:'white',
width:'25%',
height:'30%'}}> 

</div>

<div style={{backgroundColor:'white',
width:'25%',
height:'30%'}}> 

</div>

<div style={{backgroundColor:'white',
width:'25%',
height:'30%'}}> 

</div>

</div>

     </div>
    </Layout>
    );
  };
  
  export default Fotos;
  