<script lang="ts">
  import logo from "../assets/calendar_25_2x.png"

  import { globalMode, modeObject } from "../stores/mode.js"
  import { months, globalSelectedDate } from "../stores/date.js"
  import PrimaryButton from "./PrimaryButton.svelte"
  import SecondaryButton from "./SecondaryButton.svelte"

  import { globalAside } from "../stores/aside.js"

  const profile = "https://lh3.googleusercontent.com/ogw/AOLn63FEWRlHe0Yy8QxiiTlu5zbS1jPMJVqVBuqQh-e7Ig=s32-c-mo"

  let dropdown = false
  let mode: keyof typeof modeObject
  let selectedDay = new Date()

  globalMode.subscribe((value) => mode = value)

  globalSelectedDate.subscribe((value) => selectedDay = value)

  const toggleDropdow = () => (dropdown = !dropdown)

  const changueMode = (newMode: keyof typeof modeObject) => () => (globalMode.set(newMode), void (dropdown = false))

  const nextDate = () => {
    globalSelectedDate.update((value) => {
      const newDate = new Date(value)
      if (mode === "D") newDate.setDate(newDate.getDate() + 1)
      if (mode === "W") newDate.setDate(newDate.getDate() + 7)
      if (mode === "M") newDate.setMonth(newDate.getMonth() + 1)
      if (mode === "Y") newDate.setFullYear(newDate.getFullYear() + 1)
      return newDate
    })
  }

  const prevDate = () => {
    globalSelectedDate.update((value) => {
      const newDate = new Date(value)
      if (mode === "D") newDate.setDate(newDate.getDate() - 1)
      if (mode === "W") newDate.setDate(newDate.getDate() - 7)
      if (mode === "M") newDate.setMonth(newDate.getMonth() - 1)
      if (mode === "Y") newDate.setFullYear(newDate.getFullYear() - 1)
      return newDate
    })
  }

  const now = () => globalSelectedDate.set(new Date())
</script>

<header>
  <div class="left">
    <SecondaryButton icon='menu' onClick={() => globalAside.update(a => !a)} />
    <div class="logo">
      <img src={logo} alt="logo" />
      <h1>Calendario</h1>
    </div>

    <PrimaryButton onClick={now}>Hoy</PrimaryButton>
    <SecondaryButton onClick={nextDate} icon='arrow_back_ios' />
    <SecondaryButton onClick={prevDate} icon='arrow_forward_ios' />
    <h2>{`${months[selectedDay.getMonth()]} ${selectedDay.getFullYear()}`}</h2>
    
  </div>
  <div class="right">
    <SecondaryButton icon='search' />
    <SecondaryButton icon='help' />
    <SecondaryButton icon='settings' />
    <PrimaryButton onClick={toggleDropdow}>
      {modeObject[mode]}
      <i class="material-symbols-outlined mode">arrow_drop_down</i>
    </PrimaryButton>
    <SecondaryButton icon='apps' />
    <img src={profile} alt="profile" />
  </div>
</header>
{#if dropdown}
  <div class="dropdown">
    <button on:click={changueMode("D")}>Dia <span>D</span></button>
    <button on:click={changueMode("W")}>Semana <span>W</span></button>
    <button on:click={changueMode("M")}>Mes <span>M</span></button>
    <button on:click={changueMode("Y")}>Año <span>Y</span></button>
    <button on:click={changueMode("A")}>Agenda <span>A</span></button>
  </div>
{/if}

<style>
  @import "../var.css";

  header {
    height: 50px;
    text-align: center;
    border-bottom: 1px solid #2c2b2b;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 10px;
    padding: 10px;
    overflow: hidden;
  }

  header > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
  }

  header > div > h2 {
    margin: 10px;
    padding: 0;
    font-size: 1.5rem;
    font-weight: 400;
    color: var(--font-color);
  }

  .logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: var(--font-color);
  }

  img[alt="logo"] {
    width: 40px;
    height: 40px;
  }

  .mode {
    margin-left: 0.5rem;
    font-size: 1rem;
  }

  img[alt="profile"] {
    border-radius: 50%;
  }

  .dropdown {
    position: absolute;
    top: 70px;
    right: 50px;
    display: flex;
    flex-direction: column;
    border: 1px solid rgb(218, 220, 224);
    border-radius: 5px;
    z-index: 10;
  }

  .dropdown > button {
    padding: 10px;
    min-width: 200px;
    display: flex;
    justify-content: space-between;
    border: none;
    background-color: #fff;
    border-radius: 0;
  }

  .dropdown > button:hover {
    background-color: var(--button-hover-background-color);
  }
</style>
