<script lang="ts">
  import { fly } from "svelte/transition";
  import { Header, Home, Skills, Projects, Education, Resume } from "./routes/+pages"
  import { Main } from "./store/Main";
  import Lenis from 'lenis'

  // Initialize Lenis
  const lenis = new Lenis({
    autoRaf: true,
  });

  // let Main = Home

  function Routing(Name: any) {
    $Main = Name
  }
</script>

<header class="fixed top-0 z-2" in:fly={{y: -100, duration: 1000}}>
  <Header>
    <div slot='Div1' class='Menu-Buttons-1'>
      <div class="Button-Black">
        <img src="Icons/Header/Home.svg" alt="Home">
        <button on:click={() => (Routing(Home))}>Home</button>
      </div>
      <div class="Button-Black">
        <img class='SVG' src="Icons/Header/Skills.svg" alt="Skills">
        <button on:click={() => (Routing(Skills))}>Skills</button>
      </div>
      <div class="Button-Black">
        <img class='SVG' src="Icons/Header/Projects.svg" alt="Skills">
        <button on:click={() => (Routing(Projects))}>Projects</button>
      </div>
      <div class="Button-Black">
        <img class='SVG' src="Icons/Header/Education.svg" alt="Skills">
        <button on:click={() => (Routing(Education))}>Education</button>
      </div>
      <div class="Button-Black">
        <img class='SVG' src="Icons/Header/Resume.svg" alt="Skills">
        <button on:click={() => (Routing(Resume))}>Resume</button>
      </div>
    </div>
    <div slot='Div2' class='Menu-Buttons-2'>
      <button class='Button' on:click={() => (Routing(Home))}>Home</button>
      <button class='Button' on:click={() => (Routing(Skills))}>Skills</button>
      <button class='Button' on:click={() => (Routing(Projects))}>Projects</button>
      <button class='Button' on:click={() => (Routing(Education))}>Education</button>
      <button class='Button' on:click={() => (Routing(Resume))}>Resume</button>
    </div>
  </Header>
</header>
<main class='z-1'>
  <svelte:component this={$Main}></svelte:component>
</main>

<style lang='scss'>
  main {
    display: flex;
  }

  img {
    @apply h-6 w-6;
  }
</style>