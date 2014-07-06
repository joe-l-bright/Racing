$(document).ready(function () {
    var raceDone = false,
        value = 5,
        color = 100000;

    $('.racer').each(function(index, racer){
        var $racer = $(racer);
        value = value + 30;
        color = color + 9000;
        $racer.html($racer.data("name"));
        $racer.css('top', value);
        $racer.css('background-color', '#' + color)
        $racer.css('color', 'white');
    });

    $('#race').click(function () {
        function race(name, val) {
            if (!raceDone) {
                var width = $('#main').width();
                if (val >= width) {
                    $('#winner').html(name.data('name') + " WINS");
                    raceDone = true;
                } else {
                    val = Math.random() * 100 + val;
                    if (val > width) {
                        val = width;
                    }
                    name.css("left", val.toString() + "px");
                    setTimeout(race, val, name, val);
                }
            }
        }

        $('.racer').each(function(index, racer){
            race($(racer), 1);
        })
    });
});



