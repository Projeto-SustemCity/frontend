import React from 'react';
import { Grid } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UserState } from '../../store/tokens/tokensReducer';
import ListaProduto from '../../components/produto/listaProduto/ListaProduto';

import './Home.css';
import CarouselComponent from '../../components/carousel/Carousel';

function Home() {
  let navigate = useNavigate();
  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );

  return (
    <div className='back'>
      <>
        <Grid xs={12} direction="row" justifyContent="center" alignItems="center" >
          <Grid container item className='grid-home' >
            <CarouselComponent />
          </Grid>
          <Grid>
            <ListaProduto />
          </Grid>
        </Grid>
      </>
    </div>
  );
}

export default Home;