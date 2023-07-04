<script lang="ts">
  import Menu from "./lib/Menu.svelte";
  import Aside from "./lib/Aside.svelte";
  import Calendar from "./lib/Calendar.svelte";

  import { globalAside } from './stores/aside.js'
  let asideVisible = true;

  globalAside.subscribe(value => asideVisible = value);

</script>

<Menu />
<div>
  {#if asideVisible}
    <Aside />
  {/if}
  <Calendar />
</div>

<style>
  div {
    display: flex;
    flex-direction: row;
    height: 100%;
  }
</style>
