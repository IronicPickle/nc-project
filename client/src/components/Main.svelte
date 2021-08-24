<script lang="ts">
  let user = null;
</script>

<div class="main">
  <h2 class="title">Welcome to Quick Chat</h2>
  <h3 class="sub-title">
    {#if user == null}
      Log in or Register to start chatting
    {:else}
      Enjoy your stay
    {/if}
  </h3>
</div>

<style lang="scss">
  @import "src/scss/index.scss";
  @import "src/scss/main.scss";
</style>
