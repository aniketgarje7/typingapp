import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Login from './Login'


const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box sx={{ flexGrow: 1}}>
    <AppBar position="static">
      <Toolbar>
      
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Typing Test
        </Typography>
        <Button color="inherit" onClick={handleOpen}>logn</Button>
        <Login handleClose={handleClose}
         open={open} setOpen={setOpen}/>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar