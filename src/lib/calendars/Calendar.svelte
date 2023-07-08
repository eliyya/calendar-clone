<script lang="ts">
  import { globalMode, modeObject } from "../../stores/mode.js"
  import Day from "./Day.svelte"
  import Week from "./Week.svelte"
  import Month from "./Month.svelte"
  
  let mode: keyof typeof modeObject
  globalMode.subscribe((value) => mode = value)
</script>

{#if mode === 'D'}
  <Day/>
  {:else if mode === 'W'}
  <Week/>
  {:else if mode === 'M'}
  <Month/>
{/if}