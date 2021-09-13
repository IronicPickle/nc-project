<script lang="ts">
  export let onClick: (event: MouseEvent) => void = () => {};
</script>

<button on:click={onClick} {...$$props} class="button">
  <slot />
</button>

<style lang="scss">
  @import "../../scss/index.scss";
  @import "../../scss/form/button.scss";
</style>
