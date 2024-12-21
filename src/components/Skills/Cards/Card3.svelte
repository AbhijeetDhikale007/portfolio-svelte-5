<script lang='ts'>
  import { Skill3 } from '../../../data/Skills/Detail'
  import Cards from './Cards.svelte';
</script>

{#each Skill3 as skills3}
  <Cards
    Page={skills3.Page}
    Name={skills3.name}
    Class={skills3.class}
    SVG={skills3.SVG}
    Alt={skills3.Alt}
  />
{/each}