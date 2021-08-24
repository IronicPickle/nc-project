<script>
  import Divider from "../common/Divider.svelte";
  import IoIosLogIn from "svelte-icons/io/IoIosLogIn.svelte";
  import IoIosLogOut from "svelte-icons/io/IoIosLogOut.svelte";
  import IoIosArrowDropup from "svelte-icons/io/IoIosArrowDropup.svelte";
  import Login from "../modals/Login.svelte";
  import Register from "../modals/Register.svelte";
  import { getContext } from "svelte";

  const user = getContext("user");

  let loginModalState = true;
  let registerModalState = false;
</script>

<div class="nav-drawer">
  <header>
    <Divider />
    <h1>Quick Chat</h1>
    <Divider />
  </header>
  <div class="nav-options">
    {#if user}
      <button class="nav-option">
        <div class="nav-icon"><IoIosLogOut /></div>
        <p>Logout</p>
      </button>
      <button class="nav-option">
        <div class="nav-icon"><IoIosArrowDropup /></div>
        <p>Register</p>
      </button>
    {:else}
      <button class="nav-option" on:click={() => (loginModalState = true)}>
        <div class="nav-icon"><IoIosLogIn /></div>
        <p>Login</p>
      </button>
    {/if}
  </div>

  <Login active={loginModalState} onClose={() => (loginModalState = false)} />
  <Register
    active={registerModalState}
    onClose={() => (loginModalState = false)}
  />

  <p class="copyright">
    Copyright © 2021<br />Nathan Rath.<br />All Rights Reserved.
  </p>
</div>

<style lang="scss">
  @import "src/scss/index.scss";
  @import "src/scss/layout/navDrawer.scss";
</style>
