import react, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { UserState } from '../../store/tokens/tokensReducer';
import './Sobre.css'


function Sobre () {
    let navigate = useNavigate();
    const token = useSelector<UserState, UserState["tokens"]>(
      (state) => state.tokens
    );

    return (
            <h1>Aqui falaremos sobre nós</h1>
    );
}


export default Sobre;