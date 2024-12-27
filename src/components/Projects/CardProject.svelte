<script lang=ts>
    import { onMount } from "svelte"
    import { Project } from '../../data/Projects'
    import { Ico } from '../+components'
    import VanillaTilt from "vanilla-tilt"

    let TiltCard: HTMLElement[] = [];

    onMount(() => {
    TiltCard.forEach((card: HTMLElement) => {
      VanillaTilt.init(card, {
        max: 8,
        speed: 80,
        glare: true,
        "max-glare": 0.1,
        gyroscope: true,
        gyroscopeMinAngleX: -18,
        gyroscopeMaxAngleX: 18,
        gyroscopeMinAngleY: -18,
        gyroscopeMaxAngleY: 18,
      });
    });
  });
</script>

{#each Project as project, index}
<div class="CardProject" bind:this={TiltCard[index]}>
    <div class="CP0">
        <img src={project.Logo} alt="Project Logo">
    </div>
    <div class='CP1'>
        <h2>{project.Title}</h2>
        <div class='CP1Div'>
            <a class='Tooltip' data-title='GitHub' href={project.urlGit} target='_blank'>
                <Ico name='GitHubW' />
            </a>
            <a class='Tooltip' data-title='Deployment' href={project.urlDeploy} target='_blank'>
                <Ico name='Link' />
            </a>
        </div>
    </div>
    <hr>
    <div class='CP2'>
        <Ico name='Project' class='Ico' />
        <h4>{project.Type}</h4>
    </div>
    <hr>
    <div class="CP3">
        <Ico name='Time' class='Ico' />
        <h4>{project.Duration}</h4>
    </div>
    <hr>
    <div class="CP4">
        <h4 class='Details'>{project.Details}</h4>
    </div>
    <div class="CP5">
        <div><p>{project.From}</p></div>
        <div><p>{project.To}</p></div>
    </div>
    <hr>
    <div class="CP6">
        <img class='Skills' src={project.SVG1} />
        <img class='Skills' src={project.SVG2} />
        {#if project.SVG3}<img class='Skills' src={project.SVG3} />{/if}
        {#if project.SVG4}<img class='Skills' src={project.SVG4} />{/if}
        {#if project.SVG5}<img class='Skills' src={project.SVG5} />{/if}
        {#if project.SVG6}<img class='Skills' src={project.SVG6} />{/if}
        {#if project.SVG7}<img class='Skills' src={project.SVG7} />{/if}
        {#if project.SVG8}<img class='Skills' src={project.SVG8} />{/if}
        {#if project.SVG9}<img class='Skills' src={project.SVG9} />{/if}
        {#if project.SVG10}<img class='Skills' src={project.SVG10} />{/if}
    </div>
</div>
{/each}

<style lang='scss'>
    .CardProject {
        a {
            @apply w-5 h-5 flex content-center;
        }

        :global(.Ico) {
            @apply w-5 h-5;
        }
    }

    .SVG {
        @apply w-4.8 h-4.8;
    }

    .Details {
        @apply font-light;
    }

    .Skills {
        border: 1px solid #fff;
        @apply w-5.6 h-5.6 p-1.6 rounded-3;
    }
</style>