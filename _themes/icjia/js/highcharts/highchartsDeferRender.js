(function (H) {
    function deferRender (proceed) {
        var series = this,
            $renderTo = $(this.chart.container.parentNode);

        // It is appeared, render it
        if ($renderTo.is(':appeared') || !series.options.animation) {
            proceed.call(series);

        // It is not appeared, halt renering until appear
        } else  {
            $renderTo.appear(); // Initialize appear plugin
            $renderTo.on('appear', function () {
                proceed.call(series);
            });
        }
    }

    H.wrap(H.Series.prototype, 'render', deferRender);

}(Highcharts));
