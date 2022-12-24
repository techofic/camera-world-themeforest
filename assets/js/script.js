jQuery(function ($) {

    'use strict';

    // Navbar scroll
    $(window).scroll(function () {
        let position = $(this).scrollTop();
        if (position >= 10) {
            $(".header").addClass("header-sticky animate__slideInDown");
        } else {
            $(".header").removeClass("header-sticky animate__slideInDown");
        }
    });

    // Navbar offcanvas dropdown toggle starts
    const navbarOffCanvas = document.querySelector(".offcanvas.navbar-content__item");
    if (navbarOffCanvas) {
        navbarOffCanvas.addEventListener('show.bs.offcanvas', event => {
            $(".offcanvas.navbar-content__item .offcanvas-body .nav-item a").on("click", function () {
                var $this = $(this);
                if ($this.hasClass("dropdown-toggle")) {
                    $this.toggleClass("icon-rotate");
                    $this.next().slideToggle();
                    if ($this.parent().siblings().children().hasClass("dropdown-toggle")) {
                        $this.parent().siblings().children().removeClass("icon-rotate");
                        $this.parent().siblings().children().next().slideUp();
                    }
                }
            });
        })

        // When navbar offcanvas gets hide
        navbarOffCanvas.addEventListener('hide.bs.offcanvas', event => {
            $(".nav-item a").removeClass("icon-rotate");
            $(".nav-item a").next().slideUp();
        })
    }

    // hero Carousel

    $('.hero-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    // Hot Deals Timer 

    // class to create a countdown timer
    class CountdownTimer {
        // setup timer values
        constructor({ selector, targetDate, backgroundColor = null, foregroundColor = null }) {
            this.selector = selector;
            this.targetDate = targetDate;
            this.backgroundColor = backgroundColor;
            this.foregroundColor = foregroundColor;

            // grab divs on frontend using supplied selector ID
            this.refs = {
                days: document.querySelector(`${this.selector} [data-value="days"]`),
                hours: document.querySelector(`${this.selector} [data-value="hours"]`),
                mins: document.querySelector(`${this.selector} [data-value="minutes"]`),
                secs: document.querySelector(`${this.selector} [data-value="seconds"]`),
            };
        }

        getTimeRemaining(endtime) {
            const total = Date.parse(endtime) - Date.parse(new Date());
            const days = Math.floor(total / (1000 * 60 * 60 * 24));
            const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
            const mins = Math.floor((total / 1000 / 60) % 60);
            const secs = Math.floor((total / 1000) % 60);
            return {
                total,
                days,
                hours,
                mins,
                secs,
            };
        }

        updateTimer({ days, hours, mins, secs }) {
            this.refs.days.textContent = days;
            this.refs.hours.textContent = hours;
            this.refs.mins.textContent = mins;
            this.refs.secs.textContent = secs;
        }
        updateColors() {
            if (this.backgroundColor != null) {
                this.refs.days.style.background = this.backgroundColor;
                this.refs.hours.style.background = this.backgroundColor;
                this.refs.mins.style.background = this.backgroundColor;
                this.refs.secs.style.background = this.backgroundColor;
            }

            if (this.foregroundColor != null) {
                this.refs.days.style.color = this.foregroundColor;
                this.refs.hours.style.color = this.foregroundColor;
                this.refs.mins.style.color = this.foregroundColor;
                this.refs.secs.style.color = this.foregroundColor;
            }
        }

        startTimer() {
            const timer = this.getTimeRemaining(this.targetDate);
            this.updateTimer(timer);
            this.updateColors();
            setInterval(() => {
                const timer = this.getTimeRemaining(this.targetDate);
                this.updateTimer(timer);
            }, 1000);
        }
    }
    const timer = new CountdownTimer({
        selector: "#clock1",
        targetDate: new Date("January, 21 2023 18:00:00"),
    });

    timer.startTimer();

    // Hot Deals Carousel

    $('.hot-deals__carousel').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        dots: false,
        navText: ["<i class='las la-angle-left'></i>", "<i class='las la-angle-right'></i>"],
        responsive: {
            0: {
                items: 1.2
            },
            300: {
                items: 1.2
            },
            600: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    })

    // New Product Carousel starts

    $('.new-product__carousel').owlCarousel({
        loop: true,
        margin: 24,
        nav: true,
        dots: false,
        navText: ["<i class='las la-angle-left'></i>", "<i class='las la-angle-right'></i>"],
        responsive: {
            0: {
                items: 1.2
            },
            500: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })

});

// Min Product Carousel

$('.min-product__carousel').owlCarousel({
    loop: true,
    margin: 15,
    nav: false,
    dots: false,
    navText: ["<i class='las la-angle-left'></i>", "<i class='las la-angle-right'></i>"],
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 3
        },
        1200: {
            items: 3
        }
    }
})

