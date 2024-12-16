<script lang=ts>
    import Project from './Project-Card.svelte';
    import { P2 } from './Projects'
</script>

{#each P2 as p2}
    <Project
    Logo='Icons/Svelte.svg'
    name={p2.name}
    Type={p2.Type}
    urlGit={p2.urlGit}
    urlDeploy={p2.urlDeploy}
    Duration={p2.Duration}
    Details={p2.Details}
    From={p2.From}
    To={p2.To}>
        <img slot='SVG1' class='SVG' src="Icons/Svelte.svg" alt="Svelte">
        <img slot='SVG2' class='SVG' src="Icons/Threejs.svg" alt="Threejs">
    </Project>
{/each}

<style lang='scss'>
    .SVG {
        border: 1px solid #fff;
        @apply w-5.6 h-5.6 p-1.6 rounded-3;
    }
</style>