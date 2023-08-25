<script lang="ts">
  import { useNavigate } from "svelte-navigator"
  const navigate = useNavigate()
  import { globalToken, globalUser } from "../stores/sesion"
  import type { element_is } from "svelte/internal"
  let user = null
  globalUser.subscribe((user) => (user = user))
  globalToken.subscribe((token) => {
    console.log(typeof token)

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
          console.log(res)
          globalUser.set(res.user)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  })
</script>

<main>Holis</main>
