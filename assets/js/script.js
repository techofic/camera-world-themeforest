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

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Featured tabs

function featuredTab(evt, featuredtabName) {
    var i, featuredtabcontent, featuredtablinks;
    featuredtabcontent = document.getElementsByClassName("featuredtabcontent");
    for (i = 0; i < featuredtabcontent.length; i++) {
        featuredtabcontent[i].style.display = "none";
    }
    featuredtablinks = document.getElementsByClassName("featuredtablinks");
    for (i = 0; i < featuredtablinks.length; i++) {
        featuredtablinks[i].className = featuredtablinks[i].className.replace(" active", "");
    }
    document.getElementById(featuredtabName).style.display = "block";
    evt.currentTarget.className += " active";
}


// // Selection tab
// $(".featured-product__section .section-header__action--tab li").on("click", function () {
//     $(this).siblings().removeClass("active");
//     $(this).addClass("active");
//     let idAttribute = $(this).attr("data-id");
//     $(".featured-product__area").find(`[data-carousel='${idAttribute}']`).addClass("active").siblings().removeClass("active");
// });

