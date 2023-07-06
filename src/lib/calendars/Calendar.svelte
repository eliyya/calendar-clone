<script lang="ts">
  import { globalMode, modeObject } from "../../stores/mode.js"
  import Month from "./Month.svelte"
  import Week from "./Week.svelte"
  
  let mode: keyof typeof modeObject
  globalMode.subscribe((value) => mode = value)
</script>

{#if mode === 'M'}
  <Month/>
  {:else if mode === 'W'}
  <Week/>
{/if}