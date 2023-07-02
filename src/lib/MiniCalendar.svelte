<script lang="ts">
  import { getActualDate } from "../stores/date.js"

  // TODO: generate calendar
  /*
    obtener pirmer dia del mes
    obtener numero de semana del primer dia del mes
    obtener cantidad faltante de dias para completar la primera semana
    obtener ultimos dias de mes anterior
    aniadir dias faltantes de la primera semana al array

    aniadir todos los dias del mes al array

    obtener ultimo dia del mes
    obtener numero de semana del ultimo dia del mes
    obtener cantidad faltante de dias para completar la ultima semana
    obtener primeros dias de mes siguiente
    aniadir dias faltantes de la ultima semana al array

    devolver el array
  */
</script>

<div class="mini">
  <header>
    <span>{getActualDate()}</span>
    <button class="material-symbols-outlined">arrow_back_ios</button>
    <button class="material-symbols-outlined">arrow_forward_ios</button>
  </header>
  <div>
    <div>
      <span>D</span>
      <span>L</span>
      <span>M</span>
      <span>X</span>
      <span>J</span>
      <span>V</span>
      <span>S</span>
    </div>
  </div>
</div>

<style>
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

  span {
    font-size: 10px;
  }

  button {
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
