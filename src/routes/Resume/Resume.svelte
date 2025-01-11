<script lang='ts'>
    import { fly } from 'svelte/transition'
    import { Heading } from '../../components/+components'
</script>

<div class='Resume' in:fly={{y: 100, duration: 1000}}>
    <Heading HeadingTitle='Resume' />
    <div class='Buttons-Div'>
        <a class='Button-white' href="Documents/Abhijeet-Prakash-Dhikale-Resume.pdf" target="_blank" type='file/pdf'>View</a>
        <a class='Button-white' href="Documents/Abhijeet-Prakash-Dhikale-Resume.pdf" target="_blank" type='file/pdf' download>Download</a>
    </div>
    <div class='frame'>
        <iframe class='Resume-frame' src="Documents/Abhijeet-Prakash-Dhikale-Resume.pdf#view=max" title="Resume PDF" loading='eager'></iframe>
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
            @apply lg:w-[76vw] lg:h-[48vh];
            @apply xl:w-[76vw] xl:h-[48vh];
            @apply 2xl:w-[76vw] xl:h-[48vh];

            .Resume-frame {
                @apply w-100% h-100% border-none;
            }
        }
    }
</style>