<script lang="ts">
  // https://clips.twitch.tv/AbnegatePeacefulPelicanCmonBruh-v3kfh3-7CddsdMhL
  import MiniCalendar from "./MiniCalendar.svelte"
  import SearchAside from "./SearchAside.svelte"
  import MyCalendars from "./MyCalendars.svelte";
  // ratapan.com
</script>

<aside>
  <MiniCalendar />
  <SearchAside />
  <MyCalendars />
  <div>
    <span>Términos - Privacidad</span>
  </div>
</aside>

<style>
  aside {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    width: 256px;
    min-width: 256px;
    max-width: 256px;
  }

  div {
    margin: 0;
    padding: 0;
    display: flex;
    flex-grow: 1;
    align-items: flex-end;
  }
</style>
