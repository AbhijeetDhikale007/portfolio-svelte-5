<script lang="ts">
    import './Menu.scss'
    import { Home, SkillsPage, Skills, Projects, Education, Resume } from "../../routes/+pages"
    import { Main, PageSkill } from "../../store/Store"

    let isOpen: boolean = false

    function MenuHandler() {
        if (isOpen == false) {
            isOpen = true
        }
        else {
            isOpen = false
        }
    }

    $Main = Home
    function Routing(Name: any) {
        $Main = Name
    }

    function UpdateSkill() {
        $PageSkill = Skills
        $Main = SkillsPage
    }

    function RoutingPhone(Name: any) {
        isOpen = false
        $Main = Name
    }

    function UpdateSkillPhone() {
        $PageSkill = Skills
        $Main = SkillsPage
        isOpen = false
    }
</script>

<div class='z-4'>
    <div class="Header">
        <div class="HeaderDiv">
            <!-- <img
                class="King pointer-events-none w-16 lg:w-17 inline-block"
                src="/King.png"
                alt="King - A Logo"
            /> -->
            <h1 class='A'>Λ</h1>
            <pre
                class="Name">Λ ʙ ʜ ι נ є є τ   Ð ʜ ι κ α ℓ є</pre>
        </div>
        <nav>
            <div class="Menu-Container">
                <button class='Menu-Button' on:click={() => (MenuHandler())}><img class='w-6 h-6' src="Icons/Menu.svg" alt="Menu"></button>
                {#if isOpen == true}
                    <div class='Menu-Wrapper'>
                        <div class='Menu'>
                            <div class='Menu-Buttons-1'>
                                <button class="Button-Black" on:click={() => (RoutingPhone(Home))}>
                                  <img src="Icons/Header/Home.svg" alt="Home">
                                  <p>Home</p>
                                </button>
                                <button class="Button-Black" on:click={() => (UpdateSkillPhone())}>
                                  <img class='SVG' src="Icons/Header/Skills.svg" alt="Skills">
                                  <p>Skills</p>
                                </button>
                                <button class="Button-Black" on:click={() => (RoutingPhone(Projects))}>
                                  <img class='SVG' src="Icons/Header/Projects.svg" alt="Projects">
                                  <p>Project</p>
                                </button>
                                <button class="Button-Black" on:click={() => (RoutingPhone(Education))}>
                                  <img class='SVG' src="Icons/Header/Education.svg" alt="Education">
                                  <p>Education</p>
                                </button>
                                <button class="Button-Black" on:click={() => (RoutingPhone(Resume))}>
                                  <img class='SVG' src="Icons/Header/Resume.svg" alt="Resume">
                                  <p>Resume</p>
                                </button>
                            </div>
                            <div class='grid px-3 mt-3'>
                                <button class='Menu-Button ml-6 justify-self-end' on:click={() => (isOpen = false)}><img class='w-5 h-5' src="Icons/Close.svg" alt="Close">Close</button>
                            </div>
                        </div>
                    </div>
                {/if}
            </div>
            <div class='Menu-Buttons-2'>
                <button class='Button' class:active={$Main === Home} on:click={() => (Routing(Home))}>Home</button>
                <button class='Button' class:active={$Main === SkillsPage} on:click={() => (UpdateSkill())}>Skills</button>
                <button class='Button' class:active={$Main === Projects} on:click={() => (Routing(Projects))}>Projects</button>
                <button class='Button' class:active={$Main === Education} on:click={() => (Routing(Education))}>Education</button>
                <button class='Button' class:active={$Main === Resume} on:click={() => (Routing(Resume))}>Resume</button>
            </div>            
        </nav>
    </div>
</div>

<style lang="scss">
    .Header {
        // width: 85vw;
        // height: fit-content;
        background-color: rgb(0, 0, 0, 0.6);
        backdrop-filter: blur(3px);
        border-bottom: 0.5px solid rgb(255, 255, 255, 0.5);
        @apply flex flex-items-center flex-justify-between;
        @apply grow-1 h-14 w-[100vw];

        .Name {
            font-family: 'Roboto-Condensed';
            letter-spacing: -1px;
            @apply inline-block vertical-middle text-white cursor-default;
            @apply font-size-4 lg:font-size-5 xl:text-5.4 2xl:text-5.6;
        }

        .HeaderDiv {
            // border: 2px solid red;
            @apply ml-[4vw] lg:ml-[8vw];
            @apply flex pointer-events-none z-1 items-center select-none;
        }

        .Menu-Buttons-1 {
            img {
                @apply h-6 w-6;
            }
        }
    }

    // .King {
    //     // width: 6vw;
    //     filter: invert(1);
    // }

    .A {
        @apply mr-4 text-black bg-white px-4.8 rounded-3.8 font-semibold;
    }
</style>
