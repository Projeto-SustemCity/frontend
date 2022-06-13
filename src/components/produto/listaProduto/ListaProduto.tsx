import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { busca } from '../../../services/Service'
import { Card, Box, CardActions, CardContent, Button, Typography } from '@material-ui/core';

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
          <Box m={2} >
            <Card variant="outlined">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Produtos
                </Typography>
                <Typography variant="h5" component="h2">
                  {produto.produto}
                </Typography>
                <Typography variant="body2" component="p">
                  <img src={produto.foto} className='tamanho'/>
                </Typography>
                <Typography variant="body2" component="p">
                  {produto.descricao}
                </Typography>
                <Typography variant="body2" component="p">
                 US$ {produto.valor}
                </Typography>
                <Typography variant="body2" component="p">
                  {produto.tipo}
                </Typography>

                <Typography variant="body2" component="p">
                  {produto.categoria?.categoria}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>

                  <Link to={`/atualizarProduto/${produto.id}`} className="text-decorator-none" >
                    <Box mx={1}>
                      <Button variant="contained" className="marginLeft" size='small' color="primary" >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarProduto/${produto.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size='small' color="secondary">
                        deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>
        ))
      }
    </>
  )
}
export default ListaProduto;