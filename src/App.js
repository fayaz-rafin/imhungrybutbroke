import React, { useState } from 'react';
import './App.css'
import data from './data.json'
import ImgMediaCard from './ImgMediaCard.js'



function App() {
  return (
    <div>
      <h1>
        I'mHungryButBroke
      </h1>

      <div class="vstack gap-3 centerContent">

        
        <div class="searchBar">
          <button>
            <img src="https://i.ibb.co/FYTGLWQ/search-Icon.png" alt=""/>
          </button>
          <input type="text" name="" id="" placeholder="Please enter your budget"/>
        </div>
      </div>
   
    <div class="container-fluid px-0">
      <div class="row row-cols-auto m-0 header">
      <button class="col navOption">Login</button>
      <button id="menu-button" type="button" class="col botonLogin">Menu</button>
      </div>

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
        crossorigin="anonymous"
      ></script>

    </div>
    {data.map(item => {
      return (
        <ImgMediaCard key={item.id} item={item.item} name={item.name} />
      );
    })}
    </div>
  );
}

export default App;
