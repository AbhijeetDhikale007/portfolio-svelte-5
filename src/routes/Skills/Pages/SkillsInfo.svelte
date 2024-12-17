<script lang='ts'>
    import CardPage from "./CardPage.svelte";
    import { PageSkill } from "../../../store/Store";
    import { HTML, CSS } from "./PagesInfo"
</script>

{#each $PageSkill as item}
    <CardPage
        Title={item.Title}
        Img={item.Img}
        Alt={item.Alt}
        Info={item.Info}
    />
{/each}