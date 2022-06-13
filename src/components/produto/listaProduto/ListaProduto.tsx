import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { busca } from '../../../services/Service'
import { Card, Box, CardActions, CardContent, Button, Typography, CardMedia, Grid } from '@material-ui/core';

import './ListaProduto.css';
import Produto from '../../../models/Produto';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';


function ListaProduto() {
  const [produtos, setProduto] = useState<Produto[]>([])
  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );
  let navigate = useNavigate();

  useEffect(() => {
    if (token == "") {
      toast.info('Você precisa estar logado', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/login")

    }
  }, [token])

  async function getProduto() {
    await busca("/produtos/all", setProduto, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {

    getProduto()

  }, [produtos.length])

  return (
    <>
      {
        produtos.map(produto => (
          <Grid xs={12}>
            <Box m={2}>
              <Card className='card'>
                <CardMedia  />
                <Typography>
                  <img src={produto.foto} alt="{produto.tipo}" className='tamanho' />
                </Typography>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {produto.produto}
                  </Typography>
                  <Typography variant="body2">
                    {produto.descricao}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Typography>
                    {produto.valor}
                  </Typography>
                  <Button size="small">Comprar</Button>
                </CardActions>
              </Card>
            </Box>
          </Grid>
        ))
      }
    </>
  )
}
export default ListaProduto;