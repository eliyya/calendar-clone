<script lang="ts">
  import Menu from "./lib/Menu.svelte";
  import Aside from "./lib/Aside.svelte";
  import Calendar from "./lib/calendars/Calendar.svelte";
  import CreateButton from "./lib/CreateButton.svelte";

  import Register from './pages/Register.svelte'

  import { navigate, Router, Route } from "svelte-routing";
  navigate("/register", { replace: true })

  import { globalAside } from './stores/aside.js'
  let asideVisible = true;

  globalAside.subscribe(value => asideVisible = value);

</script>

<svelte:head>
  <meta name="google" content="notranslate" />
</svelte:head>

<Router url="/calendar-clone">
  <div>
    <Route path="/register" component={Register} />
    <Route path="/blog" component={Blog} />
    <Route path="/about" component={About} />
    <Route path="/"><Home /></Route>
  </div>
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
  div {
    display: flex;
    flex-direction: row;
    height: calc(100vh - 71px);
  }
</style>
