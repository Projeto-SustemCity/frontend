import { Box, Button, Card, CardActions, CardContent, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Categoria from "../../../models/Categoria";
import { buscaId, deleteId } from "../../../services/Service";
import { UserState } from "../../../store/tokens/tokensReducer";

import './DeletarCategoria.css';  

function DeletarCategoria() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );
  const [categoria, setCategoria] = useState<Categoria>()

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

  useEffect(() => {
    if (id !== undefined) {
      findById(id)
    }
  }, [id])

  async function findById(id: string) {
    buscaId(`/categoria/${id}`, setCategoria, {
      headers: {
        'Authorization': token
      }
    })
  }

  async function sim() {
    navigate('/categoria')
    try {
      await deleteId(`/categoria/${id}`, {
        headers: {
          'Authorization': token
        }
      });
      toast.success('Categoria deletada com sucesso', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,

      });
    } catch (error) {
      toast.error('Erro ao deletar', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,

      });
    }
  }

  function nao() {
    navigate('/categoria')
  }

  return (
    <div className="container-deletar">
      <Box m={2}>
        <Card className='card-tamanho-2'>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deseja deletar a categoria :
            </Typography>
            <Typography className='cat-nome' gutterBottom>
              {categoria?.categoria}
            </Typography>
            <Typography className='cat-descricao' variant="body2">
              {categoria?.descricao}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
                <Button onClick={sim} variant="contained" className="botao-del-1" size='large'>
                  Sim
                </Button>
              </Box>
              <Box mx={2}>
                <Button onClick={nao} variant="contained" size='large' className="botao-2">
                  Não
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
}
export default DeletarCategoria;
