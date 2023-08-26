<script lang="ts">
  import Register from "./pages/Register.svelte"
  import Login from "./pages/Login.svelte"
  import Main from "./pages/Main.svelte"
  import Me from "./pages/Me.svelte"
   
  import { Router, Route } from "svelte-navigator"
</script>

<Router basepath='/calendar-clone'>
  <Route path="/register"><Register /></Route>
  <Route path="/login"><Login /></Route>
  <Route path="/"><Main /></Route>
  <Route path="/me"><Me/></Route>
</Router>
