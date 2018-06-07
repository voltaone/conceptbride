(function ($) {
    $.fn.rewAccordion = function() {
        let make = function () {
            const accordionLinks = $(this).find('.collection_heading');
            const accordionContent = $(this).find('.collection__panel');

            for (let i = 0; i < accordionLinks.length; i++) {
                $(accordionLinks[i]).click(function(e) {
                    e.preventDefault();

                    const j = $(accordionLinks).index(this);

                    if ($(this).hasClass('active')) {

                        $(this).removeClass('active');
                        $(accordionContent[j]).slideUp();

                    } else {

                        $(accordionLinks).removeClass('active');
                        $(accordionContent).slideUp()

                        $(this).addClass('active');
                        $(accordionContent[j]).slideDown();
                    }
                });
            }
        }
        return this.each(make);
    };
})(jQuery);