<script lang="ts">
  export let onClick: (
    e: MouseEvent & {
      currentTarget: EventTarget & HTMLButtonElement
    }
  ) => any = () => 0
  
  export let icon: string = ""
</script>

<button on:click={onClick} class={icon ? "material-symbols-outlined" : ""}>
  {#if icon}
    {icon}
  {:else}
    <slot />
  {/if}
</button>

<style>
  button {
    padding: 10px;
    border-radius: 50%;
    font-size: 1.5rem;
    background: #ffffff;
    border: none;
  }

  button:hover {
    background: var(--button-hover-background-color);
  }
</style>
