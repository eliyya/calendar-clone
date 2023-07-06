<script lang="ts">
  import MiniCalendar from "./MiniCalendar.svelte"
</script>

<aside>
  <MiniCalendar />
  <div>
    <i aria-label="search" class="grupo material-symbols-outlined">group</i>
    <input name="search" id="search" type="text" placeholder="Buscar personas"/>
  </div>
  <h2>mis calendarios</h2>
  <div class="cl">
    <p>calendario 1</p>
    <i class="material-symbols-outlined">toolbar</i>
  </div>
  <div class="cl">
    <p>otros</p>
    <i class="material-symbols-outlined">toolbar add </i>
  </div>
  <span><i class="material-symbols-outlined">done</i><p>mael pley</p> </span>
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
    border-right: solid 1px #ccc;
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

  span {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 50%;
    padding: 0px 50px 0px 50px;
    font-size: 15px;
  }	

  span> i {
    border-radius: 10%;
  }

  span:hover {
    background-color: var(--button-hover-background-color);
  }

  div>input{
    border:  #ccc;
    border-radius: 5px;
    padding: 5px;
    font-size: 1rem;
    width: 100%;
    text-align: center;
  }

  div{
    display: flex;
    align-items: center;
  }

  div>.grupo{
    position: absolute;
    font-size: 1.5rem;
    margin: 0;
    width: 50px;
  }
</style>
