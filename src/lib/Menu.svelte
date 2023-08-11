<script lang="ts">
  import logo from "../assets/calendar_25_2x.png"
  import profile from "../assets/pfp.png"
  import { globalMode, modeObject } from "../stores/mode.js"
  import { months, globalSelectedDate } from "../stores/date.js"
  import PrimaryButton from "./PrimaryButton.svelte"
  import SecondaryButton from "./SecondaryButton.svelte"

  import { globalAside } from "../stores/aside.js"

  let dropdown = false
  let mode: keyof typeof modeObject
  let selectedDay = new Date()

  globalMode.subscribe((value) => (mode = value))

  globalSelectedDate.subscribe((value) => (selectedDay = value))

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

  const handleLogin = (
    e: Event & {
      readonly submitter: HTMLElement
    } & {
      currentTarget: EventTarget & HTMLFormElement
    }
  ) => {
    console.log(e.target)
  }
  let dialogOpen = false
</script>

<header>
  <div class="left">
    <SecondaryButton icon="menu" onClick={() => globalAside.update((a) => !a)} />
    <div class="logo">
      <img src={logo} alt="logo" />
      <h1>Calendario</h1>
    </div>

    <PrimaryButton onClick={now}>Hoy</PrimaryButton>
    <SecondaryButton onClick={nextDate} icon="arrow_back_ios" />
    <SecondaryButton onClick={prevDate} icon="arrow_forward_ios" />
    <h2>{`${months[selectedDay.getMonth()]} ${selectedDay.getFullYear()}`}</h2>
  </div>
  <div class="right">
    <SecondaryButton icon="search" />
    <SecondaryButton icon="help" />
    <SecondaryButton icon="settings" />
    <PrimaryButton onClick={toggleDropdow}>
      {modeObject[mode]}
      <i class="material-symbols-outlined mode">arrow_drop_down</i>
    </PrimaryButton>
    <SecondaryButton icon="apps" />
    <button on:click={(e) => (dialogOpen = !dialogOpen)}>
      <img src={profile} alt="profile" />
    </button>
    <dialog open={dialogOpen} on:close={(e) => (dialogOpen = false)}>
      <form on:submit={handleLogin}>
        <div class="cancell">
          <button on:click={(e) => (dialogOpen = false)}>Cancelar</button>
        </div>
        <img src={profile} alt="login" />
        <div>
          <section>
            <label for="user">email</label>
            <input type="email" id="user" name="user" />
          </section>
          <section>
            <label for="password">password</label>
            <input type="password" name="password" id="password" />
          </section>
        </div>
        <div id="button-login">
          <button type="submit">Iniciar Sesion</button>
        </div>
      </form>
    </dialog>
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
  header {
    height: 64px;
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

  dialog {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 500px;
    height: 500px;
    border: 1px solid rgb(65, 66, 66,50%);
    box-shadow: #2c2b2b 0px 0px 10px 0px;
    border-radius: 10px;

    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  dialog::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    background: #fff;    
  }
  form > div {
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  section {
    display: flex;  
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
  }
  section > input {
    width: 200px;
    height: 30px;
    border: 1px solid rgb(218, 220, 224);
    border-radius: 5px;
    padding: 5px;
  }

  form > img {
    
    flex: 1 1 0%;
    border: solid 2px rgb(218, 220, 224);
    border-radius: 50%; 
  }

  /* talves no me guste */
  form button {
    /* margin: 10px; */
    padding: 10px;
    width: 100px;
    border: 1px solid rgb(218, 220, 224);
    border-radius: 5px;
    background-color: #fff;
  }
  form button:hover {
    background-color: var(--button-hover-background-color);
  }

  section > label {
    display: flex;
    position: relative;
    top: 33px;
    width: 200px;
    font-size: 15px;
  }

  .cancell {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
  }

  /* not  */
  section:has(input:focus) > label {
    top: 0;
    font-size: 10px;
    color: var(--font-color);
  }
  

</style>
