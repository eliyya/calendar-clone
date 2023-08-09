<script lang="ts">
  let buscar = ""
</script>

<section>
  <input name="search" id="search" type="text" placeholder="" bind:value={buscar} />
  {#if !buscar}
    <i class="material-symbols-outlined">group</i>
    <p>buscar personas</p>
  {/if}
</section>


<style>
  section {
    display: flex;
    align-items: center;
    background-color: #ccc;
    border-radius: 5px;
    margin-bottom: 24px;
    margin-top: 8px;
  }

  input {
    background: transparent;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: none;
    border-radius: 5px;
    padding: 5px;
    font-size: 1rem;
    width: 100%;
    z-index: 1;
  }

  input:focus {
    outline: none;
    border-bottom: solid 2px #0015ff;
  }

  i {
    position: absolute;
    font-size: 1.5rem;
    margin: 0;
    width: 40px;
    z-index: 0;
  }

   p {
    position: absolute;
    left: 90px;
    font-size: 1rem;
    z-index: 0;
  }
</style>