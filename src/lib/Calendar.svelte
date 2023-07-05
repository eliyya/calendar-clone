<script lang="ts">
  import { getCalendarDays, globalSelectedDate, getCalendarDaysPerWeek, days  } from "../stores/date.js"

  const calendarDaysPerWeek = getCalendarDaysPerWeek()
  // https://svelte.dev/docs/logic-blocks#await
</script>

<main>
  {#each calendarDaysPerWeek as week, i}
    {#each week as day, j}
      <div>
        {i === 0 ? days[j] : ""}
        {day.getDate()}
      </div>
    {/each}
  {/each}
</main>

<style>
  main {
    background-color: #ffffff;
    flex-grow: 1;
    color: #000;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }
  div{
    border-bottom: solid 1px #ccc;
    border-right: solid 1px #ccc;
    border-left: solid 1px #ccc;
  }
  
</style>
