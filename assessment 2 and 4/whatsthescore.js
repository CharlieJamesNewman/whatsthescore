function nextImage() {
    // Get all carousels on the page
    var carousels = document.querySelectorAll('.carousel');
  
    // Loop through each carousel and advance to the next image
    for (var i = 0; i < carousels.length; i++) {
      var carousel = carousels[i];
      var currentSlide = carousel.querySelector('.active');
      var nextSlide = currentSlide.nextElementSibling;
  
      // If we've reached the end of the carousel, go back to the beginning
      if (!nextSlide) {
        nextSlide = carousel.querySelector('.carousel-item:first-child');
      }
  
      // Set the next slide to be active and remove the active class from the current slide
      currentSlide.classList.remove('active');
      nextSlide.classList.add('active');
    }
  }
  

  // If you want to add a function to the button, you can use JavaScript like this:

const button = document.querySelector('a');

button.addEventListener('click', function() {
  // Add your function here
});
