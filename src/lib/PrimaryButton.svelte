<script lang="ts">
    export let onClick: (e: MouseEvent & {
    currentTarget: EventTarget & HTMLButtonElement;
}) => any = (() => 0);
</script>

<button on:click={onClick} class="now"><slot /></button>

<style>
  button {
    margin: 30px;
    padding: 10px 20px;
    border-radius: 5px;
    border: solid 1px #0000002e;
    background: #ffffff;

    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    font-size: 0.875rem;
  }
  
  button:hover {
    background: #f4f8f8;
  }
</style>
