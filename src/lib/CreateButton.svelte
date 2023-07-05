<script lang="ts">
  import { globalAside } from "../stores/aside.js"
  let asideVisible = true

  globalAside.subscribe((value) => (asideVisible = value))
</script>

<button>
  <i class="material-symbols-outlined">add</i>
  <span class={asideVisible ? "" : "hidden"}>Crear</span>
  <i class={asideVisible ? "material-symbols-outlined" : "hidden"}>arrow_drop_down</i>
</button>

<style>
  .hidden {
    display: none;
  }

  button {
    position: absolute;
    top: 90px;
    left: 20px;
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
    transition-duration: 0.5s;
    gap: 5px;
  }
  

  button:hover {
    background-color: var(--button-hover-background-color);
    box-shadow: 0px 5px 10px 0px rgba(60, 64, 67, 0.3), 0px 8px 12px 6px rgba(60, 64, 67, 0.15);
  }

  i {
    background-color: transparent;
    border-radius: 10%;
    outline: none;
    cursor: pointer;
    font-size: 1.5rem;
    padding: 3px;
  }
</style>
