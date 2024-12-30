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
        <Ico class='IcoTitle' name={project.Logo} />
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
        <div class='Tooltip' data-title={project.SVG1}>
            <Ico class='Skills' name={project.SVG1} />
        </div>
        <div class='Tooltip' data-title={project.SVG2}>
            <Ico class='Skills' name={project.SVG2} />
        </div>
        {#if project.SVG3}
        <div class='Tooltip' data-title={project.SVG3}>
            <Ico class='Skills' name={project.SVG3} />
        </div>
        {/if}
        {#if project.SVG4}
        <div class='Tooltip' data-title={project.SVG4}>
            <Ico class='Skills' name={project.SVG4} />
        </div>
        {/if}
        {#if project.SVG5}
        <div class='Tooltip' data-title={project.SVG5}>
            <Ico class='Skills' name={project.SVG5} />
        </div>
        {/if}
        {#if project.SVG6}
        <div class='Tooltip' data-title={project.SVG6}>
            <Ico class='Skills' name={project.SVG6} />
        </div>
        {/if}
        {#if project.SVG7}
        <div class='Tooltip' data-title={project.SVG7}>
            <Ico class='Skills' name={project.SVG7} />
        </div>
        {/if}
        {#if project.SVG8}
        <div class='Tooltip' data-title={project.SVG8}>
            <Ico class='Skills' name={project.SVG8} />
        </div>
        {/if}
        {#if project.SVG9}
        <div class='Tooltip' data-title={project.SVG9}>
            <Ico class='Skills' name={project.SVG9} />
        </div>
        {/if}
        {#if project.SVG10}
        <div class='Tooltip' data-title={project.SVG10}>
            <Ico class='Skills' name={project.SVG10} />
        </div>
        {/if}
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

    .Details {
        @apply font-light;
    }

    .CP0 {
        :global(.IcoTitle) {
            @apply w-15 h-15;
        }
    }

    .CP6 {
        @apply flex gap-x-2 items-center justify-start;
        @apply h-[10vh] w-100%;

        :global(.Skills) {
            border: 1px solid #fff;
            @apply w-5 h-5 p-1.6 rounded-3;
        }
    }
</style>