<script lang='ts'>
    import { PageSkill } from "../../../store/Store";
    import Skills from "../Skills.svelte"

    function Back(){
        $PageSkill = Skills
    }
</script>

<div class='CardPage'>
    <div class='Heading'>
        <div class='Title'>
            <h3>HTML</h3>
        </div>
        <div class='HeadingIcon'>
            <img src='Icons/HTML.svg' alt="HTML">
        </div>
    </div>
    <hr>
    <div class='Info'>
        <p>JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles. - wikipedia

            That's impressive and all, but you know what's also impressive ? shooting yourself in the foot while writing some code with this language:
            
            
            '11' + 1; // 111 : fair enough, string concatenation !
            '11' - 1; // 10  : why ???
            
            Jokes aside, I enjoyed learning this weird language, I loved creating interactive websites, from using only vanilla js, then React, Vue, Angular, Svelte, Solid, to creating my own SPA framework called Recursive inspired by React and Flutter, which was a real eye-opener and made me skip (to some degree) some learning steps, as I am aware of what really happens internally.
            
            Let's say, I am not your average javascript developer 😜.</p>
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
            @apply absolute w-75 h-75 self-center justify-self-end opacity-72 overflow-hidden;
        }

        .Info {
            @apply flex items-center p-8 h-50;
            // border: 1px solid blue;

            p {
                @apply text-justify;
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