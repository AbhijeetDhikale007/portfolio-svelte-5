<script lang='ts'>
    import { Skill6 } from '../Detail'
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

{#each Skill6 as skills6, index}
  <div class='Card' bind:this={TiltCard[index]}>
    <p>{skills6.name}</p>
    <div class={skills6.class}>
      <img src={skills6.SVG} alt={skills6.Alt}>
    </div>
  </div>
{/each}