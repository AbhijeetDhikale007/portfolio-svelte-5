<script lang="ts">
    import { icons } from './Icons'

    export let name: keyof typeof icons
    let xmlns: string = 'http://www.w3.org/2000/svg'
    let width: string = '100%'
    let height: string = '100%'
    let displayIcon = icons[name];
</script>

<svg
    class={$$props.class}
    {xmlns}
    {width}
    {height}
    viewBox={displayIcon.viewBox}>{@html displayIcon.svg}
</svg>