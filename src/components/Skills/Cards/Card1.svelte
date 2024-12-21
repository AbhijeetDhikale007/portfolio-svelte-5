<script lang='ts'>
    import { Skill1 } from '../../../data/Skills/Detail'
    import Cards from './Cards.svelte';
</script>

{#each Skill1 as skills1}
  <Cards
    Page={skills1.Page}
    Name={skills1.name}
    Class={skills1.class}
    SVG={skills1.SVG}
    Alt={skills1.Alt}
  />
{/each}