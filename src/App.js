import { Stack, Grid } from '@mui/material';
import React, { useState } from 'react';
import './App.css'
import data from './data.json'
import ImgMediaCard from './ImgMediaCard.js'



function App() {
  return (
    <Stack>
      <div class="container-fluid px-0">
        <div class="row row-cols-auto m-0 header">
        <button class="col navOption">Login</button>
        <button id="menu-button" type="button" class="col botonLogin">Menu</button>
        </div>
      </div>
      <Stack>
        <h1>
          I'mHungryButBroke
        </h1>
        <div class="searchBar">
          <button>
            <img src="https://i.ibb.co/FYTGLWQ/search-Icon.png" alt=""/>
          </button>
          <input type="text" name="" id="" placeholder="Please enter your budget"/>
          
        </div>
      </Stack>

      <Grid spacing='1rem' container>
        {data.map(item => {
          return (
            <Grid item xs='4' key={item.id}>
              <ImgMediaCard item={item.item} name={item.name} />
            </Grid>
          )
        })}
      </Grid>
    </Stack>

  );
}

export default App;
