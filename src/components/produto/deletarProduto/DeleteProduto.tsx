import React, { useEffect, useState } from 'react'
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { useNavigate, useParams } from 'react-router-dom';
import { Box } from "@mui/material";
import { buscaId, deleteId } from '../../../services/Service';
import './DeleteProduto.css';
import Produto from '../../../models/Produto';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';


function DeletarProduto() {

    let navigate = useNavigate();

    const { id } = useParams<{ id: string }>();

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    const [produtos, setProdutos] = useState<Produto>()

    useEffect(() => {
        if (token === "") {
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
        await buscaId(`/produtos/${id}`, setProdutos, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function sim() {
        navigate('/produtos/all')

        await deleteId(`/produtos/${id}`, {
            headers: {
                'Authorization': token
            }
        });

        toast.success('produto deletado com sucesso', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    function nao() {
        navigate('/produtos/all')
    }

    return (
        <>
            <Box m={2}>
                <Card variant="outlined" >
                    <CardContent>
                        <Box justifyContent="center">
                            <Typography color="textSecondary" gutterBottom>
                                Deseja deletar o Produto:
                            </Typography>
                            <Typography color="textSecondary" >
                                {produtos?.produto}
                            </Typography>
                        </Box>

                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
                            <Box mx={2}>
                                <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                                    Sim
                                </Button>
                            </Box>
                            <Box>
                                <Button onClick={nao} variant="contained" size='large' color="secondary">
                                    Não
                                </Button>
                            </Box>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </>
    )
}

export default DeletarProduto;