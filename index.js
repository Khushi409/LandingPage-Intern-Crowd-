// gsap.from('.header', {duration: 1, y: "-100", ease: bounce})

// function scroller() {
//     $(".smooth").on("scroll", function() {
//       let scrollPos = $(this).scrollTop();
//       $(".parallax").css({
//         top: scrollPos / 2 + "px",
//         opacity: 1 - scrollPos / 200
//       });
//     });
//   }
//   scroller();
  
function scroller() {
  // Attach an event listener to the .smooth class.
  $(".smooth").on("scroll", function() {
    // Get the scroll position of the element.
    let scrollPos = $(this).scrollTop();
    // Set the top and opacity properties of the .parallax class.
    $(".parallax").css({
      top: scrollPos / 2 + "px",
      opacity: 1 - scrollPos / 200
    });
  });
}
// Call the scroller function.
scroller();