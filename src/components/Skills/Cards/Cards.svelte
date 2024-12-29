<script lang='ts'>
    import VanillaTilt from "vanilla-tilt";
    import { onMount } from "svelte";
    import { PageSkill, SkillInfo } from "../../../store/Store"
    import SkillsInfo from "../../../routes/Skills/Pages/SkillsInfo.svelte"
    import { Ico } from '../../+components'

    function UpdateSkillPage(Page: any) {
        $PageSkill = SkillsInfo
        $SkillInfo = Page
    }

    let TiltCard: HTMLElement;

    onMount(() => {
        VanillaTilt.init(TiltCard, {
            max: 25, // Maximum tilt angle in degrees
            perspective: 280,
            scale: 1.08,
            speed: 400, // Speed of the effect
            glare: true, // Enables glare effect
            "max-glare": 0.5, // Maximum opacity for glare
            gyroscope: true,
            gyroscopeMinAngleX: -18,
            gyroscopeMaxAngleX: 18,
            gyroscopeMinAngleY: -18,
            gyroscopeMaxAngleY: 18,
        });
    })

    export let Page, Name: string, Class: string, SVG: string
</script>

<button class='Card' on:click={() => UpdateSkillPage(Page)} bind:this={TiltCard}>
        <p>{Name}</p>
        <div class={Class}>
            <Ico name={SVG} />
        </div>
</button>

<style lang='scss'>
    button {
        background-color: rgb(100, 100, 100, .05);
        border: none;
    }
</style>