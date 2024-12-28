<script lang='ts'>
  import { Skill7 } from '../../../data/Skills/Detail'
  import Cards from './Cards.svelte';
</script>

{#each Skill7 as skills7}
  <Cards
  Page={skills7.Page}
    Name={skills7.name}
    Class={skills7.class}
    SVG={skills7.SVG}
  />
{/each}