// Trending Offers Carousel starts
$('.trending-offers__carousel').owlCarousel({
    loop: true,
    margin: 24,
    nav: true,
    dots: false,
    navText: ["<i class='las la-angle-left'></i>", "<i class='las la-angle-right'></i>"],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 1.3,
        },
        1000: {
            items: 2

        }
    }
});

// Featured product Carousel starts

$('.featured-product__carousel').owlCarousel({
    loop: true,
    margin: 24,
    nav: true,
    dots: false,
    navText: ["<i class='las la-angle-left'></i>", "<i class='las la-angle-right'></i>"],
    responsive: {
        0: {
            items: 1.2
        },
        600: {
            items: 2,
        },
        1000: {
            items: 4
        }
    }
})

// tabs

// New product tab
$(".new-product-tabs li").on("click", function () {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    let idAttribute = $(this).attr("data-id");
    $(".new-product__area").find(`[data-carousel='${idAttribute}']`).addClass("active animate__slideInRight").siblings().removeClass("active animate__slideInRight");
})

// Featured product tab
$(".featured-product-tabs li").on("click", function () {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    let idAttribute = $(this).attr("data-id");
    $(".featured-product__area").find(`[data-carousel='${idAttribute}']`).addClass("active animate__slideInRight").siblings().removeClass("active animate__slideInRight");
})

// Product tab
$(".product-tabs li").on("click", function () {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    let idAttribute = $(this).attr("data-id");
    $(".product-area").find(`[data-carousel='${idAttribute}']`).addClass("active animate__slideInRight").siblings().removeClass("active animate__slideInRight");
})

// Single Product Page

// reply show

$(document).ready(function(){
    $("#show1").click(function(){
      $(".first").css({
        display : 'block' ,
        transition : 'all 0.3s ease-in-out',
      });
    });
    $("#show2").click(function(){
        $(".second").css("display", "block");
      });
      $("#show3").click(function(){
        $(".third").css("display", "block");
      });
  });







////////////////////////////////////////////

$(document).ready(function() {

    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 4; //globaly define number of elements per page
    var syncedSecondary = true;
  
    sync1.owlCarousel({
      items : 1,
      slideSpeed : 2000,
      nav: false,
      autoplay: false,
      dots: false,
      loop: true,
      responsiveRefreshRate : 200,
      margin: 20,
  
    }).on('changed.owl.carousel', syncPosition);
  
    sync2
      .on('initialized.owl.carousel', function () {
        sync2.find(".owl-item").eq(0).addClass("current");
      })
      .owlCarousel({
      items : slidesPerPage,
      dots: true,
      nav: false,
      smartSpeed: 200,
      slideSpeed : 500,
      slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
      responsiveRefreshRate : 100,
      
    }).on('changed.owl.carousel', syncPosition2);
  
    function syncPosition(el) {
      //if you set loop to false, you have to restore this next line
      //var current = el.item.index;
      
      //if you disable loop you have to comment this block
      var count = el.item.count-1;
      var current = Math.round(el.item.index - (el.item.count/2) - .5);
      
      if(current < 0) {
        current = count;
      }
      if(current > count) {
        current = 0;
      }
      
      //end block
  
      sync2
        .find(".owl-item")
        .removeClass("current")
        .eq(current)
        .addClass("current");
      var onscreen = sync2.find('.owl-item.active').length - 1;
      var start = sync2.find('.owl-item.active').first().index();
      var end = sync2.find('.owl-item.active').last().index();
      
      if (current > end) {
        sync2.data('owl.carousel').to(current, 100, true);
      }
      if (current < start) {
        sync2.data('owl.carousel').to(current - onscreen, 100, true);
      }
    }
    
    function syncPosition2(el) {
      if(syncedSecondary) {
        var number = el.item.index;
        sync1.data('owl.carousel').to(number, 100, true);
      }
    }
    
    sync2.on("click", ".owl-item", function(e){
      e.preventDefault();
      var number = $(this).index();
      sync1.data('owl.carousel').to(number, 300, true);
    });
  });