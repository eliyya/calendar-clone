<script lang="ts">
  import logo from "./assets/calendar_25_2x.png";

  import Burger from "./lib/Burger.svelte";
  import Plus from "./lib/Plus.svelte";

  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const date = new Date();

  // TODO: add google icons 

  const actualDaate = `${months[date.getMonth()]} ${date.getFullYear()}`;
</script>

<header>
  <button><Burger /></button>
  <div class="logo">
    <img src={logo} alt="" />
    <h1>Calendario</h1>
  </div>
  <button>Hoy</button>
  <button>{"<"}</button>
  <button>{">"}</button>
  <h2>{actualDaate}</h2>
  <button>B</button>
  <button>L</button>
  <button>C</button>
  <button>Mes</button>
  <button>A</button>
  <img src="" alt="" />
</header>
<div class="root">
  <aside>
    <button><Plus /> Crear</button>
    <div class="minicalendar" />
    <input type="text" placeholder="buscar" />
    <button type="button" placeholder="enter" />
  </aside>
  <main>calendario</main>
</div>

<style>
  header {
    height: 60px;
    background-color: #f5f5f5;
    text-align: center;
    border-bottom: 1px solid #000;
    display: flex;
  }

  .logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: #000;
  }

  .root {
    display: flex;
    row-gap: 1rem;
    flex-direction: row;
  }
</style>
