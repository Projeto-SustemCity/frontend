import { Button, Container, TextField, Typography } from '@material-ui/core'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage';
import Categoria from '../../../models/Categoria';
import { buscaId, post, put } from '../../../services/Service';

function CadastrarCategoria() {

    let navigate = useNavigate();
    const {id} = useParams<{id : string}> ();
    const [token, setToken] = useLocalStorage('token'); 
    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        categoria: "",
        descricao: "",
    });

    useEffect (() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")

        }
    }, [token])

    useEffect(() =>{
        if(id !== undefined){
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

        function updatedCategoria(e: ChangeEvent<HTMLInputElement>) {

            setCategoria({
                ...categoria,
                [e.target.name]: e.target.value,
            })
    
        }
        
        async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
            e.preventDefault()
    
            console.log("categoria" + JSON.stringify(categoria)) //
    
            if (id !== undefined) {
                console.log(categoria) //
                try {
                    await put(`/categoria`, categoria, setCategoria, {
                        headers: {
                            'Authorization': token
                        }
                    })
                    alert("Categoria atualizada com sucesso!")
                } catch (error) {
                    console.log(`Error: ${error}`)
                    alert("Erro, por favor verifique a quantidade minima de caracteres")
                }
            } else {
                try {
                    await post(`/categoria`, categoria, setCategoria, {
                        headers: {
                            'Authorization': token
                        }
                    })
                    alert("Categoria cadastrada com sucesso!")
                } catch (error) {
                    console.log(`Error: ${error}`)
                    alert("Erro, por favor verifique a quantidade minima de caracteres")
                }
            }
            back()
        }
    
        function back() {
            navigate('/categoria')
        }

  return (
    <Container maxWidth = "sm" className = "topo" >
        <form onSubmit={onSubmit}>
            <Typography variant = "h3" color ="textSecondary" component ="h1" align = "center" > 
                Cadastrar categoria
            </Typography>
            <TextField value={categoria.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="descricao" label="Descrição" name="descricao" margin="normal" fullWidth />
            <Button type="submit" variant="contained" color="primary">
                Cadastrar
            </Button>

        </form>

    </Container>
  )
}

export default CadastrarCategoria