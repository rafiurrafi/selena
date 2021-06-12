$(document).ready(function () {
  const humbergar_menu = document.querySelector(".header__humbergar .menu");
  const headerMiniNav = document.querySelector(".header-mini-nav");

  humbergar_menu.addEventListener("click", () => {
    headerMiniNav.classList.toggle("active");
    console.log("Click");
  });

  //animation on scroll
  // $(".section-album").waypoint(
  //   function (direction) {
  //     $(".section-album").addClass("animate__animated animate__fadeIn");
  //   },
  //   { offset: "50%" }
  // );
  //animation on title album
  $(".section-album .title").waypoint(
    function (direction) {
      $(".section-album .title h2").addClass(
        "animate__animated animate__slideInLeft"
      );
      $(".section-album .title p").addClass(
        "animate__animated animate__slideInRight"
      );
    },
    { offset: "40%" }
  );
  //animation on title music
  $(".section-music .title").waypoint(
    function (direction) {
      $(".section-music .title h2").addClass(
        "animate__animated animate__slideInLeft"
      );
      $(".section-music .title p").addClass(
        "animate__animated animate__slideInRight"
      );
    },
    { offset: "40%" }
  );
  //animation on title tour
  $(".section-tour .title").waypoint(
    function (direction) {
      $(".section-tour .title h2").addClass(
        "animate__animated animate__slideInLeft"
      );
      $(".section-tour .title p").addClass(
        "animate__animated animate__slideInRight"
      );
    },
    { offset: "40%" }
  );
  //animation on title video
  $(".section-video .title").waypoint(
    function (direction) {
      $(".section-video .title h2").addClass(
        "animate__animated animate__slideInLeft"
      );
      $(".section-video .title p").addClass(
        "animate__animated animate__slideInRight"
      );
    },
    { offset: "40%" }
  );
  //animation on title merch
  $(".section-merch .title").waypoint(
    function (direction) {
      $(".section-merch .title h2").addClass(
        "animate__animated animate__slideInLeft"
      );
      $(".section-merch .title p").addClass(
        "animate__animated animate__slideInRight"
      );
    },
    { offset: "40%" }
  );

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000,
            function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });
});
