<script lang="ts">
    import { Typewriter } from '../../components/+components';
    import { fly } from 'svelte/transition'
    import { cubicIn } from 'svelte/easing'
    import { Icons, Carousel } from '../../components/+components'
</script>

<div class="Home flex items-center px-5"  in:fly={{ easing: cubicIn, y: 100, duration: 1200 }}>
    <div>
        <h2>Hi,</h2>
        <h1>I'm Abhijeet Dhikale</h1>
        <Typewriter />
        <div class='Buttons-Container'>
            <Icons />
        </div>
    </div>
    <Carousel />
</div>

<style lang="scss">
    .Home {
        // border: 2px solid #fff;
        @apply flex flex-col items-center justify-center;
        @apply gap-12 md:gap-0 md:flex-row md:justify-between;
        @apply lg:flex-row lg:justify-between xl:flex-row xl:justify-between 2xl:flex-row 2xl:justify-between;
        @apply w-[74vw] lg:w-[68vw] pointer-events-none;

        h1, h2 {
            @apply text-10 md:text-12 lg:text-16 font-bold;
            // background-image: url('Background.jpg');
            // background: cover;
            // -webkit-text-fill-color: transparent;
            // -webkit-background-clip: text;
            // background-clip: text;
        }

        // .SVG {
        //     @apply flex w-27 h-27;
        // }

        .Buttons-Container {
            @apply flex gap-2 mt-8 items-center select-none;

            :global(.Ico) {
                filter:invert(1);
            }
        }
    }
</style>