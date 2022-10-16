import { Stack, Grid } from '@mui/material';
import React, { useState } from 'react';
import './App.css'
import data from './data.json'
import ImgMediaCard from './ImgMediaCard.js'



function App() { 
  // const searchBar = () => { }
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  
  const filteredList = data.filter((data) => {
    if (searchInput.length === 0) {
      return false;
    }
    return data.price <= searchInput;
  });
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
          <input
            type="search"
            placeholder="Search here"
            onChange={handleChange}
            value={searchInput} />
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
            crossorigin="anonymous"
          ></script>
        </div>

      </Stack>

      <Grid spacing='1rem' container>
        {filteredList.map(item => {
          return (
            <Grid item xs='4' key={item.id}>
              <ImgMediaCard {...item} />
            </Grid>
          )
        })}
      </Grid>
    </Stack>

  );
}

export default App;
