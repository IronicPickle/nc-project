<script lang="ts">
  import Input from "../form/Input.svelte";
  import Modal from "./Modal.svelte";

  export let active = false;
  export let onClose = () => {};

  let username = "";
  let password = "";

  const onSubmit = (event: Event) => {
    event.preventDefault();
  };
</script>

<Modal {active} {onClose}>
  <div class="login">
    <h1 class="title">Login</h1>
    <form on:submit={onSubmit}>
      <Input bind:value={username} placeholder="Username" />
      <Input bind:value={password} placeholder="Password" />
    </form>
  </div>
</Modal>

<style lang="scss">
  @import "src/scss/index.scss";
  @import "src/scss/modals/login.scss";
</style>
