<script lang="ts">
  import profile from "../assets/pfp.png"
  import { globalToken, globalUser } from '../stores/sesion'

  let token = ''
  globalToken.subscribe(v => token = v)

  export let open = false
  let register = false

  const handleLogin = (
    e: Event & {
      readonly submitter: HTMLElement
    } & {
      currentTarget: EventTarget & HTMLFormElement
    }
  ) => {
    const user = e.currentTarget.user.value
    const password = e.currentTarget.password.value
    fetch("http://localhost:8000/auth/authorize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user, password }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
          localStorage.setItem("token", res.token)
          globalToken.set(res.token)
          globalUser.set(res.user)
          open = false
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleRegister = (
    e: Event & {
      readonly submitter: HTMLElement
    } & {
      currentTarget: EventTarget & HTMLFormElement
    }
  ) => {
    const user = e.currentTarget.user.value
    const password = e.currentTarget.password.value
    const passwordR = e.currentTarget.passwordR.value
    if (password !== passwordR) {
      alert('Las contraseñas no coinciden')
      return
    }
    fetch("http://localhost:8000/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user, password }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
          // localStorage.setItem("token", res.token)
          // globalToken.set(res.token)
          // globalUser.set(res.user)
          open = false
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleLogout = () => {
    localStorage.removeItem("token")
    globalToken.set('')
    globalUser.set('')
    open = false
  }

  let u = ""
  let p = ""
  let pr = ''
</script>

{#if open}
  {#if !token}
    {#if !register}
    <form on:submit|preventDefault={handleLogin}>
      <div class="cancell">
        <button on:click={() => (register = open = false)}>Cancelar</button>
      </div>
      <div>
        <img src={profile} alt="login" />
      </div>
      <div>
        <section>
          <label for="user" class={u && "not-idk"}>email</label>
          <input type="email" bind:value={u} id="user" name="user" />
        </section>
        <section>
          <label for="password" class={p && "not-idk"}>password</label>
          <input type="password" bind:value={p} name="password" id="password" />
        </section>
      </div>
      <div id="button-login">
        <button type="submit">Iniciar Sesion</button>
        <button on:click={e => register = true}>Registro</button>
      </div>
    </form>
    {:else}
    <form on:submit|preventDefault={handleRegister}>
      <div class="cancell">
        <button on:click={() => (register = open = false)}>Cancelar</button>
      </div>
      <div>
        <img src={profile} alt="login" />
      </div>
      <div>
        <section>
          <label for="user" class={u && "not-idk"}>email</label>
          <input type="email" bind:value={u} id="user" name="user" />
        </section>
        <section>
          <label for="password" class={p && "not-idk"}>password</label>
          <input type="password" bind:value={p} name="password" id="password" />
        </section>
        <section>
          <label for="passwordR" class={pr && "not-idk"}>password</label>
          <input type="password" bind:value={p} name="passwordR" id="passwordR" />
        </section>
      </div>
      <div id="button-login">
        <button type="submit">Registrarse</button>
        <button on:click={e => register = false}>inicio</button>
      </div>
    </form>
    {/if}
  {:else}
  <form on:submit|preventDefault={handleLogout}>
    <div class="cancell">
      <button on:click={() => (register = open = false)}>Cancelar</button>
    </div>
    <div>
      <img src={profile} alt="login" />
    </div>
    <div id="button-login">
      <button type="submit">Cerrar sesion</button>
    </div>
  </form>
  {/if}
{/if}

<style>
  form {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 500px;
    height: 500px;
    background: #fff;
    border: 1px solid rgb(65, 66, 66, 50%);
    box-shadow: #2c2b2b 0px 0px 10px 0px;
    z-index: 10;
    border-radius: 10px;
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

  form > div > img {
    flex: 1 1 0%;
    border-radius: 50%;
    box-shadow: inset 0px 0px 10px 0px;
    width: 100px;
    height: 100px;
  }

  /* talves no me guste */
  form button {
    margin: 10px;
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

  .not-idk {
    top: 0;
    font-size: 10px;
    color: var(--font-color);
  }
</style>
