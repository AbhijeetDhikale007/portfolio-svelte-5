<script lang='ts'>
  import { Skill3 } from '../Detail'
  import Cards from './Cards.svelte';
</script>

{#each Skill3 as skills3}
  <Cards
    Name={skills3.name}
    Class={skills3.class}
    SVG={skills3.SVG}
    Alt={skills3.Alt}
  />
{/each}