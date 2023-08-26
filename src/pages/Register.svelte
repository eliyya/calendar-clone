<script lang="ts">
  import { useNavigate } from "svelte-navigator"
  const navigate = useNavigate()
  type submitForm = Event & { readonly submitter: HTMLElement } & { currentTarget: EventTarget & HTMLFormElement }
  const handleForm = (e: submitForm) => {
    const password = e.currentTarget.password.value
    const password2 = e.currentTarget.password2.value
    if (password !== password2) e.currentTarget.password2.setCustomValidity("Password does not match")
    else e.currentTarget.password2.setCustomValidity("")
    const user = e.currentTarget.email.value
    fetch("https://bold-dove-83.deno.dev/api/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)

        if (data.message) {
          alert(data.message)
        } else {
          alert("User created")
          navigate("/login")
        }
      })
  }
</script>

//bola azul
<div class="azul" />
//bola roja
<div class="rojo" />
//bola verde
<div class="verde" />
//bola amarillo
<div class="amarillo" />

<main>
  <form on:submit|preventDefault={handleForm}>
    <label for="email">Email</label>
    <input type="email" name="email" id="email" placeholder="Email" />
    <label for="password">Password</label>
    <input type="password" name="password" id="password" placeholder="Password" />
    <label for="password2">Confirm Password</label>
    <input type="password" name="password2" id="password2" placeholder="Confirm Password" />
    <input type="submit" value="Register" />
  </form>
  <div>
    <img src="" alt="" id="img" />
    <h2>hola mundo</h2>
  </div>
</main>

<style>
  /* estilos de las bolas */
  .azul {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: blue;
    position: absolute;
    top: 0;
  }

  main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    background: #fffefe, #fffefe;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  label {
    font-size: 20px;
    font-weight: 600px;
    margin: 10px;
  }
  input {
    width: 300px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin: 10px;
    padding: 5px;
  }
</style>
