<script lang="ts">
  import { globalSelectedDate, getCalendarDays, globalActualDate, getActualDate, months } from "../stores/date.js"

  
  let calendarDays = getCalendarDays()

  let actualDate: Date = new Date()

  globalActualDate.subscribe((value) => {
    actualDate = value
  })

  let selectedDate: Date
  globalSelectedDate.subscribe((value) => {
    selectedDate = value
    if (actualDate.getMonth() !== selectedDate.getMonth()) calendarDays = getCalendarDays(value)
  })

  const changeSelectedDate = (newDate: Date) => () => globalSelectedDate.set(newDate)
</script>

<div class="mini">
  <header>
    <span>{months[selectedDate.getMonth()]} {selectedDate.getFullYear()}</span>
    <button class="material-symbols-outlined">arrow_back_ios</button>
    <button class="material-symbols-outlined">arrow_forward_ios</button>
  </header>
  <div>
    <span>D</span>
    <span>L</span>
    <span>M</span>
    <span>X</span>
    <span>J</span>
    <span>V</span>
    <span>S</span>
    {#each calendarDays as day}
      <button
        on:click={changeSelectedDate(day)}
        style={(day.getMonth() === selectedDate.getMonth() ? "color:#000;" : "") +
          (day.getMonth() === selectedDate.getMonth() && 
          day.getDate() === selectedDate.getDate()
            ? "background:rgb(210,227,252);": "") + 
            (day.getMonth() === actualDate.getMonth() &&
            day.getDate() === actualDate.getDate()
            ? "background:rgb(26,115,232);" : "")}
      >
        {day.getDate()}
      </button>
    {/each}
  </div>
</div>

<style>
  div > div {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }

  div > div > button:hover {
    background: var(--button-hover-background-color);
  }

  span,
  div > div > button {
    font-size: 10px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    cursor: pointer;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 2px;
    border: none;
    background-color: #ffffff;
  }

  .mini {
    padding: 10px;
    margin-top: 70px;
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

  header > button {
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
