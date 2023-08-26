<script lang="ts">
  import pfp from "../assets/pfp.png"
  import { Link, useNavigate } from "svelte-navigator"
  const navigate = useNavigate()
  import Register from "./Register.svelte"
  import { globalToken, globalUser } from "../stores/sesion"
  type submitForm = Event & { readonly submitter: HTMLElement } & { currentTarget: EventTarget & HTMLFormElement }
  const handleSubmit = (e: submitForm) => {
    const user = e.currentTarget.email.value
    const password = e.currentTarget.password.value
    fetch("https://bold-dove-83.deno.dev/auth/authorize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user, password }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message) {
          alert(res.message)
        } else {
          globalUser.set(null)
          globalToken.set(res.token)
          navigate("/")
        }
      })
  }
</script>

<main>
  <div>
    Register
  </div>

  <form on:submit|preventDefault={handleSubmit}>
    <img src={pfp} alt="" />
    <label for="email">Email</label>
    <input type="email" name="email" id="email" placeholder="Email" />
    <label for="password">Password</label>
    <input type="password" name="password" id="password" placeholder="Password" />
    <input type="submit" value="Login" />
    <p>Aun no tienes cuenta? <Link to="/register">Crea una</Link></p>
  </form>
</main>

<style>
  main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    width: 100%;
    height: 100vh;
    background: #fffefe38;
    backdrop-filter: blur(5px);
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 20px;
  }
  input {
    padding: 10px;
    width: 200px;
    margin-bottom: 20px;
  }
  label:nth-child(2) {
    position: relative;
    left: -80px;
    top: 40px;
    margin-bottom: 10px;
  }
  label:nth-child(4) {
    position: relative;
    left: -70px;
    top: 40px;
    margin-bottom: 10px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
