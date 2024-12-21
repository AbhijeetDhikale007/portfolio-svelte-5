<div class='Photo-Main'>
  <div class='BG-Wrapper'>
    <div class='BG'></div>
      <img src="Shree Krishn.jpg" alt="Portait">
  </div>
</div>

<style lang='scss'>
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
</style>