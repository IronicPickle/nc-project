<script lang="ts">
  import { onDestroy, onMount } from "svelte";

  export let target: string;

  let childrenRef: HTMLDivElement;

  onMount(() => {
    const targetElement = document.querySelector<HTMLElement | null>(target);
    if (targetElement == null) throw `No element matches ${target}`;

    targetElement.appendChild(childrenRef);
  });
</script>

<div bind:this={childrenRef} {...$$props}>
  <slot />
</div>
