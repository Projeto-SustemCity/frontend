import react, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { TokenState } from '../../store/tokens/tokensReducer';
import './Sobre.css'


function Sobre () {
    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
    );
  
    useEffect(() => {
      if (token == "") {
        toast.info('Você precisa estar logado!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
          progress: undefined,
      });
        navigate("/login")
  
      }
    }, [token])
    return (
            <h1>Aqui falaremos sobre nós</h1>
    );
}


export default Sobre;