<script lang='ts'>
    import { Skill4 } from '../Detail'
    import VanillaTilt from "vanilla-tilt";
    import { onMount } from "svelte";

    let TiltCard: HTMLElement[] = [];

    onMount(() => {
      TiltCard.forEach((card) => {
      VanillaTilt.init(card, {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.1,
        gyroscope: true,
        gyroscopeMinAngleX: -25,
        gyroscopeMaxAngleX: 25,
        gyroscopeMinAngleY: -25,
        gyroscopeMaxAngleY: 25,
      });
    });
  });
</script>

{#each Skill4 as skills4, index}
  <div class='Card' bind:this={TiltCard[index]}>
    <p>{skills4.name}</p>
    <div class={skills4.class}>
      <img src={skills4.SVG} alt={skills4.Alt}>
    </div>
  </div>
{/each}