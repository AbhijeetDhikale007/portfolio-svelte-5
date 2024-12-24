<script lang=ts>
    import { fly } from 'svelte/transition'
    import { Heading } from '../../components/+components';
    import { CardProject } from '../../components/+components';
    import './Projects.scss'
</script>

<div class='Projects' in:fly={{x: 100, duration: 1000}}>
    <Heading HeadingTitle='Projects' />
    <div class='Pro'>
        <CardProject />
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