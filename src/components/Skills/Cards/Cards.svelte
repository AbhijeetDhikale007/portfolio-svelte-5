<script lang='ts'>
    import VanillaTilt from "vanilla-tilt"
    import { onMount } from "svelte"
    import { PageSkill, SkillInfo } from "../../../store/Store"
    import SkillsInfo from "../../../routes/Skills/Pages/SkillsInfo.svelte"
    import { Ico } from '../../+components'

    function UpdateSkillPage(Page: any) {
        $PageSkill = SkillsInfo
        $SkillInfo = Page
    }

    let TiltCard: HTMLElement;

    onMount(() => {
        const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

        VanillaTilt.init(TiltCard, {
            max: isMobile ? 5 : 25, // Maximum tilt angle in degrees
            perspective: isMobile ? 80 : 280,
            scale: isMobile ? 1.0 : 1.08,
            speed: isMobile ? 80 : 400, // Speed of the effect
            glare: true, // Enables glare effect
            "max-glare": isMobile ? 0.1 : 0.4, // Maximum opacity for glare
            gyroscope: true,
            gyroscopeMinAngleX: -40,
            gyroscopeMaxAngleX: 40,
            gyroscopeMinAngleY: -40,
            gyroscopeMaxAngleY: 40,
        });
    })

    export let Page, Name: string, Class: string, SVG: string
</script>

<button class='Card' on:click={() => UpdateSkillPage(Page)} bind:this={TiltCard}>
        <p class='text-white'>{Name}</p>
        <!-- <div class={Class}> -->
            <Ico class={Class} name={SVG} />
        <!-- </div> -->
</button>

<style lang='scss'>
    button {
        background-color: rgb(100, 100, 100, .05);
        border: none;
    }
</style>