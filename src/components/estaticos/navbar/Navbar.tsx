import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import "./Navbar.css";
import { Box } from "@mui/material";
import { Link } from "react-router-dom"



function Navbar() {
  return (
    <>
      <AppBar className="fundo-navbar" position="static" >
        <Toolbar className="alinhar-navbar" variant="dense">
          <img src="https://imgur.com/9iPD6Js.png" alt="" width='150vw' height='100vh' />
          <Box className="cursor">
            <Typography variant="h5">
              Sustem City
            </Typography>
          </Box>

          <Box display="flex" justifyContent="start">
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Home
              </Typography>
            </Box>
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Produtos
              </Typography>
            </Box>
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Categorias
              </Typography>
            </Box>

            <Link to="/login" className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Logout
                </Typography>
              </Box>
            </Link>
            <Link to="/sobre" className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Sobre Nos
                </Typography>
              </Box>
            </Link>
          </Box>





        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar;