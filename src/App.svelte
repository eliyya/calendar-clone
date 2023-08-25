<script lang="ts">
  import Register from "./pages/Register.svelte"
  import Login from "./pages/Login.svelte"
  import Main from "./pages/Main.svelte"
   
  import { Router, Route } from "svelte-navigator"
 

  
   
</script>

<Router basepath='/calendar-clone'>

  <Route path="/register"><Register /></Route>
  <Route path="/login"><Login /></Route>
  <Route path="/"><Main /></Route>
</Router>

<!-- <Menu />
<div>
  {#if asideVisible}
    <Aside />
  {/if}
  <Calendar />
</div>
<CreateButton /> -->

<style>
</style>
