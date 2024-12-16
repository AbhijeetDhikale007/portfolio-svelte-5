<script lang='ts'>
    import { Skill5 } from '../Detail'
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

{#each Skill5 as skills5, index}
  <div class='Card' bind:this={TiltCard[index]}>
    <p>{skills5.name}</p>
    <div class={skills5.class}>
      <img src={skills5.SVG} alt={skills5.Alt}>
    </div>
  </div>
{/each}