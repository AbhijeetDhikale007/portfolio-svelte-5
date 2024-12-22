<script lang='ts'>
    import { PageSkill } from "../../../store/Store";
    import Skills from "../Skills.svelte"

    function Back(){
        $PageSkill = Skills
    }

    export let Title: string, Img: string, Alt: string, Info: string
</script>

<div class='CardPage'>
    <div class='Heading'>
        <div class='Title'>
            <h3>{Title}</h3>
        </div>
        <div class='HeadingIcon'>
            <img src={Img} alt={Alt}>
        </div>
    </div>
    <hr>
    <div class='Info'>
        <pre>{Info}</pre>
    </div>
    <hr>
    <div class='ButtonDiv'>
        <button on:click={Back}><img src='Icons/Back.svg' alt='Back'></button>
    </div>
</div>

<style lang='scss'>
    .CardPage {
        @apply flex flex-col w-[70vw] mt-15;
        // border: 1px solid red;

        .Heading {
            // border: 1px solid #fff;
            @apply grid justify-around overflow-hidden;
            @apply h-75 w-100%;
        }

        hr {
            border: none;
            border-bottom: .5px solid rgb(255, 255, 255, .5);
        }

        .Title {
            @apply absolute self-center justify-self-center;

            h3 {
                @apply text-center text-10;
            }
        }

        .HeadingIcon {
            @apply absolute w-75 h-75 self-center justify-self-end opacity-48 overflow-hidden;
            @apply flex justify-center items-center;

            img {
                @apply h-100% w-100%;
            }
        }

        .Info {
            @apply flex items-center p-8 min-h-50 max-h-200 grow-1;
            // border: 1px solid blue;

            pre {
                @apply text-justify text-wrap;
            }
        }

        .ButtonDiv {
            @apply flex items-center justify-center p-6;

            button {
                border: 1px solid #fff;
                @apply border-none border-rounded-3 text-6 p-3;
                @apply flex items-center bg-white text-black;
            }

            button:hover {
                border: 1px solid #fff;
                filter: invert(1);
            }
        }
    }
</style>