<script lang="ts">
  export let value = "";
</script>

<input bind:value {...$$props} class="field input" />

<style lang="scss">
  @import "../../scss/index.scss";
  @import "../../scss/form/input.scss";
</style>
