<script lang="ts">
  import { getWeek, days, globalSelectedDate } from "../../stores/date.js"
  import SecondaryButton from "../SecondaryButton.svelte"

  let week = getWeek()

  globalSelectedDate.subscribe((date) => {
    week = getWeek(date)
  })
</script>

<main>
  <header>
    <article />
    <div />
    {#each week as day, i}
      <article>
        <span>{days[i]}</span>
        <SecondaryButton>{day.getDate()}</SecondaryButton>
      </article>
    {/each}
    <div />
    <article class='utc'>
      <span>utc-6</span>
    </article>
    <div class="mdfbb" />
    {#each week as day, i}
      <article class="fixeds" />
    {/each}
    <div />
  </header>
  <div>
    <section>
      {#each Array(24) as _, i}
        <article class="hrs">
          <span>{i ? i + " hrs" : ""}</span>
        </article>
      {/each}
    </section>
    <div class="mdfbb">
      {#each Array(24) as _}
        <article class="mdfbb" />
      {/each}
    </div>
    {#each Array(7) as _}
      <section class="day">
        {#each Array(24) as _}
          <article />
        {/each}
      </section>
    {/each}
  </div>
</main>

<style>
  main {
    flex-grow: 1;
    color: #000;
    display: flex;
    flex-direction: column;
  }

  article {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 45px;
    /* border: 1px solid #ccc; */
  }

  .fixeds {
    border-bottom: 1px solid #ccc;
    border-left: 1px solid #ccc;
  }

  header {
    display: grid;
    grid-template-columns: 40px 10px repeat(7, 1fr) 10px;
  }

  main > div {
    display: grid;
    grid-template-columns: 40px 10px repeat(7, 1fr);
  }

  main > div {
    overflow-y: scroll;
    scrollbar-width: 50px;
  }

  main > div::-webkit-scrollbar {
    width: 10px;
    background-color: #fff;
    border: none;
  }

  main > div::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 10px;
  }

  section {
    grid-template-rows: repeat(24, 1fr);
  }

  .day > article {
    border-bottom: 1px solid #ccc;
    border-left: 1px solid #ccc;
  }

  .mdfbb {
    border-bottom: 1px solid #ccc;
  }

  .hrs {
    border-bottom: 1px solid transparent;
  }
  .hrs > span {
    position: relative;
    top: -9px;
    font-size: 10px;
  }

  .utc > span {
    font-size: 10px;
  }
</style>
