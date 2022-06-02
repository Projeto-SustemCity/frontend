import React from "react";
import { AppBar, IconButton, Toolbar, Typography, Box } from "@material-ui/core";
import { Link } from "react-router-dom"
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import "./Navbar.css";

function Navbar() {
  return (
    <>
      <AppBar position="static" >
        <Toolbar className="navbar" variant="dense">

          <Box paddingTop={1.5}>
            <Typography variant="h5" color="inherit">
              <img src="https://imgur.com/9iPD6Js.png" alt="Logo SustemCity" width='150vw' height='100vh' />
            </Typography>
          </Box>

          <Box className="links" display="flex" justifyContent="start">
            <Typography variant="h6" color="inherit">Home</Typography>
            <Typography variant="h6" color="inherit">Produtos</Typography>
            <Typography variant="h6" color="inherit">Categorias</Typography>

            <Link to="/sobre" className="text-decorator-none">
              <Typography variant="h6" color="inherit">Sobre Nós</Typography>
            </Link>

            <IconButton className='text-decorator-none' edge="start" color="inherit" aria-label="menu">
              <Link to='/login' className='text-decorator-none'>
                <ExitToAppIcon />
              </Link>
            </IconButton>
          </Box>

        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar;