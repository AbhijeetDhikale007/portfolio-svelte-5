<script lang='ts'>
    import { Skill7 } from '../Detail'
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

{#each Skill7 as skills7, index}
  <div class='Card' bind:this={TiltCard[index]}>
    <p>{skills7.name}</p>
    <div class={skills7.class}>
      <img src={skills7.SVG} alt={skills7.Alt}>
    </div>
  </div>
{/each}