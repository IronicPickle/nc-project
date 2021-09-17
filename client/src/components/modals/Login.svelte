<script lang="ts">
  import type { Login } from "../../../../common/apiSchemas/auth";

  import type { ErrorRes } from "../../../../common/apiSchemas/utils";

  import { auth, isAxiosError } from "../../utils/api";

  import Button from "../form/Button.svelte";
  import Input from "../form/Input.svelte";
  import Modal from "./Modal.svelte";

  export let active = false;
  export let onClose = () => {};

  let username = "";
  let password = "";

  const onSubmit = async (event: Event) => {
    event.preventDefault();
    try {
      const res = await auth.login({ username, password });
      onClose();
    } catch (err: unknown) {
      if (isAxiosError<ErrorRes<Login>>(err)) {
        alert(err.response.data.msg);
      }
    }
  };
</script>

<Modal {active} {onClose}>
  <div class="login">
    <h1 class="title">Login</h1>
    <form on:submit={onSubmit}>
      <div class="fields">
        <Input bind:value={username} placeholder="Username" />
        <Input bind:value={password} placeholder="Password" />
      </div>

      <div class="buttons">
        <Button type="submit">Submit</Button>
        <Button onClick={onClose}>Cancel</Button>
      </div>
    </form>
  </div>
</Modal>

<style lang="scss">
  @import "../../scss/index.scss";
  @import "../../scss/modals/login.scss";
</style>
