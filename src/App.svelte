<script lang="ts">
  import Menu from "./lib/Menu.svelte";
  import Aside from "./lib/Aside.svelte";
</script>

<Menu />
<div class="root">
  <Aside />
  <main>calendario</main>
</div>

<style>
  .root {
    display: flex;
    flex-direction: row;
    height: 100%;
  }

  main {
    background-color: #f5f5f5;
    flex-grow: 1;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
