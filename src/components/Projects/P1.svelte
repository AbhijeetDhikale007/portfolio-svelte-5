<script lang=ts>
    import Project from './Project-Card.svelte';
    import { P1 } from './Projects'
</script>

{#each P1 as p1}
    <Project
    Logo='Icons/React.svg'
    name={p1.name}
    urlGit={p1.urlGit}
    urlDeploy={p1.urlDeploy}
    Type={p1.Type}
    Duration={p1.Duration}
    Details={p1.Details}
    From={p1.From}
    To={p1.To}>
        <img slot='SVG1' class='SVG' src="Icons/React.svg" alt="React">
        <img slot='SVG2' class='SVG' src="Icons/Threejs.svg" alt="Threejs">
    </Project>
{/each}

<style lang='scss'>
    .SVG {
        border: 1px solid #fff;
        @apply w-5.6 h-5.6 p-1.6 rounded-3;
    }
</style>