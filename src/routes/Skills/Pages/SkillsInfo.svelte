<script lang='ts'>
    import CardPage from "./CardPage.svelte";
    import { SkillInfo } from "../../../store/Store";
    import { C, CPlus, TypeScript, JavaScript, HTML, CSS, SCSS, UnoCSS, TailwindCSS, Bootstrap, WordPress, Webflow, Svelte, React, Angular, Threejs, MySQL, Postman, VSCode, GitHub, ProjectIDX, Eclipse, IntelliJ } from "../../../data/Skills/SkillsPages"
</script>

{#each $SkillInfo as item}
    <CardPage
        Title={item.Title}
        Img={item.Img}
        Info={item.Info}
        Url={item.Url}
    />
{/each}