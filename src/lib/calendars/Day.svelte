<script lang="ts">
  import { getWeek, days, globalSelectedDate } from "../../stores/date.js"
  import SecondaryButton from "../SecondaryButton.svelte"

  let day = new Date()

  globalSelectedDate.subscribe((date) => {
    day = date
  })
</script>

<main>
  <header>
    <article />
    <div />
    <article>
      <span class="d">{days[day.getDay()].toUpperCase()}</span>
      <span class="btn">{day.getDate()}</span>
    </article>
    <div />
    <article class='utc'>
      <span>utc-6</span>
    </article>
    <div class="mdfbb" />
      <article class="fixeds" />
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
    <section class="day">
      {#each Array(24) as _}
        <article />
      {/each}
    </section>
  </div>
</main>

<style>
  .d {
    font-size: 11px;
    font-weight: 500;
  }

  main {
    flex-grow: 1;
    color: #000;
    display: flex;
    flex-direction: column;
  }

  .btn {
    background-color: var(--button-hover-background-color);
    font-size: 26px;
    width: 46px;
    height: 46px;
    border-radius: 50%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  article {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: start;
    min-height: 45px;
    /* border: 1px solid #ccc; */
  }

  .fixeds {
    border-bottom: 1px solid #ccc;
    border-left: 1px solid #ccc;
  }

  header {
    display: grid;
    grid-template-columns: 40px 10px repeat(1, 1fr) 10px;
  }

  main > div {
    display: grid;
    grid-template-columns: 40px 10px repeat(1, 1fr);
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
