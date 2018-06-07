'use strict';

(function ($) {
    $.fn.rewAccordion = function () {
        var make = function make() {
            var accordionLinks = $(this).find('.collection_heading');
            var accordionContent = $(this).find('.collection__panel');

            for (var i = 0; i < accordionLinks.length; i++) {
                $(accordionLinks[i]).click(function (e) {
                    e.preventDefault();

                    var j = $(accordionLinks).index(this);

                    if ($(this).hasClass('active')) {

                        $(this).removeClass('active');
                        $(accordionContent[j]).slideUp();
                    } else {

                        $(accordionLinks).removeClass('active');
                        $(accordionContent).slideUp();

                        $(this).addClass('active');
                        $(accordionContent[j]).slideDown();
                    }
                });
            }
        };
        return this.each(make);
    };
})(jQuery);
(function ($) {
    $.fn.rewTabs = function () {

        var tabLinks = $(this).find('.tabs li a');
        var tabContent = $(this).find('.tabs-content');

        for (var i = 0; i < tabLinks.length; i++) {
            $(tabLinks[i]).click(function (e) {
                e.preventDefault();

                $(tabLinks).removeClass('active');
                $(tabContent).removeClass('active');

                var j = $(tabLinks).index(this);

                $(this).addClass('active');
                $(tabContent[j]).addClass('active');
            });
        }
    };
})(jQuery);
(function ($) {
    "use strict";

    var DOMs = {

        documentBodyHtml: $('html, body'),
        documentBody: $('body'),

        menuTrigger: $('#menu-trigger'),
        menuBucket: $('#menu-bucket'),
        mebuLang: $('.navbar__lang'),

        selectChosen: $(".chosen-select"),
        selectSelect2: $('.select2-select'),
        selectSelect2Siluet: $('.select2-select-siluet'),
        selectSelect2Designer: $('.select2-select-designer'),

        collection: $('.collection'),

        gridMasonry: $('.blog-row'),
        gridMasonryItems: $('.blog-item'),

        designerListLink: $('.designer-list_link'),
        designerListPhoto: $('.designer-list-photo li'),

        sliderAbout: $('.slider-about'),
        sliderProduct: $('.slider-cart'),
        sliderInstagram: $('.slider-instagram'),
        sliderLook: $('.slider-look'),
        sliderSummary: $('.slider-summary'),

        sliderArrowDarkLeft: '<div class="slider-arrow slider-arrow-dark left"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 231.1579895 90" style="enable-background:new 0 0 231.1579895 90;" xml:space="preserve"><path d="M52.5597343,69.8278275L33.4907341,50.7578354h178.7359924c3.3130035,0,6-2.6869965,6-6s-2.6869965-6-6-6H33.4907341l19.1450005-19.1459961c1.1720009-1.1710052,1.7579994-2.7070007,1.7579994-4.2420034s-0.5859985-3.0709991-1.7579994-4.2420044c-2.3429985-2.3439941-6.1420021-2.3439941-8.4840012,0L14.7637329,40.515831c-2.3430004,2.3410034-2.3440008,6.1419983-0.0010004,8.4850006l29.3120003,29.3130035c2.3440018,2.3430023,6.1430016,2.3430023,8.4850006,0C54.9027328,75.9698257,54.9017334,72.1718216,52.5597343,69.8278275z"/></svg></div>',
        sliderArrowDarkRight: '<div class="slider-arrow slider-arrow-dark right"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 231.1579895 90" style="enable-background:new 0 0 231.1579895 90;" xml:space="preserve"><path d="M178.6729736,19.6130505l19.0690002,19.069994H19.0059834c-3.3130045,0-6.000001,2.6869965-6.000001,6s2.6869965,6,6.000001,6h178.7359924l-19.1450043,19.1459961c-1.1719971,1.1710052-1.7579956,2.7070007-1.7579956,4.2420044s0.5859985,3.0709991,1.7579956,4.2420044c2.3430023,2.3439941,6.1420135,2.3439941,8.4840088,0l29.3880005-29.3880005c2.3430023-2.3410034,2.3439941-6.1419983,0.0009918-8.4850006l-29.3119965-29.3130035c-2.3439941-2.3430023-6.1430054-2.3430023-8.4850006,0C176.3299713,13.4710531,176.3309784,17.2690563,178.6729736,19.6130505z"/></svg></div>',

        linkSmooth: $(".smooth"),

        datepicker: $(".datepicker"),

        datepickerNext: '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' + '\t viewBox="0 0 231.1579895 90" style="enable-background:new 0 0 231.1579895 90;" xml:space="preserve">\n' + '<path d="M178.6729736,19.6130505l19.0690002,19.069994H19.0059834c-3.3130045,0-6.000001,2.6869965-6.000001,6\n' + '\ts2.6869965,6,6.000001,6h178.7359924l-19.1450043,19.1459961c-1.1719971,1.1710052-1.7579956,2.7070007-1.7579956,4.2420044\n' + '\ts0.5859985,3.0709991,1.7579956,4.2420044c2.3430023,2.3439941,6.1420135,2.3439941,8.4840088,0l29.3880005-29.3880005\n' + '\tc2.3430023-2.3410034,2.3439941-6.1419983,0.0009918-8.4850006l-29.3119965-29.3130035\n' + '\tc-2.3439941-2.3430023-6.1430054-2.3430023-8.4850006,0C176.3299713,13.4710531,176.3309784,17.2690563,178.6729736,19.6130505z"/></svg>',
        datepickerPrev: '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' + '\t viewBox="0 0 231.1579895 90" style="enable-background:new 0 0 231.1579895 90;" xml:space="preserve">\n' + '<path d="M52.5597343,69.8278275L33.4907341,50.7578354h178.7359924c3.3130035,0,6-2.6869965,6-6s-2.6869965-6-6-6H33.4907341\n' + '\tl19.1450005-19.1459961c1.1720009-1.1710052,1.7579994-2.7070007,1.7579994-4.2420034s-0.5859985-3.0709991-1.7579994-4.2420044\n' + '\tc-2.3429985-2.3439941-6.1420021-2.3439941-8.4840012,0L14.7637329,40.515831\n' + '\tc-2.3430004,2.3410034-2.3440008,6.1419983-0.0010004,8.4850006l29.3120003,29.3130035\n' + '\tc2.3440018,2.3430023,6.1430016,2.3430023,8.4850006,0C54.9027328,75.9698257,54.9017334,72.1718216,52.5597343,69.8278275z"/></svg>',

        paragraph: $('p'),
        heading1: $('h1'),
        heading2: $('h2'),
        heading3: $('h3'),
        heading4: $('h4'),
        btn: $('.btn'),
        // link : $('a'),
        cartDesigner: $('.cart__front_designer'),

        textarea: $('textarea'),

        bodyBack: $('.body-back'),

        rellax: '.rellax'

    };

    (function ($) {
        $.fn.rewRellax = function () {

            var bodyWidth = DOMs.documentBody.width();

            var bodyCoof = bodyWidth / 1371.42;

            var make = function make() {
                var rellaxDiv = $(this).attr('data-rellax-speed');

                rellaxDiv = rellaxDiv * bodyCoof;

                $(this).attr('data-rellax-speed', rellaxDiv);
            };
            return this.each(make);
        };
    })(jQuery);

    $(window).on('load resize', function () {
        if (window.matchMedia("(max-width: 767px)").matches) {

            DOMs.mebuLang.prependTo('.navbar__panel .container .row');
        } else if (window.matchMedia("(min-width: 767px)").matches) {

            // DOMs.mebuLang.prependTo('.navbar__panel .container .row');

        } else if (window.matchMedia("(min-width: 1200px)").matches) {

            $('.rellax').rewRellax();

            new Rellax(DOMs.rellax);
        } else if (window.matchMedia("(min-width: 568px)").matches) {

            var max = $(DOMs.gridMasonryItems[0]).outerHeight();

            for (var i = 0; i < DOMs.gridMasonryItems.length; i++) {
                if (max < $(DOMs.gridMasonryItems[i]).outerHeight()) {
                    max = $(DOMs.gridMasonryItems[i]).outerHeight();
                }
            }

            if (DOMs.gridMasonryItems.length === 1 || DOMs.gridMasonryItems.length === 2) {
                DOMs.gridMasonry.css('max-height', max + 100);
            } else if (DOMs.gridMasonryItems.length === 3 || DOMs.gridMasonryItems.length === 4) {
                DOMs.gridMasonry.css('max-height', max * 2 + 100);
            } else if (DOMs.gridMasonryItems.length === 5 || DOMs.gridMasonryItems.length === 6) {
                DOMs.gridMasonry.css('max-height', max * 3 + 200);
            }
        }
    });

    $(document).ready(function () {

        new WOW().init();
        autosize(DOMs.textarea);

        DOMs.paragraph.addClass('wow');
        DOMs.heading1.addClass('wow');
        DOMs.heading2.addClass('wow');
        DOMs.heading3.addClass('wow');
        DOMs.heading4.addClass('wow');
        DOMs.btn.addClass('wow');
        // DOMs.link.addClass('wow');
        DOMs.cartDesigner.addClass('wow');

        //  DESIGNER LINK
        var designerHover = function designerHover() {
            var desArr = DOMs.designerListLink;
            var desImgArr = DOMs.designerListPhoto;

            var _loop = function _loop(i) {
                $(desArr[i]).hover(function () {
                    desImgArr.removeClass('visible');
                    $(desImgArr[i]).addClass('visible');
                }, function () {
                    desImgArr.removeClass('visible');
                });
            };

            for (var i = 0; i < desArr.length; i++) {
                _loop(i);
            }
        };
        designerHover();

        DOMs.bodyBack.on('scrollSpy:enter', function () {
            var color = $(this).attr('data-bg');
            DOMs.documentBody.css('background', color);
        }).scrollSpy();

        // EVENTS
        $('.event .link-overline').hover(function () {
            $(this).parent().parent().parent().toggleClass('active');
        });

        // ========== MENU ==========

        DOMs.menuTrigger.click(function (e) {
            e.preventDefault();
            DOMs.documentBodyHtml.toggleClass('open');
        });

        DOMs.menuBucket.click(function (e) {
            e.preventDefault();
            DOMs.documentBodyHtml.toggleClass('open-bucket');
        });

        // ========== SELECT ==========

        // ----- CHOSEN -----
        DOMs.selectChosen.chosen({
            disable_search_threshold: 4000,
            no_results_text: "Нічого не знайдено"
        });

        // ----- SELECT2 -----
        DOMs.selectSelect2Siluet.select2({
            placeholder: "Силует",
            minimumResultsForSearch: -1
        }).on('select2:opening', function () {
            $('main').addClass('filter');
        }).on('select2:closing', function () {
            $('main').removeClass('filter');
        });

        DOMs.selectSelect2Designer.select2({
            placeholder: "Дизайнер",
            minimumResultsForSearch: -1
        }).on('select2:opening', function () {
            $('main').addClass('filter');
        }).on('select2:closing', function () {
            $('main').removeClass('filter');
        });

        // ----- SLICK SLIDER -----
        DOMs.sliderProduct.slick({
            prevArrow: DOMs.sliderArrowDarkLeft,
            nextArrow: DOMs.sliderArrowDarkRight,
            slidesToScroll: 2,
            variableWidth: true,
            infinitie: false,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToScroll: 1
                }
            }]
        });

        DOMs.sliderInstagram.slick({
            prevArrow: DOMs.sliderArrowDarkLeft,
            nextArrow: DOMs.sliderArrowDarkRight,
            responsive: [{
                breakpoint: 768,
                settings: {
                    variableWidth: true,
                    arrows: false
                }
            }]
        });

        DOMs.sliderAbout.slick({
            prevArrow: DOMs.sliderArrowDarkLeft,
            nextArrow: DOMs.sliderArrowDarkRight,
            dots: true,
            responsive: [{
                breakpoint: 568,
                settings: {
                    arrows: false
                }
            }]
        });

        DOMs.sliderLook.slick({
            prevArrow: DOMs.sliderArrowDarkLeft,
            nextArrow: DOMs.sliderArrowDarkRight,
            responsive: [{
                breakpoint: 768,
                settings: {
                    variableWidth: true,
                    arrows: false
                }
            }]
        });

        DOMs.sliderSummary.slick({
            prevArrow: DOMs.sliderArrowDarkLeft,
            nextArrow: DOMs.sliderArrowDarkRight,
            responsive: [{
                breakpoint: 768,
                settings: {
                    variableWidth: true,
                    arrows: false
                }
            }]
        });

        // ========== ACCORDION ==========
        DOMs.collection.rewAccordion();

        // ========== DATEPICKER ==========
        DOMs.datepicker.flatpickr({
            "locale": "ru",
            dateFormat: 'd M Y',
            prevArrow: DOMs.datepickerPrev,
            nextArrow: DOMs.datepickerNext
        });

        // ========== SCROLLSPY ==========

        // ----- SCROLLING CLASS CHANGE -----
        // $(window).scroll(() => {
        //     if ($(this).scrollTop() > 200) {
        //         $(".link-up").addClass("visible");
        //     }
        //     else {
        //         $(".link-up").removeClass("visible");
        //     }
        // });

        // ----- ANCHOR LINKS SCROLLING -----
        // DOMs.linkSmooth.click((e) => {
        //     e.preventDefault();
        //     const id = $(this).attr("href");
        //     let top = $(id).offset().top - 70;
        //     DOMs.documentBodyHtml.animate({
        //         scrollTop: top
        //     }, 1500);
        // });

        // if (bowser.firefox) {
        //     DOMs.body.addClass('brow-firefox');
        // }
        // if (bowser.safari) {
        //     DOMs.body.addClass('brow-safari');
        // }
        // if (bowser.msie) {
        //     DOMs.body.addClass('brow-msie');
        // }
        // if (bowser.msedge) {
        //     DOMs.body.addClass('brow-msedge');
        // }
        if (bowser.windows) {
            alert();
            DOMs.documentBody.niceScroll({});
        }
    });

    // ========== !!! RESPONSIVE SCRIPTS !!! ===========

})(jQuery);

(function () {
    'use strict';
})();