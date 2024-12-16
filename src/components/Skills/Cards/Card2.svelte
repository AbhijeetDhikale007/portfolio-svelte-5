<script lang='ts'>
    import { Skill2 } from '../Detail'
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

{#each Skill2 as skills2, index}
  <div class='Card' bind:this={TiltCard[index]}>
    <p>{skills2.name}</p>
    <div class={skills2.class}>
      <img src={skills2.SVG} alt={skills2.Alt}>
    </div>
  </div>
{/each}