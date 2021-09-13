<script lang="ts">
  import Backdrop from "../common/Backdrop.svelte";
  import Portal from "../common/Portal.svelte";

  export let active = false;
  export let onClose = () => {};

  // your script goes here
</script>

{#if active}
  <Backdrop active={true} {onClose} />
  <Portal target="body" class={`modal ${$$props.class}`}>
    <slot />
  </Portal>
{/if}

<style lang="scss">
  @import "../../scss/index.scss";
  @import "../../scss/modals/modal.scss";
</style>
