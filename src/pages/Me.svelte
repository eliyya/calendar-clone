<script lang="ts">
    import {globalUser, globalToken} from '../stores/sesion'
  import { useNavigate, Link } from "svelte-navigator"
    const navigate = useNavigate()
    let user = null
    globalUser.subscribe(value => user = value)
    console.log(user)

    const handleLogout = () => {
        localStorage.removeItem('token')
        globalUser.set(null)
        globalToken.set('')
        navigate('/login')
    }
</script>

{#if !user}
    <p>loading...</p>
{:else}
    hola {user.username}
    <button on:click={handleLogout}>Cerrar sesion</button>
    <Link to="/">Regresar</Link>
{/if}

<style>

</style>


