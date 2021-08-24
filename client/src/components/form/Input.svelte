<script lang="ts">
  export let value = "";
</script>

<input bind:value {...$$props} class="input" />

<style lang="scss">
  @import "src/scss/index.scss";
  @import "src/scss/form/input.scss";
</style>
