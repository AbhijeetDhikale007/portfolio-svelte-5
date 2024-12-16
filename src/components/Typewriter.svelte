<script>
    import { onMount } from 'svelte';
  
    let textAnimation = '';
    const targetTexts = ['Tech Enthusiast.', 'Coder...', 'Web Developer.'];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
  
    onMount(() => {
      const typingInterval = 200; // Adjust typing speed (milliseconds)
      const deletingDelay = 200; // Delay before starting to delete
      const nextTextDelay = 200; // Delay before moving to the next text
  
      const typeText = () => {
        const currentText = targetTexts[textIndex];
  
        if (!isDeleting && charIndex < currentText.length) {
          textAnimation = currentText.slice(0, charIndex + 1);
          charIndex++;
        } else if (isDeleting && charIndex > 0) {
          textAnimation = currentText.slice(0, charIndex - 1);
          charIndex--;
        } else {
          isDeleting = !isDeleting;
  
          if (isDeleting) {
            setTimeout(typeText, deletingDelay); // Start deleting after delay
            return;
          } else {
            textIndex = (textIndex + 1) % targetTexts.length;
            charIndex = 0;
            setTimeout(typeText, nextTextDelay); // Move to next text after delay
            return;
          }
        }
  
        setTimeout(typeText, typingInterval);
      };
  
      typeText();
    });
</script>

<div>
    <h1 class="TypedWriter">{textAnimation}</h1>
</div>

<style>
    .TypedWriter {
      /* font-family: Arial, sans-serif; */
      font-size: 2rem;
      font-weight: bold;
    }
</style>