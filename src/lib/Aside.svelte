<script lang="ts">
  import MiniCalendar from "./MiniCalendar.svelte"
</script>

<aside>

  <button>
    <i class="material-symbols-outlined">add</i> Crear
    <i class="material-symbols-outlined"> arrow_drop_down </i>
  </button>

  <MiniCalendar />
  <input type="text" placeholder="buscar" />
  <h2>mis calendarios</h2>
  <div class="cl">
    <p>calendario 1</p>
    <i class="material-symbols-outlined">toolbar</i>
  </div>
  <div class="cl">
    <p>otros</p>
    <i class="material-symbols-outlined">toolbar add </i>
  </div>
  <div class="terms">
    <span>Términos – Privacidad</span>
  </div>
  
</aside>

<style>
  @import "../var.css";

  aside {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 9rem;
    padding: 10px;
  }

  aside > button {
    background-color: #ffffff;
    border-radius: 50px;
    border: solid 1px var(--button-hover-background-color);
    box-shadow: 0px 1px 2px 0px rgba(60, 64, 67, 0.3), 0px 1px 3px 1px rgba(60, 64, 67, 0.15);
    cursor: pointer;
    padding: 10px;
    margin: 0 10px 10px 10px;
    font-size: 1.5rem;
    display: flex;
    margin: 1px;
    /* transition-timing-function: ease-in; */
    transition-duration: 0.5s;
  }

  aside > button:hover {
    background-color: var(--button-hover-background-color);
    box-shadow: 0px 5px 10px 0px rgba(60, 64, 67, 0.3), 0px 8px 12px 6px rgba(60, 64, 67, 0.15);
  }

  aside > button > i {
    background-color: transparent;
    border-radius: 10%;
    outline: none;
    cursor: pointer;
    font-size: 1.5rem;
    padding: 3px;
    margin: 0 15px 0 0;
  }

  input {
    background-color: var(--button-hover-background-color);
  }
  aside > h2 {
    margin: 0;
    font-size: 1rem;
    width: 100%;
  }
  aside > h2:hover {
    background-color: var(--button-hover-background-color);
  }
  .cl {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60%;
    margin: 0 10px 10px 10px;
    padding: 0px 50px 0px 50px;
    font-size: 10px;
  }
  
  .cl:hover {
    background-color: var(--button-hover-background-color);
  }
  .cl > i {
    background-color: transparent;
    border-radius: 10%;
    outline: none;
    cursor: pointer;
    font-size: 1.5rem;
  }

  .cl > p {
    margin: 0;
    padding: 0;
    font-size: 1rem;
  }

  .terms {
    margin: 0;
    padding: 0;
    display: flex;
    flex-grow: 1;
    align-items: flex-end;
  }
</style>
