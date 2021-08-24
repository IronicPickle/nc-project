<script lang="ts">
  import {setContext} from "svelte";

  import NavDrawer from "./components/layout/NavDrawer.svelte";
  import Main from "./components/Main.svelte";

  setContext("user", null);
</script>

<main>
  <NavDrawer />
  <Main />
</main>

<style lang="scss">
</style>
