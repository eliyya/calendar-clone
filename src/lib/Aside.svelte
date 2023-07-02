<script lang="ts">
    import MiniCalendar from "./MiniCalendar.svelte";
</script>

<aside>
  <button ><i class="material-symbols-outlined">add</i> Crear <i class="material-symbols-outlined">
    arrow_drop_down
  </i></button>
  <MiniCalendar />
  <input type="text" placeholder="buscar" />
  <button type="button" placeholder="enter" />
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
    box-shadow: 0px 1px 2px 0px rgba(60,64,67,0.3),0px 1px 3px 1px rgba(60,64,67,0.15); 
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
    box-shadow: 0px 5px 10px 0px rgba(60,64,67,0.3),0px 8px 12px 6px rgba(60,64,67,0.15);
   
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
</style>
