<script>
    export let HRname;
</script>

<div class="HR">
    <div class="container">
        <div>
            <hr class="w-5" />
        </div>
        <div>
            <pre>{HRname}</pre>
        </div>
        <div>
            <hr class="w-screen" />
        </div>
    </div>
</div>

<style lang="scss">
    .HR {
        @apply px-5 flex items-center justify-center;
        // border: 2px solid #bb3333;

        .container {
            @apply flex items-center overflow-hidden;
            // border: 2px solid green;
            width: 80vw;
        }

        hr {
            border: 0;
            border-bottom: 0.2px solid rgb(140, 140, 140, 0.6);
        }

        pre {
            @apply py-2.5 px-3;
            // padding: 0 1.3vw;
            margin-top: -0.5vh;
            color: rgb(255, 255, 255, 0.5);
            /* border: 2px solid #fff; */
        }
    }
</style>