import { Layout, CustomCard} from "../components";
import { display } from "@mui/system";
import { Grid, Typography, Box } from "@mui/material";
import { Height } from "@mui/icons-material";



const Fotos = () => {
    return (
        <Layout title="Curso Tractor - Fotos" description="TODO">

  <div style={{ backgroundColor: "#C5E5F5"}}>
 <Typography variant="h3" component="h1" style={{
padding:'20px'}}>
       Fotos
      </Typography>
      <div style={{
    height: '100vh', 
    display:'flex',
    flexWrap: 'wrap',
    rowGap: '5rem',
    columnGap:'3rem',
    alignContent: 'flex-start',
    justifyContent:'space-around',
    marginTop:'50px',
    padding: '20px'}}>

<div style={{backgroundColor:'white',
width:'25%',
height:'30%',
borderRadius:'50px'}}> 

</div>

<div style={{backgroundColor:'white',
width:'25%',
height:'30%',
borderRadius:'50px'}}> 

</div>

<div style={{backgroundColor:'white',
width:'25%',
height:'30%',
borderRadius:'50px'}}> 

</div>

<div style={{backgroundColor:'white',
width:'25%',
height:'30%',
borderRadius:'50px'}}> 

</div>

<div style={{backgroundColor:'white',
width:'25%',
height:'30%',
borderRadius:'50px'}}> 

</div>

<div style={{backgroundColor:'white',
width:'25%',
height:'30%',
borderRadius:'50px'}}> 

</div>

</div>

     </div>
    </Layout>
    );
  };
  
  export default Fotos;
  