<script lang='ts'>
  import { Skill5 } from '../Detail'
  import Cards from './Cards.svelte';
</script>

{#each Skill5 as skills5}
<Cards
  Page={skills5.Page}
  Name={skills5.name}
  Class={skills5.class}
  SVG={skills5.SVG}
  Alt={skills5.Alt}
/>
{/each}