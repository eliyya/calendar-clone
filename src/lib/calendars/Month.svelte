<script lang="ts">
  import { globalSelectedDate, getCalendarDays, globalActualDate, months, getCalendarDaysPerWeek, days } from "../../stores/date.js"

  let calendarDaysPerWeek = getCalendarDaysPerWeek()
  let actualDate = new Date()
  let selectedDate = new Date()

  globalActualDate.subscribe((value) => {
    actualDate = value
  })

  globalSelectedDate.subscribe((value) => {
    if (selectedDate?.getMonth() !== value.getMonth()) calendarDaysPerWeek = getCalendarDaysPerWeek(value)
    selectedDate = value
  })

</script>

<main>
  {#each calendarDaysPerWeek as week, i}
    {#each week as day, j}
      <div>
        {i === 0 ? days[j].toUpperCase() : ""}
        {day.getDate()}
      </div>
    {/each}
  {/each}
</main>

<style>
  /* .d {
    font-size: 11px;
    font-weight: 500;
  } */

  main {
    background-color: #ffffff;
    flex-grow: 1;
    color: #000;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }

  div{
    border-bottom: solid 1px #ccc;
    border-left: solid 1px #ccc;
  }
</style>
