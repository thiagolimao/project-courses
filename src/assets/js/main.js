!(function($) {
    "use strict";

    // Preloader
    $(window).on('load', function() {
        if ($('#preloader').length) {
            $('#preloader').delay(100).fadeOut('slow', function() {
                $(this).remove();
            });
        }
    });

    // Init AOS
    function aos_init() {
        AOS.init({
            duration: 1000,
            once: true
        });
    }

    $(window).on('load', function() {
        aos_init();
        $('.select2').select2({
            minimumResultsForSearch: Infinity
        });

        $('#filter-courses').on('click', function() {
            $('#aside').toggleClass('openFilter')
        });

        $('.closeFilter').on('click', function() {
            $('#aside').removeClass('openFilter')
        });
    });

})(jQuery);