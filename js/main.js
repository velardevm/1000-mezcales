
(function ($) {
    "use strict";

    /*[ Load page ]
    ===========================================================*/
    $(".animsition").animsition({
        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 1500,
        outDuration: 800,
        linkElement: '.animsition-link',
        loading: true,
        loadingParentElement: 'html',
        loadingClass: 'animsition-loading-1',
        loadingInner: '<div class="cp-spinner cp-meter"></div>',
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: ['animation-duration', '-webkit-animation-duration'],
        overlay: false,
        overlayClass: 'animsition-overlay-slide',
        overlayParentElement: 'html',
        transition: function (url) { window.location.href = url; }
    });

    /*[ Back to top ]
    ===========================================================*/
    var windowH = $(window).height() / 2;

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > windowH) {
            $("#myBtn").css('display', 'flex');
        } else {
            $("#myBtn").css('display', 'none');
        }
    });

    $('#myBtn').on("click", function () {
        $('html, body').animate({ scrollTop: 0 }, 300);
    });


    /*[ Select ]
    ===========================================================*/
    $(".selection-1").select2({
        minimumResultsForSearch: 20,
        dropdownParent: $('#dropDownSelect1')
    });

    /*[ Daterangepicker ]
    ===========================================================*/
    $('.my-calendar').daterangepicker({
        "singleDatePicker": true,
        "showDropdowns": true,
        locale: {
            format: 'DD/MM/YYYY'
        },
    });

    var myCalendar = $('.my-calendar');
    var isClick = 0;

    $(window).on('click', function () {
        isClick = 0;
    });

    $(myCalendar).on('apply.daterangepicker', function () {
        isClick = 0;
    });

    $('.btn-calendar').on('click', function (e) {
        e.stopPropagation();

        if (isClick == 1) isClick = 0;
        else if (isClick == 0) isClick = 1;

        if (isClick == 1) {
            myCalendar.focus();
        }
    });

    $(myCalendar).on('click', function (e) {
        e.stopPropagation();
        isClick = 1;
    });

    $('.daterangepicker').on('click', function (e) {
        e.stopPropagation();
    });


    /*[ Play video 01]
    ===========================================================*/
    var srcOld = $('.video-mo-01').children('iframe').attr('src');

    $('[data-target="#modal-video-01"]').on('click', function () {
        $('.video-mo-01').children('iframe')[0].src += "&autoplay=1";

        setTimeout(function () {
            $('.video-mo-01').css('opacity', '1');
        }, 300);
    });

    $('[data-dismiss="modal"]').on('click', function () {
        $('.video-mo-01').children('iframe')[0].src = srcOld;
        $('.video-mo-01').css('opacity', '0');
    });


    /*[ Fixed Header ]
    ===========================================================*/
    var header = $('header');
    var logo = $(header).find('.logo img');
    var linkLogo1 = $(logo).attr('src');
    var linkLogo2 = $(logo).data('logofixed');


    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 5 && $(this).width() > 992) {
            $(logo).attr('src', linkLogo2);
            $(header).addClass('header-fixed');
        }
        else {
            $(header).removeClass('header-fixed');
            $(logo).attr('src', linkLogo1);
        }

    });

    /*[ Show/hide sidebar ]
    ===========================================================*/
    $('body').append('<div class="overlay-sidebar trans-0-4"></div>');
    var ovlSideBar = $('.overlay-sidebar');
    var btnShowSidebar = $('.btn-show-sidebar');
    var btnHideSidebar = $('.btn-hide-sidebar');
    var sidebar = $('.sidebar');

    $(btnShowSidebar).on('click', function () {
        $(sidebar).addClass('show-sidebar');
        $(ovlSideBar).addClass('show-overlay-sidebar');
    })

    $(btnHideSidebar).on('click', function () {
        $(sidebar).removeClass('show-sidebar');
        $(ovlSideBar).removeClass('show-overlay-sidebar');
    })

    $(ovlSideBar).on('click', function () {
        $(sidebar).removeClass('show-sidebar');
        $(ovlSideBar).removeClass('show-overlay-sidebar');
    })


    /*[ Isotope ]
    ===========================================================*/
    var $topeContainer = $('.isotope-grid');
    var $filter = $('.filter-tope-group');

    // filter items on button click
    $filter.each(function () {
        $filter.on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $topeContainer.isotope({ filter: filterValue });
        });

    });

    // init Isotope
    $(window).on('load', function () {
        var $grid = $topeContainer.each(function () {
            $(this).isotope({
                itemSelector: '.isotope-item',
                percentPosition: true,
                animationEngine: 'best-available',
                masonry: {
                    columnWidth: '.isotope-item'
                }
            });
        });
    });

    var labelGallerys = $('.label-gallery');

    $(labelGallerys).each(function () {
        $(this).on('click', function () {
            for (var i = 0; i < labelGallerys.length; i++) {
                $(labelGallerys[i]).removeClass('is-actived');
            }

            $(this).addClass('is-actived');
        });
    });


    /* MAIL CHIMP MODAL */
    const openEls = document.querySelectorAll("[data-open]");
    const closeEls = document.querySelectorAll("[data-close]");
    const isVisible = "is-visible";

    for (const el of openEls) {
        el.addEventListener("click", function () {
            const modalId = this.dataset.open;
            document.getElementById(modalId).classList.add(isVisible);
        });
    }

    for (const el of closeEls) {
        el.addEventListener("click", function () {
            this.parentElement.parentElement.parentElement.classList.remove(isVisible);
        });
    }

    document.addEventListener("click", e => {
        if (e.target == document.querySelector(".modal.is-visible")) {
            document.querySelector(".modal.is-visible").classList.remove(isVisible);
        }
    });

    document.addEventListener("keyup", e => {
        // if we press the ESC
        if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
            document.querySelector(".modal.is-visible").classList.remove(isVisible);
        }
    });

    /* VERIFICATION COOKIES */
    var	$window = $(window),
    $body = $('body'),
    $wrapper = $('#wrapper'),
    $header = $('#header'),
    $nav = $('#nav'),
    $main = $('#main'),
    $navPanelToggle, $navPanel, $navPanelInner;

