<script lang='ts'>
    import { Skill1 } from '../Detail'
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

{#each Skill1 as skills1, index}
  <div class='Card' bind:this={TiltCard[index]}>
    <p>{skills1.name}</p>
    <div class={skills1.class}>
      <img src={skills1.SVG} alt={skills1.Alt}>
    </div>
  </div>
{/each}