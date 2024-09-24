$(document).ready(function () {
    var $sections = $('#section_about, #section_overview, #section_design, #section_sitemap, #section_desktop, #section_mobile, #section_highlights');
    var $navLinks = $('.miniNav--nav_content-stage a');
    var $nav = $('.miniNav--nav_content');
    var navOffsetTop = $nav.offset().top;

    $(window).on('scroll', function () {
        var scrollTop = $(window).scrollTop();

        if (scrollTop > navOffsetTop) {
            $nav.addClass('fixed');
        } else {
            $nav.removeClass('fixed');
        }

        $sections.each(function () {
            var $section = $(this);
            var sectionTop = $section.offset().top;
            var sectionBottom = sectionTop + $section.outerHeight();

            if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
                var id = $section.attr('id');
                var $currentLink = $navLinks.filter('[href="#' + id + '"]');

                if (!$currentLink.hasClass('active')) {
                    $navLinks.removeClass('active');
                    $currentLink.addClass('active');
                }
            }
        });
    });

});