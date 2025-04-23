<script lang='ts'>
    export let HeadingTitle: string
</script>

<h1 class='Heading Arsenal-SC'>{HeadingTitle}</h1>

<style lang='scss'>
    .Heading {
        color: #adada9; 
        background-image: linear-gradient(0deg, #adada9 0%, #FFFFFF 100%); 
        background-clip: text; 
        -webkit-background-clip: text; 
        -webkit-text-fill-color: transparent; 
        @apply text-center mt-21 mb-3 text-15 font-extrabold;
    }

    .Arsenal-SC {
        font-family: 'Arsenal SC';
    }
</style>