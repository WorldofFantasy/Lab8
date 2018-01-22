$(function() {
    var $from = $('.from');
    var $to = $('.to');
    var $func = $('.func');
    var $button = $('.btn');
    var $output = $('.output');
    var $stop = $('.stop');

    $button.click(function (e) {
        e.preventDefault();
        $stop.show();
        var begin = parseFloat($from.val());
        var end = parseFloat($to.val());
        var func = $func.val();
        var point = [];
        const dx = 0.2;

        var dynamic = setInterval(function () {
            for (var x = begin; x<=end; x+=0.1) {
                point.push([x,eval(func)]);
            }

            var points = [{data: point, label: func}];
            $.plot($output, points, {});

            begin += dx;
            end += dx;
            point = [];
        }, 100);

        $stop.click(function () {
            clearInterval(dynamic);
        })
    });
});
