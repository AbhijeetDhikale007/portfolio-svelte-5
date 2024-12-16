<script lang=ts>
    import { onMount } from "svelte"
    import VanillaTilt from "vanilla-tilt"

    export let Logo, name, urlGit, urlDeploy, Type, Duration, Details, From, To;

    let TiltCard: HTMLElement;

    onMount(() => {
    // Initialize VanillaTilt on all matching elements
    VanillaTilt.init(TiltCard, {
      max: 8,
      speed: 100,
      glare: true,
      "max-glare": 0.1,
      gyroscope: true,
      gyroscopeMinAngleX: -18,
      gyroscopeMaxAngleX: 18,
      gyroscopeMinAngleY: -18,
      gyroscopeMaxAngleY: 18,
    });
  });
</script>

<div class="CardProject" bind:this={TiltCard}>
    <div class="CP0">
        <img src={Logo} alt="Project Logo">
    </div>
    <div class='CP1'>
        <h2>{name}</h2>
        <div class='CP1Div'>
            <a class='Tooltip' data-title='GitHub' href={urlGit} target='_blank'><img src="Icons/GitHub-white.svg" alt="Link"></a>
            <a class='Tooltip' data-title='Deployment' href={urlDeploy} target='_blank'><img src="Icons/Link.svg" alt="Link"></a>
        </div>
    </div>
    <hr>
    <div class='CP2'>
        <img class='SVG' src="Icons/Project-Type.svg" alt="Icon">
        <h4>{Type}</h4>
    </div>
    <hr>
    <div class="CP3">
        <img class='SVG' src="Icons/Time.svg" alt="Duration">
        <h4>{Duration}</h4>
    </div>
    <hr>
    <div class="CP4">
        <h4 class='Details'>{Details}</h4>
    </div>
    <div class="CP5">
        <div><p>{From}</p></div>
        <div><p>{To}</p></div>
    </div>
    <hr>
    <div class="CP6">
        <slot name='SVG1' />
        <slot name='SVG2' />
        <slot name='SVG3' />
        <slot name='SVG4' />
        <slot name='SVG5' />
        <slot name='SVG6' />
        <slot name='SVG7' />
        <slot name='SVG8' />
        <slot name='SVG9' />
        <slot name='SVG10' />
    </div>
</div>

<style lang='scss'>
    .SVG {
        @apply w-4.8 h-4.8;
    }

    .Details {
        @apply font-light;
    }
</style>