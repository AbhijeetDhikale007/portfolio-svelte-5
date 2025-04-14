<script lang='ts'>
    import CardPage from "./CardPage.svelte";
    import { SkillInfo } from "../../../store/Store";
</script>

{#each $SkillInfo as item}
    <CardPage
        Title={item.Title}
        Img={item.Img}
        Info={item.Info}
        Url={item.Url}
    />
{/each}