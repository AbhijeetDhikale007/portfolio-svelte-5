<script lang='ts'>
    import { Ico } from '../+components'
</script>

<a href="https://github.com/AbhijeetDhikale007" class='Tooltip First' data-title='GitHub' target="_blank" rel='noopener noreferrer'>
    <!-- <img src="Icons/Home/GitHub.svg" alt="GitHub"> -->
    <Ico class='Ico' name='GitHubW'/>
</a>
<a href="https://instagram.com/abhijeetdhikale007" class='Tooltip' data-title='Instagram' target="_blank" rel='noopener noreferrer'>
    <!-- <img src="Icons/Home/Instagram.svg" alt="Instagram"> -->
    <Ico class='Ico' name='Instagram'/>
</a>
<a href="https://www.linkedin.com/in/abhijeet-dhikale" class='Tooltip' data-title='LinkedIn' target="_blank" rel='noopener noreferrer'>
    <!-- <img src="Icons/Home/LinkedIn.svg" alt="LinkedIn"> -->
    <Ico class='Ico' name='LinkedIn'/>
</a>
<a href="https://x.com/abhijeetdhikale" class='Tooltip' data-title='Twitter' target="_blank" rel='noopener noreferrer'>
    <!-- <img src="Icons/Home/Twitter.svg" alt="Twitter"> -->
    <Ico class='Ico' name='Twitter'/>
</a>
<a href="https://t.me/AbhijeetDhikale007" class='Tooltip Last' data-title='Telegram' target="_blank" rel='noopener noreferrer'>
    <!-- <img src="Icons/Home/Telegram.svg" alt="Telegram"> -->
    <Ico class='Ico' name='Telegram'/>
</a>

<style lang='scss'>
    a {
        @apply w-6.8 h-6.8 p-1.4 pointer-events-auto cursor-pointer;
        // border: 1px solid rgb(255, 255, 255, .5);
        background-color: #fff;
        border-radius: 8px;
    }

    a:hover {
        // border: 1px solid rgb(255, 0, .5);
        scale: 1.1;
    }

    .First {
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        @apply pl-2;
    }

    .Last {
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        @apply pr-2;
    }

    // img {
    //     filter:invert(1);
    // }
</style>