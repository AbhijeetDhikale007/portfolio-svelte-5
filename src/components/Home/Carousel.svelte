<script lang='ts'>
    import { Splide, SplideSlide } from '@splidejs/svelte-splide'
    import { Ico } from '../+components'
    import '@splidejs/svelte-splide/css'
</script>

<div class='Carousel'>
<Splide aria-label="My Favorite Images"
  options={ {
    rewind: true,
    autoplay: true,
    SplideSlide: 100,
    delay: -2500,
    width: 1500,
    padding: '10px',
    gap: '10px',
    arrows: false,
    // rewindByDrag: true,
    // useScroll: true,
    // wheel: true,
    // waitForTransition: true,
    // wheelSleep: 100,
    // easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
  }}>
  <SplideSlide>
    <!-- <img src='Icons/Svelte.svg' alt="Svelte"/> -->
    <Ico name='Svelte' />
  </SplideSlide>
  <SplideSlide>
    <Ico name='React' />
  </SplideSlide>
  <SplideSlide>
    <Ico name='Angular' />
  </SplideSlide>
  <SplideSlide>
    <Ico name='TypeScript' />
  </SplideSlide>
  <SplideSlide>
    <Ico name='JavaScript' />
  </SplideSlide>
  <SplideSlide>
    <Ico name='Unocss' />
  </SplideSlide>
  <SplideSlide>
    <Ico name='Tailwind' />
  </SplideSlide>
  <SplideSlide>
    <Ico name='MySQL' />
  </SplideSlide>
  <SplideSlide>
    <Ico name='CLang' />
  </SplideSlide>
</Splide>
</div>

<style lann='scss'>
    .Carousel {
      @apply w-42 h-42 p-5;

      img {
        @apply w-80% h-80%;
      }
    }
</style>