<script lang="ts">
    import VanillaTilt from "vanilla-tilt";
    import { onMount } from "svelte";
    import { Education } from '../../data/Education/Education'

    let TiltCard: HTMLElement[] = [];

    onMount(() => {
    // Initialize VanillaTilt for each card in the array
    TiltCard.forEach((card: HTMLElement) => {
      VanillaTilt.init(card, {
        max: 25, // Maximum tilt angle in degrees
        speed: 400, // Speed of the effect
        glare: true, // Enables glare effect
        "max-glare": 0.5, // Maximum opacity for glare
      });
    });
  });
</script>

{#each Education as card, index}
<div class={card.CardClass} bind:this={TiltCard[index]}>
    <img class='Logo' src={card.imgUrl} alt={card.imgAlt} />
    <h2>{card.Degree}</h2>
    <h3 class="pb-2">{card.Name}</h3>
    <hr />
    <div class="CardDiv">
        <div class="IconDiv"><img src="Icons/Location.svg" alt="Location"></div>
        <h4>{card.Location}</h4>
    </div>
    <hr />
    <div class="CardDiv">
        <div class="IconDiv"><img src="Icons/Date.svg" alt="Date"></div>
        <h4>{card.Date}</h4>
    </div>
    <hr />
    <div class="CardDiv">
        <div class="IconDiv"><img src="Icons/Time.svg" alt="Time"></div>
        <h4>{card.Duration}</h4>
    </div>
    <hr />
    <div class="LastDiv">
        <a class="ButtonCard Tooltip" href={card.CertificateUrl} data-title='Certificate' target='_blank'><img src='Icons/Certificate.svg' alt='Certificate'></a>
    </div>
</div>
{/each}

<style lang="scss">
    .CardEdu {
        // border: 0.4px solid rgb(255, 255, 255, 0.4);
        border-radius: 12px;
        // box-shadow: rgb(38, 57, 77) 0px 10px 20px -10px;
        // box-shadow: rgba(100, 100, 100, 0.25) 0px 0.0625em 0.0625em, rgba(100, 100, 100, 100.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 10px 2px inset;
        box-shadow: 0 1px 1px rgba(100,100,100,100.12), 0 0px 2px rgba(100,100,100,100.12);
        @apply h-auto w-[80vw] md:w-[38vw] lg:w-[38vw] px-4 py-2 lg:px-6 lg:py-4;

        .CardDiv {
            // border: 2px solid red;
            @apply flex shrink-1 py-2 lg:py-3 items-center;
        }

        .IconDiv {
            @apply w-4 h-4 pr-2;
        }

        .Logo {
            @apply w-20 h-20;
        }

        hr {
            border: none;
            border-bottom: 0.1px solid rgb(255, 255, 255, 0.4);
        }
    }

    .CardEdu:hover {
        background: rgb(100, 100, 100, .2);
        // box-shadow: -1px -1px 20px rgb(100, 100, 100, .2),
        //             1px 1px 20px rgb(100, 100, 100, .2);
    }

    .Card1 {
        // align-self: start;
        @apply self-center md:self-start lg:self-start;
    }

    // .Icon1 {
    //     @apply absolute w-3 top-50% left-105% text-red;
    // }

    .Card2 {
        // align-self: end;
        @apply self-center md:self-end lg:self-end;
    }

    .LastDiv {
        @apply flex pt-4;
    }

    .ButtonCard {
        border: .5px solid rgb(255, 255, 255, .4);
        border-radius: 12px;
        fill: #fff;
        transition: 0.5s;
        text-decoration: none;
        cursor: pointer;
        @apply w-5 h-5 px-3 py-1.5;
    }

    .ButtonCard:hover {
        // color: #000;
        // fill: #000;
        background: rgb(255, 255, 255, .3);
        box-shadow: 0 0 5px #fff;
    }

    .ButtonCard:active {
        background-color: #000;
        color: #ff0000;
        fill: #ff0000;
        box-shadow: none;
    }
</style>