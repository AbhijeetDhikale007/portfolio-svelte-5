<script lang='ts'>
    import { Skill2 } from '../Detail'
    import Cards from './Cards.svelte';
</script>

{#each Skill2 as skills2}
  <Cards
    Name={skills2.name}
    Class={skills2.class}
    SVG={skills2.SVG}
    Alt={skills2.Alt}
  />
{/each}