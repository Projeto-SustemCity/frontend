import React, { useEffect, useState, ChangeEvent } from 'react'
import { Box, Button, Card, TextField, Typography } from '@material-ui/core'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import Produto from '../../models/Produto'
import { buscaId } from '../../services/Service'


import './Cart.css'
import { useSelector } from 'react-redux'
import { TokenState } from '../../store/tokens/tokensReducer'

function Cart() {

    let navigate = useNavigate()

    // Assim como no FormularioPostagem, pegamos o Id do Produto pela URL
    const { id } = useParams<{ id: string }>()

    // Substituir para o uso com Redux
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    // State para guardar a quantidade escolhida pela P. Usuaria 
    const [quantidadeFinal, setQuantidadeFinal] = useState(0)

    // State para guardar as informações do Produto retornadas pelo Back
    const [produto, setProdutos] = useState<Produto>({
        id: 0,
        produto: 'kkkkkk',
        valor: 0,
        descricao: 'kkkkkk',
        foto: 'https://st2.depositphotos.com/6544740/9337/i/600/depositphotos_93376372-stock-photo-sunset-over-sea-pier.jpg',
        tipo: 'kkkkkk',
        categoria: null
    })

    useEffect(() => {
        if (token === "") {
            alert("Você precisa estar logado")
            navigate("/login")
        }
    }, [token])

    
    // Vai disparar a função findByIdProduto sempre que o ID for diferente que Undefined
    useEffect(() => {
        if (id !== undefined) {
            findByIdProduto(id)
        }
    }, [id])

    // Esse Código irá pegar o ID do Produto, e acessar a service que busca as informações por ID 
    async function findByIdProduto(id: string) {
        await buscaId(`produtos/${id}`, setProdutos, {
            headers: {
                'Authorization': token
            }
        })
    }

    // Função que vai pegar a quantidade escolhida do Produto
    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        let preco = +e.target.value
        setQuantidadeFinal(preco);
    }

    // Função que mostra o valor total entre a quantidade e o valor unitário do item. Ex.: 2 * R$2 = 4
    function valorTotal() {
        return quantidadeFinal * produto.valor
    }

    // Função que simula a compra Efetuada com sucesso
    function confirmSales() {
        alert("Compra Confirmada! Verifique o seu email!")
        navigate("/produtos/all")
    }

    return (
        <>
            <Box m={2} display="flex" justifyContent="center">
                <Card variant="outlined" className='cardContainer'>

                    <div className='cardProduct'>
                       

                        <div className='cardProductInfo'>
                            <Typography color="textSecondary" gutterBottom>
                                Postagens
                            </Typography>

                            <Typography variant="h5" component="h2">
                                {produto.produto}
                            </Typography>
                            
                             <img src={produto.foto} alt="Img" />

                            <Typography variant="body2" component="p">
                                R$ {produto.valor}
                            </Typography>

                            <Typography variant="body2" component="p">
                                 {produto.descricao}
                            </Typography>

                            <Typography variant="body2" component="p">
                                 {produto.tipo}
                            </Typography>

                            <Typography variant="body2" component="p">
                                 {produto.categoria?.categoria}
                            </Typography>

                            <TextField
                                value={quantidadeFinal}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}

                                // Propriedade que define o limite minimo e máximo de itens que podem ser comprados
                                // InputProps={{ inputProps: { min: 1, max: produto.quantidade } }}   

                                id="quantidade" label="quantidade" type="number" variant="outlined"
                                name="quantidade" margin="normal" fullWidth
                            />

                            <Typography variant="body2" component="p">
                                Total: R$ {valorTotal()}
                            </Typography>
                        </div>
                    </div>

                </Card>

                <Box display="flex" flexDirection="column" justifyContent="center" mb={1.5}>

                    <Box className="cardProductButton">
                        <Box mx={1}>
                            <Button onClick={confirmSales} variant="contained" size='small' color="primary">
                                Confimar Compra
                            </Button>
                        </Box>
                    </Box>

                    <Link to="/produtos/all" className="cardProductButton">
                        <Box mx={1}>
                            <Button variant="contained" size='small' color="secondary">
                                Cancelar
                            </Button>
                        </Box>
                    </Link>

                </Box>
            </Box>
        </>
    )
}

export default Cart