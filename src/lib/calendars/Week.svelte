<script lang="ts">
  import { getWeek, days } from "../../stores/date.js"
  import SecondaryButton from "../SecondaryButton.svelte"

  let week = getWeek()
</script>

<main>
  <!-- <div class="gridhours">

    </div>
    {#each week as day, i}
        <article>
            <span>{days[i]}</span>
            <SecondaryButton>{day.getDate()}</SecondaryButton>
            <div>

            </div>
        </article>
    {/each} -->
  <header>
        {#each week as day, i}
      <article>
        <span>{days[i]}</span>
        <SecondaryButton>{day.getDate()}</SecondaryButton>
      </article>
  <div />
  {/each}
  </header>
</main>
 
<style>
  main {
    flex-grow: 1;
    color: #000;
    display: flex;
    flex-direction: column;
  }

  .gridhours {
    flex-grow: 0;
  }

  article {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }

  article > div {
    border-bottom: solid 1px #ccc;
    border-right: solid 1px #ccc;
    border-left: solid 1px #ccc;
  }
</style>
