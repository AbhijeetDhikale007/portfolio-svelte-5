<script lang="ts">
    import './Menu.scss'

    let isOpen: boolean = false;
</script>

<div class='z-4'>
    <div class="Header">
        <div
            class="HeaderDiv">
            <!-- <img
                class="King pointer-events-none w-16 lg:w-17 inline-block"
                src="/King.png"
                alt="King - A Logo"
            /> -->
            <h1 class='A'>Λ</h1>
            <h3
                class="Name">
                Λʙʜιנєєτ Ðʜικαℓє
            </h3>
        </div>
        <nav>
            <div class="Menu-Container">
                <button class='Menu-Button' on:click={() => (isOpen = true)}><img class='w-6 h-6' src="Icons/Menu.svg" alt="Menu"></button>
                {#if isOpen == true}
                    <div class='Menu-Wrapper'>
                        <div class='Menu'>
                            <button class='Menu-Button ml-6' on:click={() => (isOpen = false)}><img class='w-6 h-6' src="Icons/Close.svg" alt="Close"></button>
                            <slot name='Div1'></slot>
                        </div>
                    </div>
                {/if}
            </div>
            <slot name='Div2' class='Links'></slot>
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
        @apply grow-1 h-14 w-[100vw] lg:w-[100vw];

        .Name {
            letter-spacing: 3px;
            text-shadow: #000 0.1em 0.1em 0.2em;
            @apply inline-block vertical-middle text-white cursor-default;
            @apply font-size-4 lg:font-size-5 font-semibold;
        }

        .HeaderDiv {
            // border: 2px solid red;
            @apply ml-[4vw] lg:ml-[10vw];
            @apply flex pointer-events-none z-1 items-center select-none;
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
