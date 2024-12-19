<script lang='ts'>
    import { fly } from "svelte/transition";
    import { Heading } from "../../components/+components";
</script>

<div class='Resume' in:fly={{y: 100, duration: 1000}}>
    <Heading HeadingTitle='Resume' />
    <div class='Wrapper'>
        <div class='Buttons-Div'>
            <a class='Button' href="Documents/Abhijeet-Prakash-Dhikale-Resume.pdf" target="_blank" type='file/pdf'>View</a>
            <a class='Button' href="Documents/Abhijeet-Prakash-Dhikale-Resume.pdf" target="_blank" type='file/pdf' download>Download</a>
        </div>
        <div>
            <!-- <img src="Icons/Resume.svg" alt="Resume"> -->
            <iframe id='Resume' src="Documents/Abhijeet-Prakash-Dhikale-Resume.pdf" title="Resume PDF" frameborder="1" loading='eager'></iframe>
        </div>
    </div>
</div>

<style lang='scss'>
    .Resume {
        @apply flex flex-col justify-center items-center shrink-1 grow-1;
        @apply w-[80vw] h-[80vh];
        @apply md:w-[70vw] md:h-[74vh];
        @apply lg:w-[99vw] lg:h-[82vh];
        @apply xl:w-[80vw] xl:h-[80vh];
        border: 2px solid #fff;

        .Wrapper {
            @apply items-center justify-center;
            @apply flex flex-col md:flex-row lg:flex-col xl:flex-col 2xl:flex-col;
            @apply mt-16 h-100% w-100%;
            // border: 2px solid red;

            div {
                @apply w-50% flex justify-center items-center;
            }

            .Buttons-Div {
                @apply flex flex-col gap-6;
            }
        }
    }

    // img {
    //     @apply flex rounded-4 w-60% h-60% border-none;
    // }

    .Button {
        border: 1px solid rgb(255, 255, 255, .5);
        @apply md:text-4.5 md:p-3;
    }
</style>