/**
 * Applies parallax scrolling to an element's background image.
 * @return {jQuery} jQuery object.
 */
$.fn._parallax = function(intensity) {

    var	$window = $(window),
        $this = $(this);

    if (this.length == 0 || intensity === 0)
        return $this;

    if (this.length > 1) {

        for (var i=0; i < this.length; i++)
            $(this[i])._parallax(intensity);

        return $this;

    }

    if (!intensity)
        intensity = 0.25;

    $this.each(function() {

        var $t = $(this),
            $bg = $('<div class="bg"></div>').appendTo($t),
            on, off;

        on = function() {

            $bg
                .removeClass('fixed')
                .css('transform', 'matrix(1,0,0,1,0,0)');

            $window
                .on('scroll._parallax', function() {

                    var pos = parseInt($window.scrollTop()) - parseInt($t.position().top);

                    $bg.css('transform', 'matrix(1,0,0,1,0,' + (pos * intensity) + ')');

                });

        };

        off = function() {

            $bg
                .addClass('fixed')
                .css('transform', 'none');

            $window
                .off('scroll._parallax');

        };

        // Disable parallax on ..
            if (browser.name == 'ie'			// IE
            ||	browser.name == 'edge'			// Edge
            ||	window.devicePixelRatio > 1		// Retina/HiDPI (= poor performance)
            ||	browser.mobile)					// Mobile devices
                off();

        // Enable everywhere else.
            else {

                breakpoints.on('>large', on);
                breakpoints.on('<=large', off);

            }

    });

    $window
        .off('load._parallax resize._parallax')
        .on('load._parallax resize._parallax', function() {
            $window.trigger('scroll');
        });

    return $(this);

};

// Play initial animations on page load.
    $window.on('load', function() {
        window.setTimeout(function() {
            $body.removeClass('is-preload');
        }, 100);
    });

// Background.
    $wrapper._parallax(0.925);

// Nav Panel.

    // Toggle.
        $navPanelToggle = $(
            '<a href="#navPanel" id="navPanelToggle">Menu</a>'
        )
            .appendTo($wrapper);

        // Change toggle styling once we've scrolled past the header.
            $header.scrollex({
                bottom: '5vh',
                enter: function() {
                    $navPanelToggle.removeClass('alt');
                },
                leave: function() {
                    $navPanelToggle.addClass('alt');
                }
            });

    // Panel.
        $navPanel = $(
            '<div id="navPanel">' +
                '<nav>' +
                '</nav>' +
                '<a href="#navPanel" class="close"></a>' +
            '</div>'
        )
            .appendTo($body)
            .panel({
                delay: 500,
                hideOnClick: true,
                hideOnSwipe: true,
                resetScroll: true,
                resetForms: true,
                side: 'right',
                target: $body,
                visibleClass: 'is-navPanel-visible'
            });

        // Get inner.
            $navPanelInner = $navPanel.children('nav');

        // Move nav content on breakpoint change.
            var $navContent = $nav.children();

            breakpoints.on('>medium', function() {

                // NavPanel -> Nav.
                    $navContent.appendTo($nav);

                // Flip icon classes.
                    $nav.find('.icons, .icon')
                        .removeClass('alt');

            });

            breakpoints.on('<=medium', function() {

                // Nav -> NavPanel.
                    $navContent.appendTo($navPanelInner);

                // Flip icon classes.
                    $navPanelInner.find('.icons, .icon')
                        .addClass('alt');

            });

        // Hack: Disable transitions on WP.
            if (browser.os == 'wp'
            &&	browser.osVersion < 10)
                $navPanel
                    .css('transition', 'none');

// Intro.
    var $intro = $('#intro');

    if ($intro.length > 0) {

        // Hack: Fix flex min-height on IE.
            if (browser.name == 'ie') {
                $window.on('resize.ie-intro-fix', function() {

                    var h = $intro.height();

                    if (h > $window.height())
                        $intro.css('height', 'auto');
                    else
                        $intro.css('height', h);

                }).trigger('resize.ie-intro-fix');
            }

        // Hide intro on scroll (> small).
            breakpoints.on('>small', function() {

                $main.unscrollex();

                $main.scrollex({
                    mode: 'bottom',
                    top: '25vh',
                    bottom: '-50vh',
                    enter: function() {
                        $intro.addClass('hidden');
                    },
                    leave: function() {
                        $intro.removeClass('hidden');
                    }
                });

            });

        // Hide intro on scroll (<= small).
            breakpoints.on('<=small', function() {

                $main.unscrollex();

                $main.scrollex({
                    mode: 'middle',
                    top: '15vh',
                    bottom: '-15vh',
                    enter: function() {
                        $intro.addClass('hidden');
                    },
                    leave: function() {
                        $intro.removeClass('hidden');
                    }
                });

        });

    }

})(jQuery);

