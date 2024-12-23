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
    width: 1600,
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

<!-- <style lang='scss'>
  .Photo-Main {
    // border: 2px solid #fff;
    // border-left: 2px solid rgb(250, 250, 250, .6);
    // border-right: 2px solid rgb(250, 250, 250, .6);
    // border-bottom: 2px solid rgb(250, 250, 250, .6);
    @apply rounded-25 flex justify-center items-center;
    @apply w-50 h-50;
    // @apply group;

    .BG-Wrapper {
      @apply relative rounded-25 flex justify-center items-center;
      @apply w-50 h-50;
      // background-color: #000;
    }

    .BG {
      @apply absolute blur rounded-25 inset--1 bg-gradient-to-r from-pink-600 to-purple-600 opacity-50;
    }

    // .BG:hover {
    //   @apply opacity-100;
    // }

    img {
      @apply relative rounded-25 w-100% h-100% select-none;
    }
  }
</style> -->