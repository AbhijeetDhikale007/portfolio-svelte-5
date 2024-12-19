<script lang='ts'>
    import { fly } from "svelte/transition";
    import { Heading } from "../../components/+components";
</script>

<!-- <div class='Resume' in:fly={{y: 100, duration: 1000}}>
    <Heading HeadingTitle='Resume' />
    <div class='Wrapper'>
        <div class='Buttons-Div'>
            <a class='Button' href="Documents/Abhijeet-Prakash-Dhikale-Resume.pdf" target="_blank" type='file/pdf'>View</a>
            <a class='Button' href="Documents/Abhijeet-Prakash-Dhikale-Resume.pdf" target="_blank" type='file/pdf' download>Download</a>
        </div>
        <div class='frame'> -->
            <!-- <img src="Icons/Resume.svg" alt="Resume"> -->
            <!-- <iframe class='Resume-frame' src="Documents/Abhijeet-Prakash-Dhikale-Resume.pdf" title="Resume PDF" frameborder="1" loading='eager'></iframe>
        </div>
    </div>
</div> -->

<!-- <style lang='scss'>
    .Resume {
        @apply flex flex-col justify-center items-center shrink-1 grow-1;
        @apply w-[80vw] h-[80vh];
        @apply md:w-[70vw] md:h-[74vh];
        @apply lg:w-[99vw] lg:h-[100vh];
        @apply xl:w-[80vw] xl:h-[80vh];
        border: 2px solid #fff; -->

        <!-- .Wrapper {
            @apply items-center justify-center;
            @apply flex flex-col md:flex-row lg:flex-col xl:flex-col 2xl:flex-col;
            @apply mt-2 h-100% w-100%; -->
            <!-- // border: 2px solid red; -->

            <!-- div {
                @apply w-50% flex justify-center items-center;
            } -->

            <!-- .Buttons-Div {
                @apply flex flex-row gap-6;
            }
        } -->

        <!-- .frame {
            @apply mt-10 w-[100vw];
            border: 1px solid red;

            .Resume-frame {
                @apply w-[85vw] h-70;
            }
        }
    } -->

    <!-- // img {
    //     @apply flex rounded-4 w-60% h-60% border-none;
    // }

    .Button {
        border: 1px solid rgb(255, 255, 255, .5);
        @apply md:text-4.5 md:p-3;
    }
</style> -->

<div class='Resume' in:fly={{y: 100, duration: 1000}}>
    <Heading HeadingTitle='Resume' />
    <div class='Buttons-Div'>
        <a class='Button-white' href="Documents/Abhijeet-Prakash-Dhikale-Resume.pdf" target="_blank" type='file/pdf'>View</a>
        <a class='Button-white' href="Documents/Abhijeet-Prakash-Dhikale-Resume.pdf" target="_blank" type='file/pdf' download>Download</a>
    </div>
    <div class='frame'>
        <iframe class='Resume-frame' src="Documents/Abhijeet-Prakash-Dhikale-Resume.pdf" title="Resume PDF" loading='eager'></iframe>
    </div>
</div>

<style lang='scss'>
    .Resume {
        @apply flex flex-col items-center gap-6;

        .Buttons-Div {
            @apply flex gap-8;
        }

        .Button-white {
            padding: 8px 14px;
            transition: .5s;
            @apply bg-white border-none rounded-2 text-4.1 cursor-pointer text-black font-500 no-underline select-none;
        }

        .Button-white:hover {
            color: #fff;
            scale: 1.2;
            background: #000;
        }

        .Button-white:focus {
            color: rgb(0, 250, 250);
            border-bottom: .5px solid rgb(0, 250, 250);
        }

        .frame {
            @apply mt-4 mb-8 grow-1 shrink-1;
            @apply w-[80vw] h-[56vh];
            @apply md:w-[76vw] md:h-48;
            @apply lg:w-250 lg:h-[48vh];
            @apply xl:w-[80vw] xl:h-[48vh];
            @apply 2xl:w-[80vw] xl:h-[48vh];

            .Resume-frame {
                @apply w-100% h-100% border-none;
            }
        }
    }
</style>