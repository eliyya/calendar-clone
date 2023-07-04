<script lang="ts">
  import { getCalendarDays, globalSelectedDate, getCalendarDaysPerWeek, days  } from "../stores/date.js"

  const calendarDaysPerWeek = getCalendarDaysPerWeek()
  // https://svelte.dev/docs/logic-blocks#await
</script>

<main>
  {#each calendarDaysPerWeek as week, i}
    {#each week as day, j}
      <div class="day">
        {i === 0 ? days[j] : ""}
        {day.getDate()}
      </div>
    {/each}
  {/each}
</main>

<style>
  main {
    background-color: #f5f5f5;
    flex-grow: 1;
    color: #000;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }
</style>
