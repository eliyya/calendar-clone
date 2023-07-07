<script lang="ts">
  import Menu from "./lib/Menu.svelte";
  import Aside from "./lib/Aside.svelte";
  import Calendar from "./lib/calendars/Calendar.svelte";
  import CreateButton from "./lib/CreateButton.svelte";

  import { globalAside } from './stores/aside.js'
  let asideVisible = true;

  globalAside.subscribe(value => asideVisible = value);

</script>

<svelte:head>
  <meta name="google" content="notranslate" />
</svelte:head>

<Menu />
<div>
  {#if asideVisible}
    <Aside />
  {/if}
  <Calendar />
</div>
<CreateButton />

<style>
  div {
    display: flex;
    flex-direction: row;
    height: calc(100vh - 71px);
  }
</style>
