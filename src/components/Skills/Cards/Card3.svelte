<script lang='ts'>
    import { Skill3 } from '../Detail'
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

{#each Skill3 as skills3, index}
  <div class='Card' bind:this={TiltCard[index]}>
    <p>{skills3.name}</p>
    <div class={skills3.class}>
      <img src={skills3.SVG} alt={skills3.Alt}>
    </div>
  </div>
{/each}