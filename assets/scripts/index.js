// Slideshow for First View Images
// class Slideshow {
//
//   constructor() {
//     this.initSlides();
//     this.initSlideshow();
//   }
//
//   // Set a `data-slide` index on each slide for easier slide control.
//   initSlides() {
//     this.container = $('[data-slideshow]');
//     this.slides = this.container.find('img');
//     this.slides.each((idx, slide) => $(slide).attr('data-slide', idx));
//   }
//
//   // Pseudo-preload images so the slideshow doesn't start before all the images
//   // are available.
//   initSlideshow() {
//     this.imagesLoaded = 0;
//     this.currentIndex = 0;
//     this.setNextSlide();
//     this.slides.each((idx, slide) => {
//       $('<img>').on('load', $.proxy(this.loadImage, this)).attr('src', $(slide).attr('src'));
//     });
//   }
//
//   // When one image has loaded, check to see if all images have loaded, and if
//   // so, start the slideshow.
//   loadImage() {
//     this.imagesLoaded++;
//     if (this.imagesLoaded >= this.slides.length) { this.playSlideshow() }
//   }
//
//   // Start the slideshow.
//   playSlideshow() {
//     this.slideshow = window.setInterval(() => { this.performSlide() }, 10000);
//   }
//
//   // 1. Previous slide is unset.
//   // 2. What was the next slide becomes the previous slide.
//   // 3. New index and appropriate next slide are set.
//   // 4. Fade out action.
//   performSlide() {
//     if (this.prevSlide) { this.prevSlide.removeClass('prev fade-out') }
//
//     this.nextSlide.removeClass('next');
//     this.prevSlide = this.nextSlide;
//     this.prevSlide.addClass('prev');
//
//     this.currentIndex++;
//     if (this.currentIndex >= this.slides.length) { this.currentIndex = 0 }
//
//     this.setNextSlide();
//
//     this.prevSlide.addClass('fade-out');
//   }
//
//   setNextSlide() {
//     this.nextSlide = this.container.find(`[data-slide="${this.currentIndex}"]`).first();
//     this.nextSlide.addClass('next');
//   }
//
// }
//
// $(document).ready(function() {
//   new Slideshow;
// });
$("#navbar a").click(function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $("#elementtoScrollToID").offset().top
    }, 2000)
})

$(document).ready(function () {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, .scrolling-wrapper').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#navbar a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#navbarr ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}

$("#navbar a").click(function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $("#elementtoScrollToID").offset().top
    }, 2000);
});
