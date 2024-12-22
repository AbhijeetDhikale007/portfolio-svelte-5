<script lang="ts">
    import { Typewriter } from '../../components/+components';
    import { fly } from 'svelte/transition'
    import { Icons, Profile } from '../../components/+components'
</script>

<div class="Home flex items-center px-5" in:fly={{y: 100, duration: 1000}}>
    <div>
        <h1>Hi,</h1>
        <h1>I'm Abhijeet Dhikale</h1>
        <Typewriter />
        <div class='Buttons-Container'>
            <Icons />
        </div>
    </div>
    <!-- <div class='SVG'> -->
        <Profile />
        <!-- <div>{@html HTMLIcon}</div>
        <div>{@html CSS}</div> -->
    <!-- </div> -->
</div>

<div class='absolute bottom-2 left-2'>
    <h4>Under Development</h4>
</div>

<style lang="scss">
    .Home {
        // border: 2px solid #fff;
        @apply flex flex-col items-center justify-center;
        @apply gap-25 md:gap-0 md:flex-row md:justify-between;
        @apply lg:flex-row lg:justify-between xl:flex-row xl:justify-between 2xl:flex-row 2xl:justify-between;
        @apply w-[74vw] lg:w-[68vw] pointer-events-none;

        h1 {
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
            @apply flex gap-2 py-8 items-center select-none;
        }
    }
</style>