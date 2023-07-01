<script lang="ts">
  import logo from "./assets/calendar_25_2x.png";

  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const profile = 'https://lh3.googleusercontent.com/ogw/AOLn63FEWRlHe0Yy8QxiiTlu5zbS1jPMJVqVBuqQh-e7Ig=s32-c-mo'
  const date = new Date();
  const actualDaate = `${months[date.getMonth()]} ${date.getFullYear()}`;

  let mode: 'Dia' | 'Semana' | 'Mes' | 'Ano' | 'Agenda' = "Mes";
  // TODO:: Cambiar el modo de visualizacion (Dropdown)
  //TODO: estilos de botones 
  // better com
</script>

<svelte:head>
  <!-- Google Icons -->
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
  />
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
  <!-- Roboto -->
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<header>
  <div class="left">
    <button class="material-symbols-outlined menu">menu</button>
    <div class="logo">
      <img src={logo} alt="logo" />
      <h1>Calendario</h1>
    </div>
    <button class="crear-dias">Hoy</button>
    <button class="material-symbols-outlined">arrow_back_ios</button>
    <button class="material-symbols-outlined">arrow_forward_ios</button>
    <h2>{actualDaate}</h2>
  </div>
  <div class="right">
    <button class="material-symbols-outlined">search</button>
    <button class="material-symbols-outlined">help</button>
    <button class="material-symbols-outlined">settings</button>
    <button class="mode">
      {mode} <span class="material-symbols-outlined">arrow_drop_down</span>
    </button>
    <button class="material-symbols-outlined">apps</button>
    <img src={profile} alt="profile" />
  </div>
</header>
<div class="root">
  <aside>
    <button><span class="material-symbols-outlined">add</span> Crear</button>
    <div class="minicalendar" />
    <input type="text" placeholder="buscar" />
    <button type="button" placeholder="enter" />
  </aside>
  <main>calendario</main>
</div>



<style>
  header {
    height: 50px;
    background-color: #f5f5f5;
    text-align: center;
    border-bottom: 1px solid #2c2b2b;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 10px;
    padding:  10px; 
  }

  .menu {
    margin: 10px;
    padding: 10px;
    border-radius: 50px;
    font-size: 1.5rem;
    background: #f5f5f5;
  }

  .menu:hover {
    background: #f5f5f5;
    box-shadow: 0px 0px 5px 0px #0000002e;
  }

  header > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  header > div > h2 {
    margin: 10px;
    padding: 0;
    font-size: 1.5rem;
    font-weight: 400;
    color: #000;
  }

  .mode {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    font-size: .875rem;
  }
  
  .crear-dias {
    background-color: #f6f0f095;
    border: 20px;
    outline: none;
    cursor: pointer;
    padding: 1.5rem;
    font-size: 1.5rem;
  }	

  .logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: #000;
  }

  img[alt="logo"] {
    width: 40px;
    height: 40px;
  }

  header button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 1.5rem;
    font-size: 1.5rem;
  }

  img[alt="profile"] {
    border-radius: 50%;
  }
  .root {
    display: flex;
    row-gap: 1rem;
    flex-direction: row;
  }
</style>
