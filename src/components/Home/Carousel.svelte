<script lang='ts'>
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    import '@splidejs/svelte-splide/css';
</script>

<div class='Carousel'>
<Splide aria-label="My Favorite Images"
  options={ {
    rewind: true,
    autoplay: true,
    SplideSlide: 100,
    delay: -2500,
    width: 1500,
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
    <img src='Icons/Svelte.svg' alt="Svelte"/>
  </SplideSlide>
  <SplideSlide>
    <img src='Icons/React.svg' alt="React"/>
  </SplideSlide>
  <SplideSlide>
    <img src='Icons/Angular.svg' alt="Angular"/>
  </SplideSlide>
  <SplideSlide>
    <img src='Icons/TypeScript.svg' alt="TypeScript"/>
  </SplideSlide>
  <SplideSlide>
    <img src='Icons/Javascript.svg' alt="JavaScript"/>
  </SplideSlide>
  <SplideSlide>
    <img src='Icons/Unocss.svg' alt="UnoCSS"/>
  </SplideSlide>
  <SplideSlide>
    <img src='Icons/Tailwind.svg' alt="Tailwind CSS"/>
  </SplideSlide>
  <SplideSlide>
    <img src='Icons/Mysql.svg' alt="MySQL"/>
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