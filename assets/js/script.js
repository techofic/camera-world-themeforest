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
    // Navbar offcanvas dropdown toggle ends


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
    // Hot Deals Carousel ends

    $('.hot-deals__carousel').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        dots: false,
        navText: ["<i class='las la-angle-left'></i>","<i class='las la-angle-right'></i>"],
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

    let newCarousel = document.querySelectorAll(".new-product__carousel");
    for (let i = 0; i < newCarousel.length; i++) {
        console.log($("#new-carousel-", i + 1));
        $(`#new-carousel-${i + 1}`).owlCarousel({
            loop: true,
            margin: 24,
            nav: true,
            dots: false,
            navText: ["<i class='las la-angle-left'></i>","<i class='las la-angle-right'></i>"],
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
    }

    // Selection tab
    $(".new-product__section .section-header__action--tab li").on("click", function () {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        let idAttribute = $(this).attr("data-id");
        console.log(idAttribute);
        $(".new-product__area").find(`[data-carousel='${idAttribute}']`).addClass("active").siblings().removeClass("active");
    });

});
// Trending Offers Carousel starts
$('.trending-offers__carousel').owlCarousel({
    loop: true,
    margin: 24,
    nav: true,
    dots: false,
    navText: ["<i class='las la-angle-left'></i>","<i class='las la-angle-right'></i>"],
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

let featuredCarousel = document.querySelectorAll(".featured-product__carousel");
for (let i = 0; i < featuredCarousel.length; i++) {
    console.log($("#featured-product-", i + 1));
    $(`#featured-product-${i + 1}`).owlCarousel({
        loop: true,
        margin: 24,
        nav: true,
        dots: false,
        navText: ["<i class='las la-angle-left'></i>","<i class='las la-angle-right'></i>"],
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
}

// Selection tab
$(".featured-product__section .section-header__action--tab li").on("click", function () {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    let idAttribute = $(this).attr("data-id");
    $(".featured-product__area").find(`[data-carousel='${idAttribute}']`).addClass("active").siblings().removeClass("active");
});