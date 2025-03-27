<script lang='ts'>
    export let HeadingTitle: string
</script>

<h1 class='Heading Arsenal-SC'>{HeadingTitle}</h1>

<style lang='scss'>
    .Heading {
        @apply text-center mt-21 mb-3 text-15 font-extrabold;
    }

    .Arsenal-SC {
        font-family: 'Arsenal SC';
    }
</style>