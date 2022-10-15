import './App.css'

function App() {
  return (
    <html> 
      <h1>
        I'mHungryButBroke
      </h1>
      <h2>
      <mark class="red">I'mHungeryButBroke offered in: </mark>
      <mark class="blue">Français</mark>
      </h2>    

       


      <div class="vstack gap-3 centerContent">

        
        <div class="searchBar">
          <button>
            <img src="https://i.ibb.co/FYTGLWQ/search-Icon.png" alt=""/>
          </button>
          <input type="text" name="" id="" placeholder=""/>
        </div>
      </div>
      <div class="vstack footerBottom">
        <div class="row row-cols-auto footer m-0">
          <button class="col navOption">Canada</button>
        </div>
        <p class="lineBreak"></p>
        <div class="row row-cols-auto footer m-0">
          <button class="col navOption">Settings</button>
          <button class="col navOption">Contact Us</button>
          <button class="col navOption">© 2022 I'mHungeryButBroke. All rights reserved.</button>
        </div>
      </div>

      <body>
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
  </body>
</html>
  );
}

export default App;
