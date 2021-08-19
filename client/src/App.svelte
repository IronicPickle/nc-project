<script lang="ts">
  import Test from "./components/test.svelte";
  import config from "./environments/config";

  export let name: string;

  const socket = new WebSocket(`${config.apiWsUrl}`);

  socket.addEventListener("open", (event) => {
    socket.send("Client to server");
  });

  socket.addEventListener("message", (event) => {
    console.log(event.data);
  });
</script>

<main>
  <h1>Hello {name}!</h1>
  <Test />
</main>

<style lang="scss">
</style>
