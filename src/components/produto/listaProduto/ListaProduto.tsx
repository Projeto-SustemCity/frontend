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

  async function getProduto() {
    await busca("/produtos/all", setProduto, {})
  }

  useEffect(() => {

    getProduto()

  }, [produtos.length])

  return (
    <Grid className='back'>
            <div className='container'>
                {
                    produtos.map(produto => (
                        <div className="container page-wrapper">
                            <div className="page-inner">
                                <div className="row">
                                    <div className="el-wrapper">
                                        <div className="box-up">
                                            <img className='tamanho' src={produto.foto}></img>
                                            <div className="img-info">
                                                <div className="info-inner">
                                                    <span className="p-name"> {produto.produto}</span>
                                                    <span className="p-company"> {produto.tipo}</span>
                                                </div>
                                                <div className="a-size">{produto.descricao}</div>
                                            </div>
                                        </div>
                                        <div className="box-down">
                                            <div className="h-bg">
                                                <div className="h-bg-inner"></div>
                                            </div>
                                            <a className="cart" href="#">
                                                <span className="price">R${produto.valor}</span>
                                                <span className="add-to-cart">
                                                    <span className="txt">Comprar</span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </Grid>
  )
}
export default ListaProduto;