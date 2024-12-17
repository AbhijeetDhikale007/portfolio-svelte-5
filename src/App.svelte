<script lang="ts">
  import { fly } from "svelte/transition";
  import { Header } from "./routes/+pages"
  import { Main } from "./store/Store";
  import Lenis from 'lenis'

  // Initialize Lenis
  const lenis = new Lenis({
    autoRaf: true,
  });
</script>

<header class="fixed top-0 z-2" in:fly={{y: -100, duration: 1000}}>
  <Header />
</header>
<main class='z-1'>
    <svelte:component this={$Main}></svelte:component>
</main>

<style lang='scss'>
    main {
      display: flex;
    }
</style>