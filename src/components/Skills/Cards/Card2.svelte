<script lang='ts'>
    import { Skill2 } from '../../../data/Skills/Detail'
    import Cards from './Cards.svelte';
</script>

{#each Skill2 as skills2}
  <Cards
    Page={skills2.Page}
    Name={skills2.name}
    Class={skills2.class}
    SVG={skills2.SVG}
  />
{/each}