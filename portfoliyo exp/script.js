
  document.addEventListener("DOMContentLoaded", function() {
    const text = "PocketArtist Travel Set";
    const typingText = document.getElementById("typing-text");
    
    setTimeout(() => {
      typingText.style.borderRight = "none"; // Stop blinking cursor effect after typing
    }, 6000); // Matches the typing animation duration

    let index = 0;
    function typeText() {
      if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 200); // Adjust typing speed if needed
      }
    }

    typeText();
  });

   /* Scroll Event for Sticky Header */
   window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 700);
});