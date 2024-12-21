<script lang='ts'>
  import { Skill6 } from '../../../data/Skills/Detail'
  import Cards from './Cards.svelte';
</script>

{#each Skill6 as skills6}
<Cards
Page={skills6.Page}
Name={skills6.name}
  Class={skills6.class}
  SVG={skills6.SVG}
  Alt={skills6.Alt}
/>
{/each}