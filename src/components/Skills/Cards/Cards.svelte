<script lang='ts'>
    import VanillaTilt from "vanilla-tilt";
    import { onMount } from "svelte";
    import { PageSkill } from "../../../store/Store"
    import CardPage from "../../../routes/Skills/Pages/CardPage.svelte"

    function UpdateSkillPage(Page: any) {
        $PageSkill = Page
    }

    let TiltCard: HTMLElement;

    onMount(() => {
        VanillaTilt.init(TiltCard, {
            max: 25, // Maximum tilt angle in degrees
            speed: 400, // Speed of the effect
            glare: true, // Enables glare effect
            "max-glare": 0.5, // Maximum opacity for glare
        });
    })

    export let Name: string, Class: string, SVG: string, Alt: string
</script>

<button on:click={() => UpdateSkillPage(CardPage)}>
    <div class='Card' bind:this={TiltCard}>
        <p>{Name}</p>
        <div class={Class}>
            <img src={SVG} alt={Alt}>
        </div>
    </div>
</button>

<style lang='scss'>
    button {
        background-color: transparent;
        border: none;
    }
</style>