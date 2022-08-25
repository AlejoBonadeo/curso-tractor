import { AppBar, Box, Toolbar, Typography, Link } from '@mui/material';

const NavBar = () => {
  return (
    <AppBar>
        <Toolbar sx={{ bgcolor: 'white'}}>
            <Typography color="black">Curso Tractor</Typography>
            <Box flex={1}></Box>
            <Box>
                <Link>Home</Link>
                <Link>About</Link>
                <Link>Contact</Link>
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default NavBar