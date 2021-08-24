<script lang="ts">
  import Modal from "./Modal.svelte";

  export let active = false;
  export let onClose = () => {};
</script>

<Modal {active} {onClose}>
  <div class="register"><h1 class="title">Register</h1></div>
</Modal>

<style lang="scss">
  @import "src/scss/index.scss";
  @import "src/scss/modals/register.scss";
</style>
