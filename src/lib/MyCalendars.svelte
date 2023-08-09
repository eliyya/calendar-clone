<script>
  const calendarios = [
    {
      name: "Eli",
      color: "#566167",
    },
    {
      name: "Mael",
      color: "#8d9995",
    },
  ]

  let calendarsVisible = true

  const toggleCallendars = () => (calendarsVisible = !calendarsVisible)
</script>

<section>
  <button on:click={toggleCallendars}>mis calendarios <i class="material-symbols-outlined">{calendarsVisible ? 'expand_less' : 'expand_more'}</i></button>
  {#if calendarsVisible}
    {#each calendarios as calendario}
      <article>
        <div>
          <input type="checkbox" />
          <span>{calendario.name}</span>
        </div>
        <i class="material-symbols-outlined">more_vert</i>
      </article>    
    {/each}
  {/if}
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 500;
    padding: 0 10px;
    background-color: transparent;
    border: none;
  }

  button:hover {
    background-color: var(--button-hover-background-color);
  }

  article {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
  }

  article:hover {
    background-color: var(--button-hover-background-color);
  }

  div {
    display: flex;
    align-items: center;
    align-content: center;
  }

  input {
    margin: 0;
    width: 20px;
    height: 20px;
    margin: 6px;
  }

  span {
    font-family: 14px;
  }

  i {
    font-size: 1.5rem;
  }

  i:hover {
    color: black;
  }
</style>
