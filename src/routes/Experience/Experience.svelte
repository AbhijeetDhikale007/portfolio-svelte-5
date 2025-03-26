<script lang='ts'>
    import { fly } from 'svelte/transition'
    import { cubicIn } from 'svelte/easing'
    import { Heading } from '../../components/+components';
    import { ExperienceCard as Card } from '../../components/+components';
</script>

<div class='Experience'  in:fly={{ easing: cubicIn, y: 100, duration: 1200 }}>
    <Heading HeadingTitle='Experience' />
    <div class='EduDivWrap'>
        <div class='HR'></div>
        <div class="EduDiv">
            <Card />
        </div>
    </div>
</div>

<style lang='scss'>
    .Experience {
        .EduDivWrap {
            @apply relative flex mt-10 mb-20;
        }

        .EduDiv {
            @apply w-[88vw] h-fit;
            @apply flex flex-col shrink-1 gap-y-20;
        }

        .HR {
            border-left: .1px solid rgb(255, 255, 255, 0.4);
            @apply justify-self-center self-center w-0 h-100% absolute inset-0 ml-50% mr-50%;
            @apply hidden md:block lg:block xl:block 2xl:block z--1 shrink-1 grow-1;
        }
    }
</style>