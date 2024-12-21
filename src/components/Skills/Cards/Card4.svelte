<script lang='ts'>
  import { Skill4 } from '../../../data/Skills/Detail'
  import Cards from './Cards.svelte';
</script>

{#each Skill4 as skills4}
  <Cards
    Page={skills4.Page}
    Name={skills4.name}
    Class={skills4.class}
    SVG={skills4.SVG}
    Alt={skills4.Alt}
  />
{/each}