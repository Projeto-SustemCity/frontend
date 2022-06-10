import React from "react";
import { AppBar, IconButton, Toolbar, Typography, Box } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom"
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { toast } from 'react-toastify';
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/actions";

function Navbar() {
  const navigate = useNavigate();

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  
  const dispatch = useDispatch();
  function goLogout() {
    if (token != '') {
      dispatch(addToken(''))
      toast.info('Usuário Deslogado!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
      navigate('/login')
    }
  }


  return (
    <>
      <AppBar position="static" className="fontenavbar" >
        <Toolbar className="navbar" variant="dense">

          <Box paddingTop={1.5}>
            <Typography variant="h5" color="inherit">
              <img src="https://imgur.com/9iPD6Js.png" alt="Logo SustemCity" width='100vw' height='80vh' />
            </Typography>
          </Box>

          <Box className="links" display="flex" justifyContent="start">
            <Link to='/home'><Typography variant="h6"  color="inherit">Home</Typography></Link>
            <Link to="/produtos/all"> <Typography variant="h6"  color="inherit">Produtos</Typography></Link>

            <Link to='/categoria'><Typography variant="h6"  color="inherit">Categorias</Typography></Link>
            <Link to='/cadastrarCategoria'><Typography variant="h6"  color="inherit">Cadastrar Categoria</Typography></Link>
            <Link to='/cadastroProduto'><Typography variant="h6"  color="inherit">Cadastrar Produto</Typography></Link>
            <Link to="/sobre" className="text-decorator-none"><Typography variant="h6"  color="inherit">Sobre Nós</Typography></Link>

            <IconButton className='text-decorator-none' edge="start" color="inherit" aria-label="menu" onClick={goLogout}>
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