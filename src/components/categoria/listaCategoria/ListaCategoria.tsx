import { Box, Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import Categoria from '../../../models/Categoria';
import { busca } from '../../../services/Service';

import './ListaCategoria.css';

function ListaCategoria() {

  let navigate = useNavigate();
  const [categoria, setCategoria] = useState<Categoria[]>([])
  const [token, setToken] = useLocalStorage('token');

  useEffect(() => {
    if (token === '') {
      alert('Você precisa estar logado!')
      navigate('/login')
    }
  }, [token])

  async function getCategoria() {
    await busca('/categoria', setCategoria, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {
    getCategoria()
  }, [categoria.length])

  return (
    <>
      {
        categoria.map(categoria => (

          <Box display='flex' justifyContent='centerdede' paddingTop={2} paddingLeft={2}>
            <Card className='card' variant="outlined">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Categoria
                </Typography>
                <Typography variant="h5" component="h2">
                  {categoria.descricao}
                </Typography>
              </CardContent>

              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5} >
                  <Link to={`/atualizarCategoria/${categoria.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" className="marginLeft" size='small' color="primary" >
                        Atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarCategoria/${categoria.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size='small' color="secondary">
                        Deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>

        ))}
    </>
  );
}

export default ListaCategoria;