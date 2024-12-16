<script lang='ts'>
    import HR from "./HR.svelte";
    export let HRName:String
</script>

<div class='CardDiv'>
    <div>
        <HR HRname={HRName} />
    </div>
    <div class="container">
        <slot name="Wrapper"></slot>
    </div>
</div>

<style lang="scss">
    .CardDiv {
        @apply flex flex-col justify-center;
        /* border: 2px solid #fff; */
    }

    :global([slot="Wrapper"]) {
        @apply w-fit flex flex-wrap;
        @apply gap-6 justify-center;
    }

    .container {
        // border: 2px solid #fff;
        @apply flex flex-wrap items-center justify-center;
        @apply gap-10 mt-5 mb-13;
    }
</style>