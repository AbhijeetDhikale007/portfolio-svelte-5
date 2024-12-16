<script lang=ts>
    import { fly } from 'svelte/transition'
    import { Heading } from '../../components/+components';
    import { P1, P2 } from '../../components/+components'
    import './Projects.scss'
</script>

<div class='Projects' in:fly={{x: 100, duration: 1000}}>
    <Heading HeadingTitle='Projects' />
    <div class='Pro'>
        <P1 />
        <P2 />
    </div>
</div>

<style lang='scss'>
    .Projects {
        .Pro {
            @apply flex flex-wrap justify-center items-center;
            @apply gap-15 md:gap-10 lg:gap-8 py-10 mt--2;
        }
    }
</style>