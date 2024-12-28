<script lang='ts'>
    import { PageSkill } from "../../../store/Store";
    import Skills from "../Skills.svelte"
    import { Ico } from '../../../components/+components'

    function Back(){
        $PageSkill = Skills
    }

    export let Title: string, Img: string, Info: string, Url: string
</script>

<div class='CardPage'>
    <div class='Heading'>
        <div class='Title'>
            <h3>{Title}</h3>
        </div>
        <div class='HeadingIcon'>
            <Ico name={Img} />
        </div>
    </div>
    <hr>
    <div class='Info'>
        <pre>{Info}</pre>
    </div>
    <hr>
    <div class='ButtonDiv'>
        <a href={Url}>{Title}</a>
        <button on:click={Back}><Ico name='Back' /></button>
    </div>
</div>

<style lang='scss'>
    .CardPage {
        @apply flex flex-col;
        @apply mt-18 w-[88vw];
        @apply lg:mt-15 lg:w-[70vw];
        @apply xl:mt-15 xl:w-[80vw];
        @apply 2xl:mt-15 2xl:w-[80vw];
        // border: 1px solid red;

        .Heading {
            // border: 1px solid #fff;
            @apply grid justify-around overflow-hidden;
            @apply h-32 w-100%;
            @apply lg:h-75;
            @apply xl:h-75;
            @apply 2xl:h-75;
        }

        hr {
            border: none;
            border-bottom: .5px solid rgb(255, 255, 255, .5);
        }

        .Title {
            @apply absolute self-center justify-self-center;

            h3 {
                @apply text-center text-8;
                @apply lg:text-12;
                @apply xl:text-16;
                @apply 2xl:text-22;
            }
        }

        .HeadingIcon {
            @apply absolute self-center justify-self-end opacity-48 overflow-hidden;
            @apply flex justify-center items-center;
            @apply h-32 w-32;
            @apply lg:w-75 lg:h-75;

            img {
                @apply h-100% w-100%;
            }
        }

        .Info {
            @apply flex items-center p-x-4 p-y-8 min-h-50 grow-1;
            @apply md:p-8 lg:p-8;
            // border: 1px solid blue;

            pre {
                @apply text-justify text-wrap text-4.2;
                @apply md:text-4;
                @apply lg:text-4;
                @apply xl:text-4.3;
                @apply 2xl:text-5.5;
            }
        }

        .ButtonDiv {
            @apply flex items-center justify-between p-6;

            a {
                border: 1px solid #fff;
                @apply border-rounded-3 bg-white text-black text-4.8 no-underline;
                @apply flex justify-center items-center p-3 min-w-6;
            }

            a:hover {
                @apply bg-black text-white;
            }

            button {
                border: 1px solid #fff;
                @apply border-rounded-3 text-6 p-3 w-12.5 h-12.5;
                @apply flex items-center bg-white text-black;
            }

            button:hover {
                border: 1px solid #000;
                filter: invert(1);
            }
        }
    }
</style>