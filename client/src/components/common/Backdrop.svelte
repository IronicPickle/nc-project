<script lang="ts">
  import Portal from "./Portal.svelte";

  export let active = true;
  export let onClose = () => {};
</script>

{#if active}
  <Portal target="body">
    <div class="backdrop" on:click={onClose} />
  </Portal>
{/if}

<style lang="scss">
  @import "../../scss/index.scss";
  @import "../../scss/common/backdrop.scss";
</style>
