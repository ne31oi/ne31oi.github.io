/* ------------------------------------------------------------------------------
 *
 *  # User profile - tabbed
 *
 *  Demo JS code for user_pages_profile_tabbed.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var UserProfileTabbed = function() {


    //
    // Setup module components
    //

    // Charts
    var _componentEcharts = function() {
 
        //
        // Resize charts
        //

        // Resize function
        var triggerChartResize = function() {
            weekly_statistics_element && weekly_statistics.resize();
            balance_statistics_element && balance_statistics.resize();
            available_hours_element && available_hours.resize();
        };

        // On sidebar width change
        $(document).on('click', '.sidebar-control, .navbar-toggler', function() {
            setTimeout(function () {
                triggerChartResize();
            }, 0);
        });

        // On window resize
        var resizeCharts;
        window.onresize = function () {
            clearTimeout(resizeCharts);
            resizeCharts = setTimeout(function () {
                triggerChartResize();
            }, 200);
        };

        // Resize charts when hidden element becomes visible
        $('.nav-link[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            triggerChartResize();
        });
    };

    // Uniform
    var _componentUniform = function() {
        if (!$().uniform) {
            console.warn('Warning - uniform.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.form-input-styled').uniform({
            fileButtonClass: 'action btn bg-warning'
        });
    };

    // Select2
    var _componentSelect2 = function() {
        if (!$().select2) {
            console.warn('Warning - select2.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.form-control-select2').select2({
            minimumResultsForSearch: Infinity
        });
    };

  

    return {
        init: function() {
            _componentEcharts();
            _componentUniform();
            _componentSelect2();

        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    UserProfileTabbed.init();
});
