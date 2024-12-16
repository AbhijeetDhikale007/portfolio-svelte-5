<script lang='ts'>
    import { Skill1 } from '../Detail'
    import Cards from './Cards.svelte';
</script>

<!-- {#each Skill1 as skills1, index}
  <div class='Card' bind:this={TiltCard[index]}>
    <p>{skills1.name}</p>
    <div class={skills1.class}>
      <img src={skills1.SVG} alt={skills1.Alt}>
    </div>
  </div>
{/each} -->

{#each Skill1 as skills1}
  <Cards
    Name={skills1.name}
    Class={skills1.class}
    SVG={skills1.SVG}
    Alt={skills1.Alt}
  />
{/each}