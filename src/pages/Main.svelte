<script lang="ts">
  import Menu from "../lib/Menu.svelte"
  import Calendar from "../lib/calendars/Calendar.svelte"
  import CreateButton from "../lib/CreateButton.svelte"
  import Aside from "../lib/Aside.svelte"
  import { useNavigate } from "svelte-navigator"

  let asideVisible = false
  import {globalAside} from '../stores/aside'
  globalAside.subscribe((aside) => {
    asideVisible = aside
  })

  const navigate = useNavigate()
  import { globalToken, globalUser } from "../stores/sesion"
  let user = null
  globalUser.subscribe((u) => {
    user = u    
  })
  globalToken.subscribe((token) => {
    if (!token) {
      navigate("login")
      console.log("no hay token")
    } else if (!user) {
      fetch("https://bold-dove-83.deno.dev/api/users/@me", {
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.message) {
            alert(res.message)
            navigate("login")
          } else {
            console.log('res', res);
            globalUser.set(res)            
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  })
</script>

<Menu />
<div>
  {#if asideVisible}
    <Aside />
  {/if}
  <Calendar />
</div>
<CreateButton />

<style>
  div {
    display: flex;
    flex-direction: row;
    height: calc(100vh - 71px);
  }
</style>