<script lang="ts">
  import { getActualDate } from "../stores/date.js"
  import { globalSelectedDate, getCalendarDaysPerWeek } from "../stores/date.js"

  const calendarDaysPerWeek = getCalendarDaysPerWeek()
  let selectedDate: Date
  globalSelectedDate.subscribe(value => selectedDate = value)

</script>

<div>
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
          <td style={day.getMonth() === selectedDate.getMonth() ? 'color:#000' : ''}>{day.getDate()}</td>
        {/each}
      </tr>
    {/each}
  </table>
</div>

<style>
  div {
    padding: 10px;
  }

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

  th, td {
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

  td {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    cursor: pointer;
    margin: auto;
    font-weight: 500;
  }

  td:hover {
    background: var(--button-hover-background-color);
  }
</style>
