<script lang='ts'>
    import VanillaTilt from "vanilla-tilt";
    import { onMount } from "svelte";

    let TiltCard: HTMLElement;

    onMount(() => {
        VanillaTilt.init(TiltCard, {
            max: 25, // Maximum tilt angle in degrees
            speed: 400, // Speed of the effect
            glare: true, // Enables glare effect
            "max-glare": 0.5, // Maximum opacity for glare
        });
    })

    export let Name, Class, SVG, Alt
</script>

<div class='Card' bind:this={TiltCard}>
    <p>{Name}</p>
    <div class={Class}>
      <img src={SVG} alt={Alt}>
    </div>
</div>