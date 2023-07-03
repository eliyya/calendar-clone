<script lang="ts">
  import { getActualDate } from "../stores/date.js"

  import { getCalendarDays } from "../stores/date.js"
  const calendarDaysPerWeek: ReturnType<typeof getCalendarDays>[] = []
  const calendarDays = getCalendarDays()
  for (let i = 0; i < calendarDays.length; i++) {
    if (i % 7 === 0) calendarDaysPerWeek.push([])
    calendarDaysPerWeek[calendarDaysPerWeek.length - 1].push(calendarDays[i])
  }
</script>

<div class="mini">
  <header>
    <span>{getActualDate()}</span>
    <button class="material-symbols-outlined">arrow_back_ios</button>
    <button class="material-symbols-outlined">arrow_forward_ios</button>
  </header>
  <table>
    <thead>
      <th>D</th>
      <th>L</th>
      <th>M</th>
      <th>X</th>
      <th>J</th>
      <th>V</th>
      <th>S</th>
    </thead>
    {#each calendarDaysPerWeek as week}
      <tr>
        {#each week as day}
          <td>{day.date}</td>
        {/each}
      </tr>
    {/each}
  </table>
</div>

<style>
  header {
    display: flex;
    justify-content: start;
    align-items: center;
  }

  header > span {
    font-size: 14px;
    font-weight: bold;
    flex-grow: 1;
  }

  span, td {
    font-size: 10px;
  }

  button {
    padding: 0;
    border-radius: 50px;
    font-size: 10px;
    background: #ffffff;
    border: none;
  }

  button:hover {
    background: var(--button-hover-background-color);
  }
</style>
